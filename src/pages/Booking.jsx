import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Phone, Tag, ChevronRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { hotelInfo } from '../data/hotelInfo';
import { offers } from '../data/offers';

export default function Booking() {
  const [searchParams] = useSearchParams();

  const initialRoomId = searchParams.get('roomId') || searchParams.get('roomType') || '';
  const initialCheckIn = searchParams.get('checkIn');
  const initialCheckOut = searchParams.get('checkOut');
  const initialGuests = searchParams.get('guests');
  const initialRooms = searchParams.get('rooms');
  const offerCode = searchParams.get('offer');

  // Match offer if present
  const matchedOffer = useMemo(() => {
    if (!offerCode) return null;
    return offers.find((o) => o.promoCode.toLowerCase() === offerCode.toLowerCase());
  }, [offerCode]);

  const initialDates = useMemo(() => {
    const dates = {};
    if (initialCheckIn) dates.checkIn = initialCheckIn;
    if (initialCheckOut) dates.checkOut = initialCheckOut;
    if (initialGuests) dates.guests = initialGuests;
    if (initialRooms) dates.rooms = initialRooms;
    return Object.keys(dates).length > 0 ? dates : null;
  }, [initialCheckIn, initialCheckOut, initialGuests, initialRooms]);

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
            alt="Grand Horizon Reservation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <span className="h-px w-6 bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-gold-400">
              Direct Reservation
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal"
          >
            Reserve Your Luxury Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light"
          >
            Guaranteed best available rates, flexible cancellation, and bespoke personal attention.
          </motion.p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Active Promotional Offer Notice */}
        {matchedOffer && (
          <div className="mb-8 p-4 bg-gold-500/15 border border-gold-500/40 rounded-2xl flex items-center justify-between gap-4 text-xs text-navy-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <Tag className="w-4 h-4 text-gold-700 shrink-0" />
              <span>
                <strong>Offer Code Applied ({matchedOffer.promoCode}):</strong> {matchedOffer.name} — {matchedOffer.discount}.
              </span>
            </div>
            <span className="font-semibold text-gold-800 uppercase tracking-wider text-[11px] shrink-0">
              Active Privilege
            </span>
          </div>
        )}

        {/* Guarantees Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex items-center gap-3">
            <Award className="w-5 h-5 text-gold-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-navy-950 block">Best Rate Guarantee</span>
              <span className="text-slate-500">Direct booking advantages & perks</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex items-center gap-3">
            <Clock className="w-5 h-5 text-gold-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-navy-950 block">Flexible Cancellation</span>
              <span className="text-slate-500">Change or cancel up to 24h prior</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex items-center gap-3">
            <Phone className="w-5 h-5 text-gold-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-navy-950 block">24/7 Concierge Support</span>
              <span className="text-slate-500">{hotelInfo.reservationsPhone}</span>
            </div>
          </div>
        </div>

        {/* Booking Form Component */}
        <BookingForm initialRoomId={initialRoomId} initialDates={initialDates} />
      </div>
    </div>
  );
}
