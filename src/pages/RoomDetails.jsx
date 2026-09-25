import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  BedDouble,
  Maximize2,
  Star,
  CheckCircle2,
  Clock,
  ShieldAlert,
  ArrowLeft,
  CalendarCheck,
  Share2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { rooms } from '../data/rooms';
import { formatPrice } from '../utils/formatters';
import RoomCard from '../components/RoomCard';
import SectionTitle from '../components/SectionTitle';

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find matching room
  const room = rooms.find((r) => r.id === id);

  // Active gallery thumbnail
  const [activeImage, setActiveImage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (room) {
      setActiveImage(room.image);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="pt-32 pb-24 text-center max-w-lg mx-auto px-4">
        <h2 className="font-serif text-3xl text-navy-950 font-normal">
          Room Not Found
        </h2>
        <p className="text-slate-500 text-sm mt-3">
          The room or suite you are searching for might have been updated or moved.
        </p>
        <Link
          to="/rooms"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rooms</span>
        </Link>
      </div>
    );
  }

  // Related rooms (exclude current room)
  const relatedRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${room.name} | Grand Horizon Hotel & Resort`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream-50">
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-stone-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/rooms" className="hover:text-gold-600 transition-colors">Accommodations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-navy-950 truncate max-w-[180px] sm:max-w-none">{room.name}</span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-gold-600 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Room'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Title and Top Snapshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-3 py-1 rounded-full bg-navy-950 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                {room.category}
              </span>
              <div className="flex items-center gap-1 text-gold-500 text-xs font-semibold">
                <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span>{room.rating.toFixed(1)}</span>
                <span className="text-slate-400 font-normal">({room.reviewsCount} reviews)</span>
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-normal">
              {room.name}
            </h1>
            <p className="text-sm text-gold-700 font-medium mt-1">
              {room.subtitle}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
              Rates Starting From
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              {formatPrice(room.price)}
              <span className="text-xs text-slate-500 font-sans font-normal"> / Night</span>
            </div>
          </div>
        </div>

        {/* Room Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
          {/* Main Large Image */}
          <div className="lg:col-span-9 aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 relative bg-stone-100">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={activeImage}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Interactive Thumbnails Column */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {room.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(imgUrl)}
                className={`relative aspect-[16/10] lg:h-[105px] w-28 lg:w-full rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                  activeImage === imgUrl
                    ? 'border-gold-500 ring-2 ring-gold-400/50 scale-102 shadow-md'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${room.name} preview ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Specifications Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-stone-200/90 shadow-sm mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Size</span>
              <span className="text-sm font-bold text-navy-950">{room.size}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Bed Type</span>
              <span className="text-sm font-bold text-navy-950">{room.bedType}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Max Guests</span>
              <span className="text-sm font-bold text-navy-950">{room.maxGuests} Adults</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Check-In / Out</span>
              <span className="text-sm font-bold text-navy-950">2:00 PM / 12:00 PM</span>
            </div>
          </div>
        </div>

        {/* Content & Booking Sticky Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Room Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl text-navy-950 font-normal">
                Room Overview
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Room Amenities */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-navy-950 font-normal">
                Room Amenities & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 border border-stone-200/60 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Complimentary Services */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl text-navy-950 font-normal">
                Complimentary Privileges Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.includedServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules & Policies */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-navy-950">
                <ShieldAlert className="w-5 h-5 text-gold-600" />
                <h3 className="font-serif text-2xl font-normal">
                  House Rules & Check-in Policies
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {room.houseRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky Booking Call to Action */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Direct Best Price Guarantee
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {formatPrice(room.price)}
                  <span className="text-xs font-sans text-slate-400 font-normal"> / Night</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Inclusive of gourmet breakfast, pool access, and taxes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Standard Check-In</span>
                  <span className="font-medium text-white">{room.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Check-Out</span>
                  <span className="font-medium text-white">{room.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cancellation Policy</span>
                  <span className="text-emerald-400 font-medium">Free cancellation 24h prior</span>
                </div>
              </div>

              <Link
                to={`/booking?roomId=${room.id}`}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 transform active:scale-98"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book This Room</span>
              </Link>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  Prefer telephone reservations? Call{' '}
                  <a href="tel:+919000012345" className="text-gold-400 hover:underline">
                    +91 90000 12345
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Rooms Section */}
        <div className="mt-24 pt-16 border-t border-stone-200">
          <SectionTitle
            subtitle="Explore More"
            title="Related Rooms & Suites"
            description="Discover other luxury living options tailored to your distinct travel style."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRooms.map((relRoom) => (
              <RoomCard key={relRoom.id} room={relRoom} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
