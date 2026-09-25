import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, RotateCcw, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import FacilityCard from '../components/FacilityCard';
import { facilities } from '../data/facilities';

export default function Facilities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Wellness & Recreation',
    'Business & Events',
    'Family & Leisure',
    'Guest Conveniences'
  ];

  const filteredFacilities = useMemo(() => {
    return facilities.filter((fac) => {
      // Search filter
      if (
        searchTerm.trim() &&
        !fac.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
        !fac.description.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
        !fac.features.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && fac.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80"
            alt="Resort Infinity Pool and Grounds"
            className="w-full h-full object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-px w-6 bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-400">
              Resort Amenities
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal"
          >
            World-Class Facilities & Privileges
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Every convenience designed for seamless relaxation, corporate distinction, and unforgettable family retreats.
          </motion.p>
        </div>
      </section>

      {/* Facilities Catalog & Filters */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter Bar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search pool, spa, gym, parking..."
                className="w-full bg-cream-50 border border-stone-200 rounded-xl pl-11 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy-950 text-gold-400 shadow-sm'
                      : 'bg-cream-50 text-slate-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reset */}
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 hover:text-gold-900 uppercase tracking-wider shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredFacilities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
              <h3 className="font-serif text-xl text-navy-950">No facilities match your search</h3>
              <p className="text-slate-500 text-xs mt-2">
                Try searching with different terms like "pool", "spa", "gym", or select "All".
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-5 py-2 rounded-full bg-navy-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
