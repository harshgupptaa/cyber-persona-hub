import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "OFFENSIVE SECURITY",
    icon: "⚔️",
    skills: [
      "AI in Pentest", "Web App VAPT (Blackbox/Whitebox)", "Mobile VAPT (Android/iOS)", "API Pentesting", "Infra VAPT", "OT VAPT (PLC/SCADA/ICS)", "Red Team", "Active Directory", "Reverse Engineering", "Cloud Security", "SIEM & SOC", "DAST", "SAST"
    ],
  },
  {
    title: "PROGRAMMING LANGUAGE",
    icon: "💻",
    skills: [
      "JavaScript", "Python", "Bash", "Go", "Java", "WordPress"
    ],
  },
  {
    title: "OS",
    icon: "💽",
    skills: [
      "Kali Linux", "Mac", "Windows"
    ],
  },
  {
    title: "TOOLS",
    icon: "🔧",
    skills: [
      "BurpSuite", "Netsparker", "SQL-map", "SSL-scan", "Metasploit", "Mobexler", "Wireshark", "Drozer", "Frida", "Objection", "JADX", "MobSF", "JD-GUI", "Ghidra", "Tenable Nessus", "Nmap", "Cobalt Strike", "Bloodhound", "Checkmarx", "Fortify", "Postman", "Swagger"
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Section 02]</span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-4">
            TECHNICAL ARSENAL
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-glass border border-primary/10 p-6 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-sm tracking-[0.2em] text-primary text-glow">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.15 + i * 0.05 }}
                    className="font-mono text-xs px-3 py-1.5 border border-primary/20 text-foreground bg-primary/5 hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  >
                    [{skill}]
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
