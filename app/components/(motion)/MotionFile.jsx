"use client";
import { motion } from "framer-motion";

export const slideDownVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
};

export const MotionSlideDown = ({ children, speed, ...props }) => {
  return (
    <motion.div
      variants={slideDownVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      exit="exit"
      transition={{ duration: speed, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const slideUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 40, opacity: 0 },
};

export const MotionSlideUp = ({ children, speed, ...props }) => {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      exit="exit"
      transition={{ duration: speed, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const slideRightVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

export const MotionSlideRight = ({ children, speed, ...props }) => {
  return (
    <motion.div
      variants={slideRightVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      exit="exit"
      transition={{ duration: speed, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const slideLeftVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 40, opacity: 0 },
};

export const MotionSlideLeft = ({ children, speed, ...props }) => {
  return (
    <motion.div
      variants={slideLeftVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      exit="exit"
      transition={{ duration: speed, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MotionFadeIn = ({ children, speed, ...props }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      exit="exit"
      transition={{ duration: speed, ease: "easeInOut" }}
      {...props}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};
