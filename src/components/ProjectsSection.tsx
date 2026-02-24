import { motion } from "framer-motion";

const projects = [
  {
    title: "Cybersecurity Awareness Training Tool",
    description: "Interactive gamified training platform educating users about phishing, social engineering, and security hygiene through real-world attack simulations.",
    tags: ["Python", "Security", "Education"],
    github: "https://github.com/harshgupptaa/Cybersecurity-Awareness-Training-Tool",
    live: "https://medium.com/@harshharshgupta4646",
    status: "DEPLOYED",
  },
  {
    title: "Advanced Subdomain Reconnaissance",
    description: "High-performance recon tool with multi-source subdomain enumeration, DNS resolution, and automated vulnerability fingerprinting for bug bounty workflows.",
    tags: ["Recon", "Bug Bounty", "Automation"],
    github: "https://github.com/harshgupptaa/harsh-subdomain-recon",
    live: "https://medium.com/@harshharshgupta4646",
    status: "ACTIVE",
  },
  {
    title: "CVE-2025-31125: Path Traversal",
    description: "Original security research and proof-of-concept exploit for a critical path traversal vulnerability. Includes detailed write-up and mitigation guidelines.",
    tags: ["CVE", "Research", "Exploit Dev"],
    github: "https://github.com/harshgupptaa/Path-Transversal-CVE-2025-31125-",
    live: "https://medium.com/@harshharshgupta4646",
    status: "PUBLISHED",
  },
  {
    title: "Advanced SIEM & EDR Platform",
    description: "Cross-platform SIEM with real-time monitoring, EDR integration, DLP, firewall analysis, threat intelligence feeds, and automated SOC reporting dashboards.",
    tags: ["SIEM", "EDR", "SOC", "Monitoring"],
    github: "https://github.com/harshgupptaa/SOC-Tool-Lab",
    live: "https://medium.com/@harshharshgupta4646",
    status: "IN DEVELOPMENT",
  },
  {
    title: "Security Metrics Dashboard",
    description: "Interactive analytics dashboard for visualizing pentest results, vulnerability trends, risk heat maps, and security KPIs for executive reporting.",
    tags: ["Dashboard", "Analytics", "Visualization"],
    github: "https://github.com/harshgupptaa/Excel-sheet-Dashboard-create-3",
    live: "https://medium.com/@harshharshgupta4646",
    status: "DEPLOYED",
  },
  {
    title: "Bug Bounty Methodology Checklist",
    description: "Comprehensive recon-to-report methodology for bug bounty hunters. Covers enumeration, testing, exploitation, and professional disclosure workflows.",
    tags: ["Bug Bounty", "Methodology", "Checklist"],
    github: "https://bugbounty.harshpentest.in/",
    live: "https://bugcrowd.com/h/harsh_guppta",
    status: "LIVE",
  },
];

const statusColors: Record<string, string> = {
  DEPLOYED: "text-primary border-primary/30",
  ACTIVE: "text-secondary border-secondary/30",
  PUBLISHED: "text-accent border-accent/30",
  "IN DEVELOPMENT": "text-muted-foreground border-muted-foreground/30",
  LIVE: "text-primary border-primary/30",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Section 04]</span>
          <h2 className="text-5xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-4">
            EXPLOIT LAB
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open-source tools, CVE research, and security projects built for the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-glass border border-primary/10 overflow-hidden hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] transition-all duration-500"
            >
              {/* Header with status */}
              <div className="p-5 border-b border-primary/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" style={{ animation: "pulse-glow 2s infinite" }} />
                    <span className="font-mono text-[10px] text-primary/60 tracking-wider">PROJECT</span>
                  </div>
                  <span className={`font-mono text-[9px] px-2 py-0.5 border tracking-wider ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 bg-primary/5 text-primary/70 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-hover font-mono text-xs text-primary hover:text-glow transition-all duration-300 flex items-center gap-1 py-2 md:py-1 px-1"
                  >
                    <span>[</span>Source<span>]</span>
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-hover font-mono text-xs text-secondary hover:text-glow-cyan transition-all duration-300 flex items-center gap-1 py-2 md:py-1 px-1"
                  >
                    <span>[</span>Details<span>]</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/harshgupptaa"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover group relative w-full sm:w-auto text-center inline-block px-10 py-4 font-display text-sm tracking-wider uppercase border border-primary text-primary hover:text-primary-foreground transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10">View All Repositories</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
