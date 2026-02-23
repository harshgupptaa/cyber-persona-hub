import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    label: string;
}

const AnimatedCounter = ({ end, duration = 2500, label }: AnimatedCounterProps) => {
    const [count, setCount] = useState(1);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
            const currentCount = Math.floor(1 + (end - 1) * easeOutQuart);

            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    const formattedCount = new Intl.NumberFormat().format(count);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="bg-glass border border-primary/20 p-5 mt-8 text-center hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:border-primary/50 transition-all duration-300"
        >
            <div className="font-display text-4xl sm:text-5xl font-bold text-primary text-glow mb-2">
                {formattedCount}+
            </div>
            <div className="font-mono text-sm text-secondary uppercase tracking-widest">
                {label}
            </div>
        </motion.div>
    );
};

export default AnimatedCounter;
