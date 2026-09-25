import React from 'react';
import { motion } from 'framer-motion';
import DynamicIcon from './DynamicIcon';

export default function AmenityCard({ icon, title, description, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-4 ${className}`}
    >
      <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
        <DynamicIcon name={icon} className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-serif text-base font-medium text-navy-950">
          {title}
        </h4>
        {description && (
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
