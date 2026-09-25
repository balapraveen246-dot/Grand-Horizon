import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, Clock, MapPin, X, BookOpen, Calendar, Wine, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/restaurants';
import { formatPrice } from '../utils/formatters';

export default function Dining() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMenuRestaurant, setActiveMenuRestaurant] = useState(null);

  const categories = ['All', 'Fine Dining', 'Rooftop Grill & Lounge', 'Casual & Al Fresco', 'Bakery & Cafe', 'Lounge & Bar', 'In-Room Service'];

  const filteredRestaurants = restaurants.filter((rest) => {
    if (selectedCategory === 'All') return true;
    return rest.type === selectedCategory;
  });

  return (
    <div className="pt-24 lg:pt-28">
      {/* Page Banner */}
      <section className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
            alt="Fine Dining at Grand Horizon"
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
              Gastronomic Excellence
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal"
          >
            Culinary Artistry & Starlit Lounges
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            From Michelin-inspired riverfront seafood to 18th-floor rooftop mixology, embark on sensory epicurean voyages curated by world-class master chefs.
          </motion.p>
        </div>
      </section>

      {/* Main Dining Directory */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-950 text-gold-400 shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Restaurant Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onViewMenu={(rest) => setActiveMenuRestaurant(rest)}
              />
            ))}
          </div>

          {/* Private Dining Callout */}
          <div className="mt-20 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block">
                Bespoke Banquets & Private Dining
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Host an Intimate Celebration
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether orchestrating an anniversary dinner on our riverfront gazebo, a corporate degustation banquet, or a private sommelier wine tasting, our culinary directors will tailor a personalized menu to your exact preferences.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire for Private Events</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Modal */}
      <AnimatePresence>
        {activeMenuRestaurant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMenuRestaurant(null)}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-stone-200"
            >
              <button
                type="button"
                onClick={() => setActiveMenuRestaurant(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close menu modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pb-4 border-b border-stone-100">
                <span className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold block mb-1">
                  {activeMenuRestaurant.type} • {activeMenuRestaurant.cuisine}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  {activeMenuRestaurant.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {activeMenuRestaurant.location} | {activeMenuRestaurant.openingHours}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Chef's Signature Selections
                </h4>
                {activeMenuRestaurant.menu.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h5 className="font-serif text-base font-semibold text-navy-950">
                        {item.name}
                      </h5>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="font-serif font-bold text-sm text-gold-700 whitespace-nowrap">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Prices in INR, government taxes & service charges as applicable.
                </span>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all"
                  onClick={() => setActiveMenuRestaurant(null)}
                >
                  Reserve Table
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
