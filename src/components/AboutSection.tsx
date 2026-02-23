import { motion } from "framer-motion";

const certifications = [
  "Cehv12 (certified ethical hacker)", "CAPT", "CWSE", "CRTP(certified red team professional)"
];

const infoItems = [
  { label: "ALIAS", value: "harsh_guppta" },
  { label: "ROLE", value: "Red Team/VAPT/Offensive Security" },
  { label: "EXP", value: "4+" },
  { label: "BASE", value: "India" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Section 01]</span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-4">
            RECONNAISSANCE
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal-style info card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="terminal-window"
          >
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-primary/60 mb-4">// Target profile scan results</div>
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-2"
                >
                  <span className="text-secondary">$</span>
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="text-foreground">{item.value}</span>
                </motion.div>
              ))}
              <div className="border-t border-primary/10 mt-4 pt-4">
                <div className="text-primary/60 mb-2">// Certifications loaded</div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span key={cert} className="px-2 py-1 text-xs border border-primary/30 text-primary magnetic-hover hover:glow-border transition-all duration-300">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-foreground">
              Offensive Security <span className="text-primary text-glow">Specialist</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I operate at the intersection of <span className="text-primary">offense and defense</span>. With 4+ years of hands-on experience in Vulnerability Assessment and Penetration Testing, I've secured critical infrastructure for government agencies and major airlines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From dissecting web application logic to executing full-scope red team operations, I specialize in finding the vulnerabilities others miss. My approach combines automated scanning with manual testing methodologies to deliver comprehensive security assessments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as an <span className="text-secondary">Application Security Engineer</span>, where I lead security assessments across web, mobile, API, and network infrastructure — collaborating with DevSecOps teams to harden mission-critical systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/harshguppta/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-hover group relative px-6 py-3 font-display text-xs tracking-wider uppercase border border-primary text-primary hover:text-primary-foreground transition-colors duration-500 overflow-hidden"
              >
                <span className="relative z-10">LinkedIn Profile</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              <a
                href="https://github.com/harshgupptaa"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-hover group relative px-6 py-3 font-display text-xs tracking-wider uppercase border border-secondary/50 text-secondary hover:text-secondary-foreground transition-colors duration-500 overflow-hidden"
              >
                <span className="relative z-10">GitHub</span>
                <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
