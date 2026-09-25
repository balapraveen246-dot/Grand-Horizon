import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from '../components/SocialIcons';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { hotelInfo } from '../data/hotelInfo';

const faqs = [
  {
    q: "What are the standard check-in and check-out times?",
    a: "Standard check-in begins at 2:00 PM, and check-out is until 12:00 PM. Early check-in and late check-out privileges are subject to availability and provided complimentary for Executive and Suite reservations."
  },
  {
    q: "Do you arrange private airport transfers?",
    a: "Yes, our luxury chauffeur fleet of Mercedes-Benz and BMW sedans provides round-the-clock airport meet & greet transfers between Chennai International Airport (MAA) and the resort."
  },
  {
    q: "Are the restaurants open to non-resident guests?",
    a: "All our restaurants and lounges welcome outside patrons. Advance table reservations are highly recommended for The Riverbank and Celestial Rooftop."
  },
  {
    q: "Is there secure parking on-site?",
    a: "Yes, we provide complimentary 24-hour white-glove valet parking and an underground secure garage with high-speed EV charging stations."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
            alt="Grand Horizon Hotel Concierge & Lobby"
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
              Personal Concierge
            </span>
            <span className="h-px w-6 bg-gold-400"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal"
          >
            Connect With Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Whether planning a bespoke weekend getaway, an opulent wedding banquet, or requesting personalized concierge assistance, we are at your service 24/7.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block">
                  Hotel Information
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                  Grand Horizon Hotel & Resort
                </h3>

                <div className="space-y-4 text-sm text-slate-600">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                        Address
                      </span>
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {hotelInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                        Direct Inquiries & Reservations
                      </span>
                      <p className="text-slate-800 font-medium">
                        <a href={`tel:${hotelInfo.reservationsPhone}`} className="hover:text-gold-600 transition-colors">
                          {hotelInfo.reservationsPhone}
                        </a>
                      </p>
                      <p className="text-xs text-slate-500">
                        Front Desk: {hotelInfo.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                        Email Correspondence
                      </span>
                      <p className="text-slate-800 font-medium">
                        <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold-600 transition-colors">
                          {hotelInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                        Operating Hours
                      </span>
                      <p className="text-slate-800 font-medium">
                        {hotelInfo.workingHours} (Round the clock)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-stone-100">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-3">
                    Connect On Social
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={hotelInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-cream-50 border border-stone-200 text-slate-600 hover:text-gold-600 hover:border-gold-500 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={hotelInfo.socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-cream-50 border border-stone-200 text-slate-600 hover:text-gold-600 hover:border-gold-500 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={hotelInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-cream-50 border border-stone-200 text-slate-600 hover:text-gold-600 hover:border-gold-500 flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={hotelInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-cream-50 border border-stone-200 text-slate-600 hover:text-gold-600 hover:border-gold-500 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Fictional Demo Notice */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
                <strong>Demonstration Note:</strong> All contact phone numbers and emails provided on this website are fictional demonstration data for Grand Horizon Hotel & Resort.
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Google Maps-Style Location Display */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold block mb-1">
                  Resort Location
                </span>
                <h3 className="font-serif text-2xl text-navy-950 font-normal">
                  Riverside Avenue Waterfront, Chennai
                </h3>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Visual Styled Map Card */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden bg-slate-900 border border-stone-200">
              <iframe
                title="Grand Horizon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.28823522206!2d80.19830504128825!3d13.047525471465227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-85"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-stone-200 text-xs text-navy-950 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>123 Riverside Avenue, Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-16 max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Common Queries"
              title="Frequently Asked Questions"
              description="Quick answers regarding resort reservations, transfers, and dining privileges."
            />

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-navy-950 hover:text-gold-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
