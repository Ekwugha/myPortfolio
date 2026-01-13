import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { FiChevronDown as ChevronDown, FiArrowRight } from "react-icons/fi";

// Dynamically import the 3D Scene component to avoid SSR issues
const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Fade out button when scrolled past hero
  const buttonOpacity = useTransform(scrollY, [0, 300, 500], [1, 0.3, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Animated Background Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* 3D Background */}
      {mounted && (
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <Scene3D />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 leading-tight tracking-tight">
            <span className="gradient-text text-glow">Elochukwu Ekwugha</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
            Frontend &amp; Mobile Developer — React, Next.js, React Native
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Designing and engineering web &amp; mobile systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
          style={{ opacity: buttonOpacity }}
        >
          <motion.a
            href="#projects"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSmoothScroll}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-[14px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent dark:bg-white/8 bg-gray-900/90 dark:backdrop-blur-[12px] backdrop-blur-md dark:border-white/18 border-cyan-500/40 dark:text-gray-50 text-gray-50 font-medium text-lg"
            style={{
              boxShadow:
                "inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px rgba(56, 189, 248, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.2)",
            }}
            whileHover={{
              y: -2,
              boxShadow:
                "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 8px 35px rgba(56, 189, 248, 0.45), 0 0 30px rgba(56, 189, 248, 0.35), 0 0 0 1px rgba(56, 189, 248, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.25,
            }}
          >
            {/* Subtle light sweep on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: isHovered ? "200%" : "-100%",
              }}
              transition={{
                type: "tween",
                ease: [0.4, 0, 0.2, 1],
                duration: 0.3,
              }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <span>Explore Selected Work</span>
              <motion.span
                initial={{ x: -8, opacity: 0 }}
                animate={{
                  x: isHovered ? 0 : -8,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  type: "tween",
                  ease: [0.4, 0, 0.2, 1],
                  duration: 0.25,
                }}
                className="inline-flex items-center"
              >
                <FiArrowRight size={18} />
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary text on hover - positioned outside button */}
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 4,
            }}
            transition={{
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.25,
            }}
            className="mt-2 text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap pointer-events-none"
          >
            Production systems • Web & Mobile
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
}
