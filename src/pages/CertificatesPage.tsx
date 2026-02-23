import { motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We will map these based on the user's provided filenames and target labels
const certificates = [
    {
        id: "thm-advent-2025",
        title: "Advent of Cyber 2025",
        issuer: "TryHackMe",
        image: "/certificates/advent_2025.png", // to be moved to public/certificates
        description: "Completed 24 cyber security challenges proving understanding of cyber security fundamentals."
    },
    {
        id: "thm-advent-2024",
        title: "Advent of Cyber 2024",
        issuer: "TryHackMe",
        image: "/certificates/advent_2024.png",
        description: "Completed 24 cyber security challenges showing consistency, tenacity & continuous learning."
    },
    {
        id: "soc-level-1",
        title: "SOC Level 1 Learning Path",
        issuer: "TryHackMe",
        image: "/certificates/soc_lvl1.png",
        description: "Successfully completed the SOC Level 1 Learning Path (86 hours 50 minutes)."
    },
    {
        id: "crtp",
        title: "Certified Red Team Professional (CRTP)",
        issuer: "Altered Security",
        image: "/certificates/crtp.png",
        description: "Successfully completed all the requirements for the Active Directory Attack-Defense Lab."
    },
    {
        id: "ceh",
        title: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        image: "/certificates/ceh.png",
        description: "Successfully completed all requirements and criteria for Certified Ethical Hacker."
    },
    {
        id: "air-india-dream-team",
        title: "Air India Dream Team",
        issuer: "Air India",
        image: "/certificates/air_india_dream.png",
        description: "Awarded for being a great team player and helping the team reach its goal."
    },
    {
        id: "ncx-ctf-2024",
        title: "NCX Government CTF (BHARAT 2024)",
        issuer: "National Security Council Secretariat & Rashtriya Raksha University",
        image: "/certificates/ncx_ctf.jpg",
        description: "Certificate of Participation in the BHARAT - National Cybersecurity Exercise 2024."
    }
];

const CertificatesPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <CursorGlow />
            <Navbar />

            <main className="flex-1 container mx-auto px-6 py-32 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Validation]</span>
                    <h1 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-2">
                        CERTIFICATIONS
                    </h1>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-glass border border-primary/20 overflow-hidden flex flex-col group magnetic-hover"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-black/50 p-4 flex items-center justify-center">
                                {/* The user's certificate images will render here. We add a fallback just in case the file is missing */}
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/placeholder.svg"; // Fallback if image not found during dev
                                    }}
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                            <div className="p-6 flex flex-col flex-1 border-t border-primary/10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-display text-xl text-foreground font-bold group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                </div>

                                <span className="font-mono text-xs text-secondary mb-4 inline-block">
                                    Issuer: {cert.issuer}
                                </span>

                                <p className="text-muted-foreground text-sm flex-1 mb-6">
                                    {cert.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between text-xs font-mono">
                                    <span className="text-primary/60">Status:</span>
                                    <span className="text-accent text-glow">VERIFIED</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hall of Fame Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-32 mb-12 text-center"
                >
                    <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Trophies]</span>
                    <h2 className="text-3xl sm:text-5xl font-display font-black text-gradient-neon mt-4 mb-2">
                        HALL OF FAME
                    </h2>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-glass border border-primary/20 p-6 flex flex-col items-center justify-center aspect-square group magnetic-hover relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                            src="/certificates/hof_chime.png"
                            alt="Chime Hall of Fame"
                            className="w-16 h-16 object-contain mb-4 group-hover:scale-110 transition-transform duration-500"
                        />
                        <span className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            Chime
                        </span>
                        <div className="absolute top-2 right-2 flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CertificatesPage;
