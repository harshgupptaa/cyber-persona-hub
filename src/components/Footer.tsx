import { motion } from "framer-motion";

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshguppta/" },
  { label: "GitHub", href: "https://github.com/harshgupptaa" },
  { label: "Medium", href: "https://medium.com/@harshharshgupta4646" },
  { label: "TryHackMe", href: "https://tryhackme.com/r/p/harshguppta" },
  { label: "Bugcrowd", href: "https://bugcrowd.com/h/harsh_guppta" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-8 md:py-10 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-6 border border-primary/30 flex items-center justify-center font-display text-[8px] text-primary">
              HG
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Harsh Gupta — All systems secured.
            </span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors magnetic-hover px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="font-mono text-[10px] text-primary/20 tracking-[0.5em]">
            OFFENSIVE SECURITY • RED TEAM • VAPT
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
