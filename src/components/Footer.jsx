import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';
import { hotelInfo } from '../data/hotelInfo';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setIsSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Hospitality Banner */}
        <div className="bg-navy-900/90 border border-navy-800 rounded-2xl p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2 block">
                Privilege Newsletter
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Subscribe for Exclusive Retreat Offers
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-lg">
                Receive curated travel stories, seasonal culinary previews, and private invitation-only suites discounts directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {isSubscribed ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you for joining our private circle. Your welcome benefits are on the way.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-navy-950/80 border border-navy-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
                    >
                      <span>Join Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {errorMsg && <p className="text-rose-400 text-xs pl-1">{errorMsg}</p>}
                  <p className="text-[11px] text-slate-500 flex items-center gap-1.5 pl-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-500/70" />
                    <span>We respect your privacy. Unsubscribe at any time.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-navy-800/80">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg border border-gold-500/60 p-1 bg-navy-900 flex items-center justify-center">
                <img src="/icons/logo-icon.svg" alt="Grand Horizon" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  GRAND HORIZON
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-medium">
                  Hotel & Resort
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {hotelInfo.shortName} offers unmatched luxury, timeless heritage charm, and bespoke modern hospitality along the serene riverbanks of Chennai.
            </p>

            <div className="pt-2">
              <p className="font-serif italic text-gold-400 text-sm">
                "{hotelInfo.tagline}"
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={hotelInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={hotelInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={hotelInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={hotelInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-gold-400 transition-colors">
                  About the Resort
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Dining & Lounges
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Resort Facilities
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Special Packages
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Reserve Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Rooms */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">
              Accommodations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rooms/deluxe-room" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Deluxe Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/premium-room" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Premium Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/executive-room" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Executive Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/junior-suite" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Junior Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms/luxury-suite" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Luxury Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms/presidential-suite" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Presidential Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{hotelInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`tel:${hotelInfo.reservationsPhone}`} className="hover:text-gold-400">
                  {hotelInfo.reservationsPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold-400">
                  {hotelInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{hotelInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {hotelInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400">Terms of Hospitality</Link>
            <span className="text-gold-500/80">Frontend Demonstration Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
