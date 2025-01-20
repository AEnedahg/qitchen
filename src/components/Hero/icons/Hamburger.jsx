import { AnimatePresence, motion } from 'motion/react';

export const Hamburger = ({onClick, className, animate1, animate2, animate3}) => {
    
    return (
      <motion.svg
        className={className}
        onClick={onClick}
        whileHover={{
          scale: 1.05,
          rotate: [12, -12, 12, -12],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        initial={{
          scale: 1,
          rotate: 0,
        }}
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="41" height="41" rx="8" fill="#181818" fillOpacity="0.5" />
        <rect
          x="0.5"
          y="0.5"
          width="40"
          height="40"
          rx="7.5"
          stroke="#EFE7D2"
          strokeOpacity="0.15"
        />
        <AnimatePresence>
          <motion.rect
            animate={animate1}
            transition={{ duration: 0.3 }}
            exit={{ rotate: 0, y: 0, transition: { duration: 1 } }}
            x="10.5"
            y="14"
            width="20"
            height="1"
            fill="#EFE7D2"
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.rect
            animate={animate2}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 1, transition: { duration: 1 } }}
            x="10.5"
            y="20"
            width="20"
            height="1"
            fill="#EFE7D2"
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.rect
            animate={animate3}
            transition={{ duration: 0.3 }}
            exit={{ rotate: 0, y: 0, transition: { duration: 1 } }}
            x="10.5"
            y="26"
            width="20"
            height="1"
            fill="#EFE7D2"
          />
        </AnimatePresence>
      </motion.svg>
    );
}