import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  X,
  BookOpen
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import RoomCard from '../components/RoomCard';
import FacilityCard from '../components/FacilityCard';
import RestaurantCard from '../components/RestaurantCard';
import DynamicIcon from '../components/DynamicIcon';
import { rooms } from '../data/rooms';
import { facilities } from '../data/facilities';
import { restaurants } from '../data/restaurants';
import { offers } from '../data/offers';
import { hotelInfo } from '../data/hotelInfo';
import { formatPrice } from '../utils/formatters';

export default function Home() {
  const [activeMenuRestaurant, setActiveMenuRestaurant] = useState(null);

  // Filter featured rooms
  const featuredRooms = rooms.filter((r) => r.featured).slice(0, 3);
  // Pick highlighted facilities
  const highlightedFacilities = facilities.slice(0, 4);
  // Pick featured restaurants
  const highlightedRestaurants = restaurants.slice(0, 3);
  // Pick featured offers
  const highlightedOffers = offers.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section with Booking Banner */}
      <Hero />

      {/* 2. Welcome / Hotel Introduction */}
      <section className="py-20 md:py-28 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Composition with Luxury Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Grand Horizon Lobby and Courtyard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Small Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-navy-950 text-white p-6 rounded-2xl shadow-2xl border border-navy-800 max-w-[240px] sm:max-w-[280px]"
              >
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                  ))}
                </div>
                <h4 className="font-serif text-lg font-medium text-white">
                  World Luxury Hotel Award
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Recognized internationally for exceptional heritage sanctuary hospitality.
                </p>
              </motion.div>

              {/* Decorative backdrop accent */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold-400/15 rounded-3xl -z-0 pointer-events-none" />
            </motion.div>

            {/* Right Column: Editorial Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-gold-500"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
                  Welcome to Grand Horizon
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal leading-tight">
                An Oasis of Serenity and Refined Luxury
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Nestled along the tranquil waterfront of Chennai’s historic Riverside Avenue, {hotelInfo.name} combines timeless colonial architectural grace with progressive modern opulence.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you seek the tranquil seclusion of our riverview suites, the culinary genius of our eight signature restaurants, or rejuvenating wellness at Serenity Spa, every moment is curated to elevate your journey.
              </p>

              {/* Key Highlights list */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Prime Waterfront Location</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Les Clefs d'Or Concierge</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Heated Infinity Lap Pool</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Award-Winning Gastronomy</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/rooms"
                  className="text-xs uppercase tracking-wider font-bold text-gold-700 hover:text-gold-800 underline underline-offset-8"
                >
                  View All Accommodations
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Rooms & Suites */}
      <section className="py-20 md:py-28 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionTitle
                subtitle="Exclusive Accommodations"
                title="Signature Rooms & Suites"
                description="Indulge in spacious sanctuaries designed with handpicked textures, custom Italian furnishings, and state-of-the-art automation."
                align="left"
                className="mb-0"
              />
            </div>
            <Link
              to="/rooms"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-navy-950 hover:text-gold-600 transition-colors shrink-0"
            >
              <span>Explore All 8 Suites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 md:py-28 bg-stone-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="The Grand Horizon Distinction"
            title="Why Discerning Guests Choose Us"
            description="We balance timeless hospitality values with modern five-star comfort to deliver experiences that linger long after check-out."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hotelInfo.whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-600 flex items-center justify-center mb-5">
                  <DynamicIcon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy-950 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hotel Facilities Preview */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionTitle
                subtitle="World-Class Leisure"
                title="Resort Facilities & Rejuvenation"
                description="From sunrise wellness rituals in our infinity pool to late-night state-of-the-art training, explore comprehensive conveniences."
                align="left"
                className="mb-0"
              />
            </div>
            <Link
              to="/facilities"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-navy-950 hover:text-gold-600 transition-colors shrink-0"
            >
              <span>View All 14 Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dining & Gastronomy Preview */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionTitle
                subtitle="Epicurean Journeys"
                title="Dining & Rooftop Lounges"
                description="Experience master culinary creations, rare vintage cellars, and alfresco sunsets curated by renowned global chefs."
                align="left"
                className="mb-0"
              />
            </div>
            <Link
              to="/dining"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-navy-950 hover:text-gold-600 transition-colors shrink-0"
            >
              <span>Explore All Restaurants & Menus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onViewMenu={(rest) => setActiveMenuRestaurant(rest)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Special Offers Banner */}
      <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Curated Packages"
            title="Exclusive Seasonal Retreats"
            description="Unlock special savings, complimentary spa indulgences, and dining perks curated for memorable escapes."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedOffers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-navy-900/90 rounded-2xl overflow-hidden border border-navy-800 shadow-xl flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                    {offer.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-gold-400 transition-colors">
                      {offer.name}
                    </h3>
                    <p className="text-xs text-gold-300 font-medium mt-1">
                      {offer.discount}
                    </p>
                    <p className="text-xs text-slate-400 mt-2.5 line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      CODE: {offer.promoCode}
                    </span>
                    <Link
                      to={`/booking?offer=${offer.promoCode}`}
                      className="px-4 py-2 rounded-lg bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Book Offer
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold-500/50 hover:border-gold-400 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest transition-all"
            >
              <span>View All Special Packages</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Hotel Statistics (Framer Motion Animated Numbers) */}
      <section className="py-16 md:py-24 bg-navy-900 border-t border-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {hotelInfo.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-navy-950/60 border border-navy-800"
              >
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-400 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Guest Testimonials */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Voices of Our Guests"
            title="Stories of Unforgettable Stays"
            description="Discover why celebrated travelers, couples, and families consistently rate Grand Horizon as their sanctuary of choice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelInfo.testimonials.map((testi, idx) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold-500 mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  <p className="font-serif italic text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                  <img
                    src={testi.avatar}
                    alt={testi.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-navy-950 text-sm">
                      {testi.author}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {testi.role} • {testi.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Resort Experience Section */}
      <section className="py-20 md:py-28 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block">
                The Horizon Lifestyle
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal leading-tight">
                Immersive Experiences Crafted Just for You
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Step beyond the boundaries of standard luxury. At Grand Horizon, every hour presents a bespoke possibility—from sunrise riverside yoga and guided masterclasses with our executive pâtissier to sunset private boat tours along the Adyar river.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-50 border border-stone-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-navy-950">
                      Private River Yacht Charters
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Glide through coastal waters with an onboard chef serving oysters and champagne.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-stone-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-navy-950">
                      Ayurvedic Wellness Masteries
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Customized consultations with certified Vaidyas focusing on complete mind-body equilibrium.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Spa and Wellness Therapy"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Rooftop Night Ambiance"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Presidential Suite Interior"
                className="w-full h-72 object-cover rounded-2xl shadow-lg -mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
                alt="Infinity Pool at Sunset"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Call To Action (Section #36 requirement) */}
      <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
            alt="Resort Ambiance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-gold-400 font-semibold block">
            Begin Your Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Your Perfect Stay Awaits
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience comfort, elegance and exceptional hospitality at {hotelInfo.name}.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-gold-500/25 transform hover:-translate-y-0.5"
            >
              Book Your Stay
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs uppercase tracking-widest transition-all hover:border-gold-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Menu Preview Modal */}
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
                  Prices subject to applicable taxes & service charge.
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
