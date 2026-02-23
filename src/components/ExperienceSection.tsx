import { motion } from "framer-motion";

const experiences = [
  {
    date: "AUG 2025 — PRESENT",
    title: "Application Security Engineer",
    company: "Confidential",
    description: "Currently working as Application Security Engineer, managing comprehensive VAPT and Red Teaming engagements to secure critical infrastructure.",
    bullets: [
      "Leading comprehensive VAPT for web, mobile, and API systems",
      "Executing targeted Red Team operations to simulate advanced threat actor behaviors",
      "Collaborating closely with development teams to assure secure coding practices"
    ],
    tags: ["AppSec", "VAPT", "Red Team", "Secure Code"],
  },
  {
    date: "NOV 2023 — JUL 2025",
    title: "Senior Engineer — VAPT Engineering",
    company: "Air India (Airlines & Aviation)",
    description: "Spearheading offensive security operations across critical airline infrastructure, leading comprehensive security assessments and red team engagements.",
    bullets: [
      "Conducting advanced VAPT on web applications, APIs, mobile apps, and network infrastructure",
      "Collaborating with 100+ DevSecOps teams to implement security remediation strategies",
      "Executing red team operations and advanced persistent threat (APT) simulations",
      "Mentoring junior security professionals and establishing security best practices",
    ],
    tags: ["VAPT", "Red Team", "API Security", "DevSecOps"],
  },
  {
    date: "DEC 2022 — NOV 2023",
    title: "Security Engineer",
    company: "National Informatics Center (Government of India)",
    description: "Secured mission-critical government digital infrastructure across multiple ministries and departments.",
    bullets: [
      "Performed comprehensive VAPT assessments on high-priority government applications",
      "Delivered specialized security training programs for development teams",
      "Participated in blue team operations and incident response activities",
      "Established security frameworks and compliance standards",
    ],
    tags: ["Government", "Blue Team", "Compliance", "Training"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-6 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Section 03]</span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-4">
            OPERATIONS LOG
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-16 md:pl-20 mb-16 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-primary border-2 border-background z-10"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  boxShadow: "0 0 15px hsl(var(--primary) / 0.5)",
                  animation: "pulse-glow 2s infinite",
                }}
              />

              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="bg-glass border border-primary/10 p-6 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)] transition-all duration-500"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-primary tracking-wider">{exp.date}</span>
                  <span className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="text-xs text-muted-foreground">{exp.company}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + j * 0.05 }}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 text-xs">▹</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border border-primary/20 text-primary/70 tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
