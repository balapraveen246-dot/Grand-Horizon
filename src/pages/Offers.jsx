import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Calendar, Check, ArrowRight, Sparkles, Gift } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { offers } from '../data/offers';

export default function Offers() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weekend', 'Couple', 'Family', 'Business', 'Long Stay', 'Early Bird'];

  const filteredOffers = offers.filter((offer) => {
    if (selectedCategory === 'All') return true;
    return offer.category === selectedCategory;
  });

  return (
    <div className="pt-24 lg:pt-28">
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80"
            alt="Grand Horizon Special Offers and Retreats"
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
              Curated Privileges
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal"
          >
            Exclusive Packages & Seasonal Stays
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Elevate your stay with our thoughtfully curated retreat packages, dining credits, and wellness privileges.
          </motion.p>
        </div>
      </section>

      {/* Offers Catalog */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Chips */}
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

          {/* Offers List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredOffers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                      {offer.badge}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5 font-medium drop-shadow">
                        <Calendar className="w-3.5 h-3.5 text-gold-400" />
                        <span>{offer.validity}</span>
                      </div>
                      <div className="px-2.5 py-1 rounded bg-black/50 backdrop-blur-sm text-gold-300 font-mono text-[11px] font-bold">
                        CODE: {offer.promoCode}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
                      {offer.name}
                    </h3>
                    <p className="text-sm font-semibold text-gold-700 mt-1">
                      {offer.discount}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Included Benefits List */}
                    <div className="mt-6 pt-5 border-t border-stone-100 space-y-2">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                        Package Inclusions:
                      </h4>
                      {offer.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={`/booking?offer=${offer.promoCode}`}
                    className="w-full py-3.5 px-6 rounded-xl bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Reserve With This Offer</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
