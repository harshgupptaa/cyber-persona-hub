import { motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const idorMarkdown = `
<aside>
💡 **Insecure Direct Object References (IDOR)** 
is a type of access control vulnerability that arises when an application uses user-supplied input to access objects directly.
</aside>

# Tips

## 1. Parameters

Top IDOR parameters to look out for

\`\`\`
id=
uid=
gid=
user=
account=
number=
order=
no=
doc=
file=
key=
email=
group=
profile=
edit=
report=
\`\`\`

## 2. UUIDs

UUIDs are Universally Unique Identifiers, and you will encounter them often when hunting for IDORs. They are designed to be non-guessable, which might seem to shut down avenues for exploitation. Many bug bounty programs do not consider IDORs on UUIDs.

But don’t be deterred; here are a few tricks to test these seemingly secure IDs

1. Look for Leaks. UUIDs can sometimes be exposed in other parts of the application. Check **logs**, **error messages**, and the **page source**.
2. Don’t assume all UUIDs are created perfectly. Test if they are truly non-guessable. Sometimes, developers implement custom UUID generation methods that may not be as random as expected.
3. Try simpler modifications. Replace a complex UUID in the URL with basic numeric sequences or predictable patterns like \`0000000-0000-0000-000000000000\`.  You’d be surprised how often the default values are overlooked in access controls.
4. Dig in the archives. Utilize tools like the Wayback Machine or Common Crawl. These archives might hold versions of the application where UUIDs were exposed.

## 3. Parameter Pollution

Consider the following endpoint: 

\`\`\`
/api/messages?user_id=<USER_ID>
\`\`\`

If you can’t find an IDOR on the \`user_id\` parameter, try to add another \`user_id\` .

\`\`\`
/api/messages?user_id=<USER_ID>&user_id=<OTHER_ID>
\`\`\`

Another variation involves lists. 

\`\`\`
/api/messages?user_ids[]=<USER_ID>&user_ids[]=<OTHER_ID> 
\`\`\`

## 4. Different Method

Test all HTTP methods. 

\`\`\`
GET
POST
PUT
PATCH
DELETE
\`\`\`

## 5. Hashing/Encoding

Consider this URL parameter: 

\`?filename=ZmlsZV8xMjMucGRm\`

The ‘file id’ string is base64 encoded. Decoding it, modify the filename, and then re-encode it: 

Initial String -> \`ZmlsZV8xMjMucGRm\`
Base64 Decode  -> \`file_123.pdf\`
Change         -> \`file_111.pdf\`
Base64 Encode  -> \`ZmlsZV8xMTEucGRm\`

Substituting the original encoded string with this new one in the URL could allow access to a different file.

Parameters might be encoded with a more sophisticated scheme than base64 or it might be hashed. In this case, you can try tools like [CyberChef](https://gchq.github.io/CyberChef/) or [hashes.com](https://hashes.com/en/decrypt/hash)

## 6. Fuzzing

Sometimes fuzzing can expose overlooked endpoints.

Consider \`/api/v1/messages/view\` There are two potential points to fuzz here

\`/api/$FUZZ1$/messages/view$FUZZ2$\`

## 7. No ID, no Problem

Not every endpoint will show an \`ID\` parameter. 

1. Start testing by appending potential ID parameters.
2. Replace generic terms with specific IDs. Often, endpoints use placeholders like \`self\` or \`user\` to refer to the current session's user.

## Bonus: IDOR + XSS

When you combine IDOR with self-XSS, you can often create a stored-XSS targeted towards a specific user.
Consider a scenario where you can create a folder via an API. 
\`/api/createFolder?user_id=123&folder_name=test\`

The impact of a self-XSS in the \`folder_name\` would be rather limited since you only expose yourself to it. However, if there is also an IDOR vulnerability in the \`user_id\` parameter, such that you can create folders for different users, you can chain these two vulnerabilities. In this case, you can store malicious scripts directly in the workspace of other users. When this user accesses his workspace, the XSS triggers. Through chaining these two vulnerabilities the impact got significantly increased.
`;

const NotesPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <CursorGlow />
            <Navbar />

            <main className="flex-1 container mx-auto px-6 py-32 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Knowledge Base]</span>
                    <h1 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-2">
                        PENTEST NOTES
                    </h1>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-glass border border-primary/20 p-8 min-h-[50vh] flex flex-col"
                >
                    <div className="font-mono text-sm text-primary/60 mb-8 border-b border-primary/10 pb-4">
                        // Cataloguing vulnerabilities, methodology, and exploit snippets...
                    </div>

                    <div className="prose prose-invert max-w-none prose-pre:bg-primary/5 prose-pre:border prose-pre:border-primary/20 prose-a:text-primary hover:prose-a:text-secondary hover:prose-a:text-glow prose-headings:font-display prose-headings:text-glow prose-headings:text-primary">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {idorMarkdown}
                        </ReactMarkdown>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default NotesPage;
