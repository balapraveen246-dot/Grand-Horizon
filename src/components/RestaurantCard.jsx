import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Utensils, BookOpen } from 'lucide-react';

export default function RestaurantCard({ restaurant, onViewMenu }) {
  if (!restaurant) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Restaurant Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[10px] font-semibold uppercase tracking-wider">
          {restaurant.type}
        </div>

        {/* Dress code badge */}
        {restaurant.dressCode && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-medium border border-white/10">
            {restaurant.dressCode}
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-1.5 text-xs text-gold-300 font-medium">
            <Utensils className="w-3.5 h-3.5" />
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
            {restaurant.name}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            {restaurant.shortDescription || restaurant.description}
          </p>

          {/* Details list */}
          <div className="mt-5 space-y-2 pt-4 border-t border-stone-100 text-xs text-slate-500">
            <div className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
              <span>{restaurant.openingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>{restaurant.location}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onViewMenu && onViewMenu(restaurant)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gold-500/15 hover:bg-gold-500 text-navy-950 hover:text-navy-950 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-gold-500/30"
          >
            <BookOpen className="w-4 h-4 text-gold-700" />
            <span>View Menu</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
