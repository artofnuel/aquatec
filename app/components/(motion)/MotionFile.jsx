import { motion } from "framer-motion";

export const slideDownVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
};

export function MotionSlideDown({ children, ...props }) {
  return (
    <motion.div
      variants={slideDownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}