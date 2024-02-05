import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

const FadeIn = ({ children }: {children: ReactNode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;