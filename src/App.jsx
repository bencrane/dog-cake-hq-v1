import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-deadmatte text-institutional overflow-hidden selection:bg-institutional selection:text-deadmatte">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="border-[6px] md:border-[8px] border-institutional px-8 py-6 md:px-14 md:py-10 relative"
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
          <h1 
            className="font-brutalist text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-none uppercase m-0 p-0 text-institutional whitespace-nowrap"
            style={{ fontStretch: 'condensed' }}
          >
            DOG CAKE
          </h1>
        </motion.div>
      </motion.div>
    </main>
  );
}
