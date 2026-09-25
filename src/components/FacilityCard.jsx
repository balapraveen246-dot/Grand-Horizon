import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function FacilityCard({ facility }) {
  if (!facility) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Facility Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={facility.image}
          alt={facility.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-[10px] uppercase tracking-wider font-semibold">
          {facility.category}
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-lg group-hover:bg-gold-400 transition-colors">
          <DynamicIcon name={facility.iconName} className="w-5 h-5" />
        </div>
      </div>

      {/* Facility Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
            {facility.name}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            {facility.description}
          </p>

          {/* Features list */}
          {facility.features && facility.features.length > 0 && (
            <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5">
              {facility.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Operating Hours */}
        {facility.hours && (
          <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-slate-600">
            <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{facility.hours}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
