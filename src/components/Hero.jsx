import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Compass, Star } from 'lucide-react';
import BookingBanner from './BookingBanner';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
      {/* Background Cinematic Image with Luxury Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Grand Horizon Hotel & Resort Exterior"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in filter brightness-90"
        />
        {/* Multilayered luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/20 to-navy-950/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center my-8 md:my-12">
        {/* Subtle Luxury Hotel Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.28em] font-semibold mb-6"
        >
          <div className="flex items-center gap-1 text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <span className="hidden sm:inline">Five-Star Luxury Resort & Spa</span>
          <span className="sm:hidden">Five-Star Luxury</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight leading-[1.12] max-w-4xl"
        >
          Luxury Stay.{' '}
          <span className="italic font-light text-gold-400 block sm:inline">
            Unforgettable
          </span>{' '}
          Experiences.
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 font-light max-w-2xl leading-relaxed"
        >
          Discover refined comfort, exceptional hospitality, and memorable experiences in the heart of the city.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all transform hover:-translate-y-0.5 shadow-xl shadow-gold-500/25 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </Link>

          <Link
            to="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-semibold text-xs uppercase tracking-widest transition-all hover:border-gold-400"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Explore Rooms</span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Availability Booking Search Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 px-4 sm:px-6 lg:px-8 w-full"
      >
        <BookingBanner />
      </motion.div>
    </section>
  );
}
