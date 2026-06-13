import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-deadmatte text-institutional overflow-hidden selection:bg-terracotta selection:text-institutional">
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        variants={{
          hidden: { opacity: 0, scale: 0.98, borderColor: "var(--color-institutional)" },
          visible: { 
            opacity: 1, 
            scale: 1, 
            borderColor: "var(--color-institutional)",
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          },
          hover: { 
            borderColor: "var(--color-terracotta)", 
            scale: 1.02,
            transition: { type: "spring", stiffness: 600, damping: 25 }
          },
          tap: { 
            scale: 0.98,
            transition: { type: "spring", stiffness: 800, damping: 20 }
          }
        }}
        className="border-[6px] md:border-[8px] px-8 py-6 md:px-14 md:py-10 relative cursor-pointer"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y: 20 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.1 
          }}
        >
          <motion.h1 
            variants={{
              hidden: { color: "var(--color-institutional)" },
              visible: { color: "var(--color-institutional)" },
              hover: { 
                color: "var(--color-terracotta)",
                transition: { type: "spring", stiffness: 800, damping: 20 }
              }
            }}
            className="font-brutalist text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-none uppercase m-0 p-0 whitespace-nowrap"
            style={{ fontStretch: 'condensed' }}
          >
            DOG CAKE
          </motion.h1>
        </motion.div>
      </motion.div>
    </main>
  );
}
