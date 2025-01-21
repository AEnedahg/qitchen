import { AnimatePresence, motion } from "motion/react";
import { React, useState } from "react";
import { Hamburger } from '../components/Hero/icons/Hamburger';
import { Logo } from '../components/Hero/icons/Logo';
import { Link } from 'react-router-dom';
const containerVariants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "500px",
    transition: {
      duration: 1,
      delay: 0.5,
      delayChilden: 0.5,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
};

export const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  function handleClick() {
    handleToggle();
    handleChange();
  }
  return (
    <div>
      <nav
        className={`absolute top-[48px] left-[48px] flex items-center h-[57px] bg-neutral-900
          *:text-primary-300 *:text-[12px] *:font-serifTwo p-[8px] justify-between rounded-[14px]
          max-[700px]:left-[50px]  z-[30]
          max-lg:top-0 max-lg:flex-col max-lg:justify-start max-lg:gap-[50px] max-lg:*:text-[64px] max-lg:*:font-serif
          max-[700px]:left-[3px] max-[500px]:*:text-[40px] 
          ${
            isOpen === true || toggle === true
              ? "max-lg:top-[0] max-lg:left-[0] max-lg:right-[0] max-lg:absolute max-lg:pt-[40px]"
              : "max-lg:top[20px]"
          }
          ${
            isOpen === false || toggle === false
              ? "max-lg:top-[40px] max-lg:w-[50px] max-lg:left-[40px]"
              : "max-lg:w-[100vw] max-lg:h-[100vh]"
          }
          `}
      >
        <Hamburger
          className="cursor-pointer"
          onClick={handleClick}
          animate1={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          animate2={isOpen ? { opacity: 0 } : { opacity: 1 }}
          animate3={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        />
        <AnimatePresence>
          {(toggle || isOpen) && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                  flex justify-between items-center max-lg:flex-col group-peer
                "
            >
              <motion.span 
                onClick={handleClick}
              variants={childVariants}>
                <Link to="/">
                  <Logo />
                </Link>
              </motion.span>
              <motion.span 
                onClick={handleClick}
              variants={childVariants}>
                <Link to="/menu">MENU</Link>
              </motion.span>
              <motion.span 
                onClick={handleClick}
              variants={childVariants}>
                <Link to="/about">ABOUT</Link>
              </motion.span>
              <motion.span 
                onClick={handleClick}
              variants={childVariants}>
                <Link to="/contact">CONTACT</Link>
              </motion.span>
              <motion.span 
                onClick={handleClick}
              variants={childVariants}>
                <Link to="/blog">BLOG</Link>
              </motion.span>

              <motion.button
                  onClick={handleClick}
                variants={childVariants}
                className="border-2 border-solid border-primary-200 p-[12px] rounded-[14px]"
              >
                <Link to="/bookatable">BOOK A TABLE</Link>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
