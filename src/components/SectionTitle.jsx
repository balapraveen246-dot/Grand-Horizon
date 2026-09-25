import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center', // 'center' | 'left'
  theme = 'light',  // 'light' (on cream bg) | 'dark' (on dark navy bg)
  className = ''
}) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="h-px w-6 bg-gold-500"></span>
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-gold-600">
            {subtitle}
          </span>
          <span className="h-px w-6 bg-gold-500"></span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
