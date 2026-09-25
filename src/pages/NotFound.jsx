import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 bg-cream-50">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-gold-50 border-2 border-gold-300 text-gold-600 flex items-center justify-center mx-auto mb-6 shadow-inner"
        >
          <Compass className="w-10 h-10 animate-spin-slow" />
        </motion.div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-bold block mb-2">
          Error 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-navy-950 font-normal mb-3">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or may have been relocated within our resort domain.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3.5 px-6 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/rooms"
            className="w-full py-3 px-6 rounded-full border border-stone-300 hover:border-navy-950 text-navy-950 text-xs font-semibold uppercase tracking-wider transition-all block text-center"
          >
            Explore Rooms & Suites
          </Link>
        </div>
      </div>
    </div>
  );
}
