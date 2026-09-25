import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BedDouble, Maximize2, Star, ArrowRight, Check } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export default function RoomCard({ room, layout = 'grid' }) {
  if (!room) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Room Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category Badge */}
        {room.category && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[11px] font-semibold tracking-wider uppercase">
            {room.category}
          </div>
        )}

        {/* Rating Stars */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-medium flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          <span>{room.rating.toFixed(1)}</span>
        </div>

        {/* Size Badge Over Image Bottom */}
        <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium flex items-center gap-3">
          <span className="flex items-center gap-1 drop-shadow-md">
            <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
            {room.size}
          </span>
          <span className="flex items-center gap-1 drop-shadow-md">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            Up to {room.maxGuests} Guests
          </span>
        </div>
      </div>

      {/* Room Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
            {room.name}
          </h3>

          {/* Bed Specification */}
          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <BedDouble className="w-3.5 h-3.5 text-gold-600" />
            <span>{room.bedType}</span>
            <span>•</span>
            <span>{room.size}</span>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {room.shortDescription || room.description}
          </p>

          {/* Amenities preview tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-stone-100 text-slate-600 border border-stone-200"
              >
                <Check className="w-3 h-3 text-gold-600" />
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-50 text-slate-400">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer: Price & Action Buttons */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                Starting From
              </span>
              <span className="font-serif text-2xl font-bold text-navy-950">
                {formatPrice(room.price)}
              </span>
              <span className="text-xs text-slate-500 font-normal"> / Night</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Free Cancellation
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Link
              to={`/rooms/${room.id}`}
              className="w-full py-2.5 px-3 rounded-xl border border-navy-900/20 hover:border-navy-900 bg-white hover:bg-stone-50 text-navy-950 text-xs font-semibold tracking-wider uppercase text-center transition-all"
            >
              View Details
            </Link>
            <Link
              to={`/booking?roomId=${room.id}`}
              className="w-full py-2.5 px-3 rounded-xl bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-semibold tracking-wider uppercase text-center transition-all shadow-sm flex items-center justify-center gap-1 group/btn"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
