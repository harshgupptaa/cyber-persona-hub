import { motion } from "framer-motion";

const contactCards = [
  { icon: "📍", title: "BASE", info: "India" },
  { icon: "📞", title: "COMMS", info: "+91-965XXXXXXX", href: "tel:+919650000000" },
  { icon: "✉️", title: "SIGNAL", info: "bughunter6464@gmail.com", href: "mailto:bughunter6464@gmail.com" },
  { icon: "🌐", title: "DOMAIN", info: "harshpentest.in", href: "https://harshpentest.in" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshguppta/" },
  { label: "GitHub", href: "https://github.com/harshgupptaa" },
  { label: "Medium", href: "https://medium.com/@harshharshgupta4646" },
  { label: "TryHackMe", href: "https://tryhackme.com/r/p/harshguppta" },
  { label: "Bugcrowd", href: "https://bugcrowd.com/h/harsh_guppta" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-6 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary/60 text-xs tracking-[0.5em] uppercase">[Section 05]</span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-gradient-neon mt-4 mb-4">
            ESTABLISH CONTACT
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ready to discuss security assessments, collaborate on research, or explore opportunities.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-glass border border-primary/10 p-5 text-center hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)] transition-all duration-500"
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <div className="font-display text-xs tracking-[0.2em] text-primary/60 mb-2">{card.title}</div>
              {card.href ? (
                <a href={card.href} className="font-mono text-sm text-foreground hover:text-primary transition-colors">{card.info}</a>
              ) : (
                <p className="font-mono text-sm text-foreground">{card.info}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="terminal-window p-8 text-center mb-16"
        >
          <div className="font-mono text-sm text-primary/60 mb-4">
            // Ready to secure your digital assets?
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">
            Let's Build Something <span className="text-primary text-glow">Unbreakable</span>
          </h3>
          <a
            href="https://forms.gle/Zj6nsyoPUHZhGyUG7"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover group relative inline-block px-10 py-4 font-display text-sm tracking-wider uppercase border border-primary text-primary hover:text-primary-foreground transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10">Initiate Contact</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
        </motion.div>

        {/* Social links */}
        <div className="text-center">
          <div className="font-mono text-xs text-primary/40 tracking-[0.3em] mb-6">SECURE CHANNELS</div>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="magnetic-hover px-4 py-2 font-mono text-xs border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
