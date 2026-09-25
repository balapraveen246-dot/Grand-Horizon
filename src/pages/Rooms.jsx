import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, RotateCcw, BedDouble, Users, IndianRupee, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

export default function Rooms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [guestFilter, setGuestFilter] = useState('All');
  const [bedFilter, setBedFilter] = useState('All');
  const [priceRange, setPriceRange] = useState('All'); // 'All' | 'under-10000' | '10000-20000' | 'above-20000'

  // Categories list
  const categories = ['All', 'Deluxe', 'Premium', 'Executive', 'Family', 'Suite', 'Presidential'];

  // Filtered rooms logic
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      // 1. Search term match (name or description)
      if (
        searchTerm.trim() &&
        !room.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
        !room.description.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return false;
      }

      // 2. Category match
      if (categoryFilter !== 'All') {
        if (room.category !== categoryFilter) return false;
      }

      // 3. Guests match
      if (guestFilter !== 'All') {
        const requiredGuests = parseInt(guestFilter, 10);
        if (room.maxGuests < requiredGuests) return false;
      }

      // 4. Bed Type match
      if (bedFilter !== 'All') {
        if (!room.bedType.toLowerCase().includes(bedFilter.toLowerCase())) {
          return false;
        }
      }

      // 5. Price range match
      if (priceRange === 'under-10000') {
        if (room.price >= 10000) return false;
      } else if (priceRange === '10000-20000') {
        if (room.price < 10000 || room.price > 20000) return false;
      } else if (priceRange === 'above-20000') {
        if (room.price <= 20000) return false;
      }

      return true;
    });
  }, [searchTerm, categoryFilter, guestFilter, bedFilter, priceRange]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setGuestFilter('All');
    setBedFilter('All');
    setPriceRange('All');
  };

  const isFiltering =
    searchTerm ||
    categoryFilter !== 'All' ||
    guestFilter !== 'All' ||
    bedFilter !== 'All' ||
    priceRange !== 'All';

  return (
    <div className="pt-24 lg:pt-28">
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=80"
            alt="Grand Horizon Luxury Suites"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
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
              Accommodations & Suites
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal"
          >
            Sanctuaries of Quiet Splendor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Each room and suite is designed to envelop you in serene comfort, bespoke craftsmanship, and effortless waterfront tranquility.
          </motion.p>
        </div>
      </section>

      {/* Main Listing Section with Search & Filter Bar */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Controls Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search rooms by name or keyword..."
                  className="w-full bg-cream-50 border border-stone-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                />
              </div>

              {/* Status and Reset Button */}
              <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
                <span className="text-slate-500 font-medium">
                  Showing <strong>{filteredRooms.length}</strong> of {rooms.length} accommodations
                </span>

                {isFiltering && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 text-gold-700 hover:text-gold-900 font-semibold uppercase tracking-wider transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 block">
                  Room Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 block">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
                >
                  <option value="All">All Rates</option>
                  <option value="under-10000">Under ₹10,000 / Night</option>
                  <option value="10000-20000">₹10,000 – ₹20,000 / Night</option>
                  <option value="above-20000">Above ₹20,000 / Night</option>
                </select>
              </div>

              {/* Guests Filter */}
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 block">
                  Occupancy
                </label>
                <select
                  value={guestFilter}
                  onChange={(e) => setGuestFilter(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
                >
                  <option value="All">Any Number of Guests</option>
                  <option value="2">2+ Guests</option>
                  <option value="3">3+ Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>

              {/* Bed Type Filter */}
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 block">
                  Bed Configuration
                </label>
                <select
                  value={bedFilter}
                  onChange={(e) => setBedFilter(e.target.value)}
                  className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
                >
                  <option value="All">All Bed Types</option>
                  <option value="King">King Bed Only</option>
                  <option value="Twin">Twin / Interconnecting</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            /* Empty Filter State */
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy-950 font-normal">
                No matching accommodations found
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                We couldn't find any rooms matching your current search parameters. Please try adjusting your filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-6 px-6 py-2.5 rounded-full bg-navy-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
