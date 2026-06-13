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
          hidden: { opacity: 0, borderColor: "var(--color-institutional)" },
          visible: { 
            opacity: 1, 
            borderColor: "var(--color-institutional)",
            transition: { duration: 0.3, ease: "easeOut" }
          },
          hover: { 
            borderColor: "var(--color-terracotta)", 
            transition: { duration: 0.2, ease: "easeInOut" }
          }
        }}
        className="border-[5px] md:border-[6px] px-6 py-4 md:px-12 md:py-8 relative cursor-pointer"
      >
        <motion.h1 
          variants={{
            hidden: { color: "var(--color-institutional)" },
            visible: { color: "var(--color-institutional)" },
            hover: { 
              color: "var(--color-terracotta)",
              transition: { duration: 0.2, ease: "easeInOut" }
            }
          }}
          className="font-brutalist text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black leading-none uppercase m-0 p-0 whitespace-nowrap"
          style={{ fontStretch: 'condensed' }}
        >
          DOG CAKE
        </motion.h1>
      </motion.div>
    </main>
  );
}
