import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  BedDouble,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  Printer,
  RotateCcw
} from 'lucide-react';
import { rooms } from '../data/rooms';
import { hotelInfo } from '../data/hotelInfo';
import {
  formatPrice,
  calculateNights,
  calculateBookingEstimate,
  getTodayDateString,
  getFutureDateString
} from '../utils/formatters';

export default function BookingForm({ initialRoomId = '', initialDates = null }) {
  // Form State
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    roomId: initialRoomId || (rooms.length > 0 ? rooms[0].id : ''),
    checkIn: initialDates?.checkIn || getTodayDateString(),
    checkOut: initialDates?.checkOut || getFutureDateString(2),
    guests: initialDates?.guests || '2',
    roomsCount: initialDates?.rooms || '1',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  // Sync if initialRoomId changes externally (e.g. from query params)
  useEffect(() => {
    if (initialRoomId) {
      setFormData((prev) => ({ ...prev, roomId: initialRoomId }));
    }
  }, [initialRoomId]);

  // Selected room object
  const selectedRoom = rooms.find((r) => r.id === formData.roomId) || rooms[0];

  // Calculation
  const nights = calculateNights(formData.checkIn, formData.checkOut);
  const pricing = calculateBookingEstimate(
    selectedRoom?.price || 0,
    nights,
    parseInt(formData.roomsCount, 10) || 1
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Guest Name
    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your full name.';
    } else if (formData.guestName.trim().length < 3) {
      newErrors.guestName = 'Name must be at least 3 characters.';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^[+0-9\s-]{8,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    // Check-in date
    const today = getTodayDateString();
    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select a check-in date.';
    } else if (formData.checkIn < today) {
      newErrors.checkIn = 'Check-in date cannot be in the past.';
    }

    // Check-out date
    if (!formData.checkOut) {
      newErrors.checkOut = 'Please select a check-out date.';
    } else if (formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out date must be after check-in date.';
    }

    // Room ID
    if (!formData.roomId) {
      newErrors.roomId = 'Please choose a room type.';
    }

    // Guests
    const guestNum = parseInt(formData.guests, 10);
    if (isNaN(guestNum) || guestNum < 1) {
      newErrors.guests = 'At least 1 guest is required.';
    }

    // Rooms count
    const roomsNum = parseInt(formData.roomsCount, 10);
    if (isNaN(roomsNum) || roomsNum < 1) {
      newErrors.roomsCount = 'At least 1 room is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Generate random luxury booking confirmation reference
    const randomRef = 'GH-' + Math.floor(100000 + Math.random() * 900000);

    const confirmationDetails = {
      referenceId: randomRef,
      bookingDate: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      guestName: formData.guestName,
      email: formData.email,
      phone: formData.phone,
      roomName: selectedRoom.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      nights,
      guests: formData.guests,
      roomsCount: formData.roomsCount,
      specialRequests: formData.specialRequests || 'None specified',
      pricing
    };

    setBookingConfirmation(confirmationDetails);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBookingConfirmation(null);
    setFormData({
      guestName: '',
      email: '',
      phone: '',
      roomId: rooms[0]?.id || '',
      checkIn: getTodayDateString(),
      checkOut: getFutureDateString(2),
      guests: '2',
      roomsCount: '1',
      specialRequests: ''
    });
    setErrors({});
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl">
              <div className="mb-6 pb-6 border-b border-stone-100">
                <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
                  Online Reservation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Guest & Stay Details
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your preferred dates and guest details. Instant reservation confirmation.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Room Selection */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4 text-gold-600" />
                    <span>Selected Room or Suite *</span>
                  </label>
                  <select
                    name="roomId"
                    value={formData.roomId}
                    onChange={handleInputChange}
                    className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      errors.roomId ? 'border-rose-400' : 'border-stone-200'
                    }`}
                  >
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} — {formatPrice(room.price)} / Night ({room.bedType})
                      </option>
                    ))}
                  </select>
                  {errors.roomId && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.roomId}</span>
                    </p>
                  )}
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Check-In */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold-600" />
                      <span>Check-In Date *</span>
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      min={getTodayDateString()}
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        errors.checkIn ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.checkIn && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.checkIn}</span>
                      </p>
                    )}
                  </div>

                  {/* Check-Out */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold-600" />
                      <span>Check-Out Date *</span>
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      min={formData.checkIn || getTodayDateString()}
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        errors.checkOut ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.checkOut && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.checkOut}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Guests & Rooms Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-gold-600" />
                      <span>Number of Guests *</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-cream-50 border border-stone-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>

                  {/* Number of Rooms */}
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-gold-600" />
                      <span>Number of Rooms *</span>
                    </label>
                    <select
                      name="roomsCount"
                      value={formData.roomsCount}
                      onChange={handleInputChange}
                      className="w-full bg-cream-50 border border-stone-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    >
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                      <option value="4">4 Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="pt-2 border-t border-stone-100 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700">
                    Lead Guest Information
                  </h4>

                  {/* Name */}
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-gold-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="guestName"
                      value={formData.guestName}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexander Wright"
                      className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        errors.guestName ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.guestName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.guestName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-gold-600" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alexander@example.com"
                        className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                          errors.email ? 'border-rose-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-gold-600" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                          errors.phone ? 'border-rose-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-gold-600" />
                      <span>Special Requests (Optional)</span>
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="High floor preference, airport pickup coordination, dietary allergies, honeymoon setup, etc."
                      className="w-full bg-cream-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Luxury Reservation</span>
                  </button>
                  <p className="mt-2.5 text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Frontend Demonstration: No actual payment will be deducted.</span>
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Selected Room Preview & Real-Time Price Calculation */}
            <div className="lg:col-span-5 space-y-6">
              {/* Selected Room Snapshot */}
              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xl overflow-hidden">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                  Selected Accommodation
                </h4>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold">
                    {formatPrice(selectedRoom.price)} / Night
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-navy-950">
                  {selectedRoom.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {selectedRoom.shortDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                  <span>Bed: {selectedRoom.bedType}</span>
                  <span>Size: {selectedRoom.size}</span>
                  <span>Max: {selectedRoom.maxGuests} Guests</span>
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-7 border border-navy-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">
                  Estimated Price Summary
                </h4>

                <div className="space-y-3 text-sm pb-5 border-b border-navy-800">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Room Rate</span>
                    <span className="font-medium text-white">{formatPrice(selectedRoom.price)}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Stay Duration</span>
                    <span className="font-medium text-white">
                      {nights} {nights === 1 ? 'Night' : 'Nights'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Rooms Requested</span>
                    <span className="font-medium text-white">
                      {pricing.roomsCount} {pricing.roomsCount === 1 ? 'Room' : 'Rooms'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-navy-800/60">
                    <span>Estimated Subtotal</span>
                    <span className="font-medium text-white">{formatPrice(pricing.baseSubtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Hospitality GST (12%)</span>
                    <span>{formatPrice(pricing.gstTax)}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span>Luxury Service Charge (5%)</span>
                    <span>{formatPrice(pricing.serviceCharge)}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="pt-5 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gold-400 block font-semibold">
                      Estimated Grand Total
                    </span>
                    <span className="text-xs text-slate-400">All applicable taxes included</span>
                  </div>
                  <div className="font-serif text-3xl font-bold text-white">
                    {formatPrice(pricing.grandTotal)}
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="mt-5 p-3.5 bg-navy-900/90 rounded-xl border border-navy-800 text-xs text-slate-300 space-y-1.5">
                  <div className="font-semibold text-gold-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>Complimentary Inclusions</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Buffet breakfast, infinity pool access, gigabit Wi-Fi, and valet parking included.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Confirmation Message Screen */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-2xl text-center"
          >
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-[0.28em] text-gold-600 font-semibold block mb-2">
              Reservation Confirmed
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-navy-950 font-normal">
              We Look Forward to Welcoming You
            </h3>

            <p className="mt-3 text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              Your luxury reservation at {hotelInfo.name} has been processed in our demonstration system. A confirmation email has been simulated to <strong>{bookingConfirmation.email}</strong>.
            </p>

            {/* Reference Badge */}
            <div className="my-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold-50 border border-gold-300 text-gold-800 font-mono font-bold text-sm tracking-widest shadow-sm">
              <span>REFERENCE: {bookingConfirmation.referenceId}</span>
            </div>

            {/* Detailed Receipt Box */}
            <div className="bg-stone-50 rounded-2xl p-6 text-left border border-stone-200/80 mb-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Lead Guest</span>
                  <span className="text-slate-800 font-bold text-sm">{bookingConfirmation.guestName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Contact Phone</span>
                  <span className="text-slate-800 font-medium">{bookingConfirmation.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Selected Room</span>
                  <span className="text-slate-800 font-semibold">{bookingConfirmation.roomName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Rooms & Guests</span>
                  <span className="text-slate-800 font-medium">
                    {bookingConfirmation.roomsCount} Room(s), {bookingConfirmation.guests} Guest(s)
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Check-In</span>
                  <span className="text-slate-800 font-medium">{bookingConfirmation.checkIn} (from 2:00 PM)</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Check-Out</span>
                  <span className="text-slate-800 font-medium">{bookingConfirmation.checkOut} (until 12:00 PM)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block">Total Amount</span>
                  <span className="text-[11px] text-slate-500">Payable upon arrival at front desk</span>
                </div>
                <div className="font-serif text-2xl font-bold text-navy-950">
                  {formatPrice(bookingConfirmation.pricing.grandTotal)}
                </div>
              </div>
            </div>

            {/* Disclaimer Alert */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs text-left mb-8 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Demonstration Note:</strong> This is a frontend demonstration project for Grand Horizon Hotel & Resort. No real credit card transaction or live booking was executed.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-navy-900 bg-white hover:bg-stone-50 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Confirmation</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Book Another Stay</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
