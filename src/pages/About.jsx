import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  Leaf,
  Compass,
  ArrowRight,
  CheckCircle2,
  Award,
  Users
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { hotelInfo } from '../data/hotelInfo';

const coreValues = [
  {
    icon: Award,
    title: "Uncompromising Excellence",
    description: "Every touchpoint—from thread-count perfection to Michelin-inspired degustations—is executed with relentless devotion to perfection."
  },
  {
    icon: Heart,
    title: "Genuine Atithi Devo Bhava",
    description: "Honoring the ancient Indian philosophy that considers every guest a revered deity, offering warmth, discretion, and sincere care."
  },
  {
    icon: Leaf,
    title: "Sustainable Stewardship",
    description: "Championing zero-single-use plastics, solar energy integration, rainwater harvesting, and local organic farmer partnerships."
  },
  {
    icon: Compass,
    title: "Cultural Reverence",
    description: "Celebrating Tamil Nadu's rich Dravidian heritage, classical Carnatic melodies, and regional architectural motifs."
  }
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Page Header Banner */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
            alt="Grand Horizon Hotel Heritage Architecture"
            className="w-full h-full object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-px w-6 bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-400">
              Our Legacy & Philosophy
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight"
          >
            Timeless Elegance Along the Riverbank
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Fifteen years of redefining luxury hospitality with gracious warmth, architectural majesty, and unforgettable guest experiences in Chennai.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                  alt="Our Founder Vision and Suites"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-200/80 max-w-[280px]">
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold block mb-1">
                  Established 2011
                </span>
                <p className="font-serif text-lg font-medium text-navy-950">
                  Built on a foundation of passion and prestige.
                </p>
              </div>
            </div>

            {/* Story Editorial */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-normal leading-tight">
                From a Waterfront Vision to an Iconic Sanctuary
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Founded in 2011, Grand Horizon Hotel & Resort was born from a singular dream: to create a tranquil sanctuary in Chennai where international luxury seamlessly unites with indigenous South Indian heritage.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over the past 15 years, our resort has hosted international dignitaries, celebrated artists, royal families, and mindful travelers from across the globe. Each guest is embraced not just as a visitor, but as an honored patron of our living legacy.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-sm">
                  <h4 className="font-serif text-xl font-bold text-navy-950">5-Star Gold</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Global Luxury Standard accreditation</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-sm">
                  <h4 className="font-serif text-xl font-bold text-navy-950">LEED Certified</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Eco-conscious luxury architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Guiding Principles"
            title="Our Mission & Enduring Vision"
            description="Our compass is set to elevate the standards of modern hospitality, creating lifelong memories through genuine human connection."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 border border-stone-200 relative overflow-hidden">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-2">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal mb-4">
                To Inspire and Rejuvenate Every Soul
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To provide intuitive, bespoke hospitality that honors our rich local heritage while offering world-class comfort. We craft seamless environments where our guests can rest, rejuvenate, celebrate milestones, and discover meaningful moments.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-navy-800 relative overflow-hidden">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
                Our Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
                Setting the Global Benchmark for Heritage Luxury
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To be recognized worldwide as India's premier waterfront luxury retreat, celebrated for sustainable architectural design, culinary mastery, and heartfelt, individualized guest attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pillars of Grand Horizon"
            title="Our Core Hospitality Values"
            description="The foundational ethos that inspires our team of 300+ dedicated hospitality professionals each day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-600 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hotel Statistics Section */}
      <section className="py-16 md:py-24 bg-navy-900 border-t border-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {hotelInfo.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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

      {/* Architecture & Ambiance */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block">
                Modern Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-normal leading-tight">
                Crafted for Light, Serenity & Spatial Harmony
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Conceptualized by acclaimed architects, Grand Horizon integrates open-air pavilions, natural stone water features, and expansive river vistas with thermal-efficient double glazing and soundproof sanctuary design.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Naturally ventilated high-ceiling lobby atrium</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Acoustically engineered soundproof rooms and suites</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Lush landscaped tropical gardens with native flora</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore Rooms & Suites</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Architecture Details"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                alt="Interior Luxury Living"
                className="w-full h-72 object-cover rounded-2xl shadow-lg mt-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
