import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, HelpCircle, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[+0-9\s-]{8,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please choose or provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your inquiry or message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message should be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate swift backend delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-normal text-navy-950">
              Inquiry Sent Successfully
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Grand Horizon Hotel & Resort. Our dedicated concierge team has received your message and will attend to your request promptly.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block mb-1">
                Direct Communication
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                Send Us an Inquiry
              </h3>
            </div>

            {/* Name */}
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                <User className="w-4 h-4 text-gold-600" />
                <span>Your Full Name *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Lord / Lady / Dr. / Mr. / Ms."
                className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                  errors.name ? 'border-rose-400' : 'border-stone-200'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
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
                  placeholder="contact@domain.com"
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
                  placeholder="+91 98765 00000"
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

            {/* Subject */}
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-gold-600" />
                <span>Subject / Nature of Inquiry *</span>
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                  errors.subject ? 'border-rose-400' : 'border-stone-200'
                }`}
              >
                <option value="">Select an inquiry type</option>
                <option value="Room & Suite Reservation">Room & Suite Reservation</option>
                <option value="Dining & Private Table Booking">Dining & Private Table Booking</option>
                <option value="Weddings & Royal Banquets">Weddings & Royal Banquets</option>
                <option value="Corporate Meetings & Events">Corporate Meetings & Events</option>
                <option value="Spa & Wellness Appointments">Spa & Wellness Appointments</option>
                <option value="General Concierge Assistance">General Concierge Assistance</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-gold-600" />
                <span>Your Message *</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Kindly share your specific dates, guest requirements, or questions..."
                className={`w-full bg-cream-50 border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none ${
                  errors.message ? 'border-rose-400' : 'border-stone-200'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
