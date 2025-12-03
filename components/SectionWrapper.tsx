import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<Props> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;