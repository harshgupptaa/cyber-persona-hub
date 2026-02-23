import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CyberScene from "./CyberScene";

const typingTexts = [
  "Ethical Hacker",
  "Penetration Tester",
  "Red Team Operator",
  "Bug Bounty Hunter",
  "Security Researcher",
  "VAPT Specialist",
];

const AnimatedStat = ({ end, label, delay = 0, suffix = "" }: { end: number, label: string, delay?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;
    let animationFrame: number;

    const beginAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(easeOutQuad * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(step);
    };

    const timeoutFrame = setTimeout(beginAnimation, delay * 1000);

    return () => {
      clearTimeout(timeoutFrame);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="font-display text-3xl sm:text-4xl font-bold text-primary text-glow">{count}{suffix}</div>
      <div className="font-mono text-xs text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [whoamiText, setWhoamiText] = useState("");

  useEffect(() => {
    const text = "whoami";
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setWhoamiText(text.substring(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const typeEffect = useCallback(() => {
    const current = typingTexts[textIndex];
    if (isDeleting) {
      setDisplayText(current.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    } else {
      setDisplayText(current.substring(0, displayText.length + 1));
      if (displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    }
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
    const timeout = setTimeout(typeEffect, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [typeEffect, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      <CyberScene />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-[1]" style={{ animation: "grid-move 30s linear infinite" }} />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 z-[2]"
        style={{ animation: "scan-line 4s linear infinite" }}
      />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(150_30%_8%)_0%,_hsl(var(--background))_70%)] z-[1]" />

      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="terminal-window inline-block mb-8 mt-16 px-6 py-3"
        >
          <span className="font-mono text-primary text-sm">
            <span className="text-secondary">root@kali</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">{whoamiText}</span>
            <span className="text-foreground" style={{ animation: "blink-cursor 1s infinite" }}>{whoamiText.length < 6 ? "█" : ""}</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-9xl font-display font-black mb-4 tracking-tight"
        >
          <span className="text-gradient-hero block" style={{ animation: "glitch-skew 10s infinite linear alternate" }}>
            HARSH
          </span>
          <span className="text-gradient-hero block" style={{ animation: "glitch-skew 8s infinite linear alternate-reverse" }}>
            GUPTA
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-lg sm:text-2xl">
            <span className="text-secondary">&gt; </span>
            <span className="text-primary text-glow border-r-2 border-primary pr-1" style={{ animation: "blink-cursor 1s infinite" }}>
              {displayText}
            </span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light"
        >
          Breaking systems to make them stronger. 4+ years dismantling vulnerabilities across
          <span className="text-primary"> web apps</span>,
          <span className="text-secondary"> APIs</span>,
          <span className="text-accent"> cloud infrastructure</span> &
          <span className="text-primary"> mobile platforms</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="magnetic-hover group relative px-8 py-3 font-display text-sm tracking-wider uppercase overflow-hidden border border-primary text-primary hover:text-primary-foreground transition-colors duration-500"
          >
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a
            href="https://medium.com/@harshharshgupta4646"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover group relative px-8 py-3 font-display text-sm tracking-wider uppercase overflow-hidden border border-secondary text-secondary hover:text-secondary-foreground transition-colors duration-500"
          >
            <span className="relative z-10">Read Blog</span>
            <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a
            href="https://bugbounty.harshpentest.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover group relative px-8 py-3 font-display text-sm tracking-wider uppercase overflow-hidden border border-accent/50 text-accent hover:text-accent-foreground transition-colors duration-500"
          >
            <span className="relative z-10">Bug Bounty</span>
            <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <Link
            to="/certificates"
            className="magnetic-hover group relative px-8 py-3 font-display text-sm tracking-wider uppercase overflow-hidden border border-primary/80 text-primary hover:text-primary-foreground transition-colors duration-500"
          >
            <span className="relative z-10">Certificates</span>
            <div className="absolute inset-0 bg-primary/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          <AnimatedStat end={4} label="Years Experience" delay={1.6} suffix="+" />
          <AnimatedStat end={1000} label="Vulnerabilities Found" delay={1.7} suffix="+" />
          <AnimatedStat end={600} label="Projects Secured" delay={1.8} suffix="+" />
          <AnimatedStat end={2} label="CVEs Published" delay={1.9} suffix="" />
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 font-mono text-[10px] text-primary/20 z-[2] hidden lg:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ opacity: 0.3 + Math.random() * 0.7 }}>
            {Math.random().toString(16).substring(2, 10)}
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 right-4 font-mono text-[10px] text-primary/20 z-[2] hidden lg:block text-right">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ opacity: 0.3 + Math.random() * 0.7 }}>
            0x{Math.random().toString(16).substring(2, 10)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
