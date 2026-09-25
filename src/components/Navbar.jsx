import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarCheck, Phone, ChevronRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelInfo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Offers', path: '/offers' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Navbar background style:
  // When scrolled OR on inner pages: deep solid navy background with backdrop blur & shadow
  // When at the very top of homepage: dark transparent gradient overlay so hero image shines through
  const isSolid = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800/80'
            : 'bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
              aria-label="Grand Horizon Hotel & Resort Homepage"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-gold-500/60 p-1 bg-navy-900/80 flex items-center justify-center shadow-md group-hover:border-gold-400 transition-colors">
                <img
                  src="/icons/logo-icon.svg"
                  alt="Grand Horizon Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-gold-300 transition-colors">
                  GRAND HORIZON
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.28em] text-gold-400 uppercase font-medium">
                  Hotel & Resort
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium tracking-wide transition-all rounded-md relative ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${hotelInfo.reservationsPhone}`}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-gold-300 transition-colors"
                title="Call Reservations"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden xl:inline">{hotelInfo.reservationsPhone}</span>
              </a>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-lg shadow-gold-500/20 active:translate-y-0"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/booking"
                className="px-3 py-1.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold-400" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-950 border-l border-navy-800 z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-md border border-gold-500/50 p-1 bg-navy-900 flex items-center justify-center">
                      <img src="/icons/logo-icon.svg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-white tracking-wider">
                        GRAND HORIZON
                      </h3>
                      <p className="text-[10px] text-gold-400 tracking-widest uppercase">
                        Hotel & Resort
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-gold-500/15 text-gold-400 font-semibold border-l-4 border-gold-500'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Quick Contact & CTA */}
              <div className="pt-6 border-t border-navy-800 space-y-3">
                <Link
                  to="/booking"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-center block text-sm tracking-wider uppercase shadow-lg shadow-gold-500/20"
                >
                  Reserve Your Stay
                </Link>

                <div className="text-center text-xs text-slate-400 space-y-1 pt-2">
                  <p>Direct Reservations: {hotelInfo.reservationsPhone}</p>
                  <p>{hotelInfo.address.split(',')[0]}, Chennai</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
