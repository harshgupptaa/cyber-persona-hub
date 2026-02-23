import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", code: "00" },
  { label: "Recon", href: "#about", code: "01" },
  { label: "Arsenal", href: "#skills", code: "02" },
  { label: "Ops", href: "#experience", code: "03" },
  { label: "Projects", href: "#projects", code: "04" },
  { label: "Contact", href: "#contact", code: "05" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      const sections = navItems.map((n) => n.href.substring(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/95 shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
          : "py-4 bg-transparent"
      } backdrop-blur-xl border-b border-primary/10`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="group flex items-center gap-2 magnetic-hover"
        >
          <div className="w-8 h-8 border border-primary/50 flex items-center justify-center font-display text-xs text-primary glow-border">
            HG
          </div>
          <span className="font-display text-sm tracking-[0.3em] text-primary text-glow hidden sm:block">
            HARSH_GUPTA
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                className={`group relative px-4 py-2 text-sm font-mono transition-all duration-300 magnetic-hover ${
                  activeSection === item.href
                    ? "text-primary text-glow"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="text-primary/50 text-xs mr-1">{item.code}.</span>
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-px bg-primary"
                    style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 magnetic-hover p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-primary block"
            style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.5)" }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-primary block"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-primary block"
            style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.5)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-primary/10 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 px-6 py-4 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all border-b border-primary/5"
              >
                <span className="text-primary/50">[{item.code}]</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
