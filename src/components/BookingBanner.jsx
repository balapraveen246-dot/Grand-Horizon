import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BedDouble, Search, AlertCircle } from 'lucide-react';
import { rooms } from '../data/rooms';
import { getTodayDateString, getFutureDateString } from '../utils/formatters';

export default function BookingBanner({ className = '' }) {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState(getTodayDateString());
  const [checkOut, setCheckOut] = useState(getFutureDateString(2));
  const [guests, setGuests] = useState('2');
  const [roomsCount, setRoomsCount] = useState('1');
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setError('Please select both check-in and check-out dates.');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('Check-out date must be after check-in date.');
      return;
    }

    setError('');

    // Build URL query params to pass to Booking Page
    const params = new URLSearchParams();
    params.set('checkIn', checkIn);
    params.set('checkOut', checkOut);
    params.set('guests', guests);
    params.set('rooms', roomsCount);
    if (roomType) {
      params.set('roomType', roomType);
    }

    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div
      className={`w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-stone-200/80 rounded-2xl shadow-2xl p-5 md:p-7 relative z-20 ${className}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* Check-In Date */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              min={getTodayDateString()}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all cursor-pointer"
              required
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              min={checkIn || getTodayDateString()}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all cursor-pointer"
              required
            />
          </div>

          {/* Guests Count */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all cursor-pointer"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-gold-600" />
              <span>Room Category</span>
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all cursor-pointer"
            >
              <option value="">All Rooms & Suites</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="w-full h-[42px] bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-gold-500/25 flex items-center justify-center gap-2 transform active:scale-98"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search Availability</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-3.5 flex items-center gap-2 text-xs text-rose-600 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
}
