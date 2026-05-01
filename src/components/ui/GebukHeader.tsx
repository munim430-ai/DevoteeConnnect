import React from 'react';
import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const GebukHeader: React.FC<Props> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="gebuk-subtitle"
      >
        {subtitle}
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="gebuk-title relative inline-block"
      >
        {title}
        <div className={`absolute -bottom-2 h-1 w-12 bg-gradient-to-r from-premium-gold to-transparent rounded-full ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}`} />
      </motion.h1>
    </div>
  );
};

export default GebukHeader;
