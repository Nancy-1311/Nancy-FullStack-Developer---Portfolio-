import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const IntroLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950"
        >
          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative text-center"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-6xl
                md:text-8xl
                font-thin
                tracking-[0.25em]
                bg-gradient-to-r
                from-cyan-400
                via-white
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              NANCY
            </motion.h1>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "180px",
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="
                mx-auto
                h-[2px]
                mt-5
                bg-gradient-to-r
                from-cyan-400
                via-purple-500
                to-cyan-400
              "
            />

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="
                mt-6
                text-zinc-400
                tracking-[0.4em]
                uppercase
                text-sm
              "
            >
              Full Stack Developer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;