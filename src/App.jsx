import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout
import MainLayout from './layouts/MainLayout';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Rooms = lazy(() => import('./pages/Rooms'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const Dining = lazy(() => import('./pages/Dining'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Offers = lazy(() => import('./pages/Offers'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Luxury Loading Fallback Spinner
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream-50">
      <div className="w-12 h-12 rounded-full border-2 border-gold-300 border-t-gold-600 animate-spin" />
      <span className="mt-4 font-serif text-sm tracking-widest uppercase text-navy-950">
        Grand Horizon
      </span>
    </div>
  );
}

// Subtle Page Transition Wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="rooms" element={<PageWrapper><Rooms /></PageWrapper>} />
          <Route path="rooms/:id" element={<PageWrapper><RoomDetails /></PageWrapper>} />
          <Route path="dining" element={<PageWrapper><Dining /></PageWrapper>} />
          <Route path="facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
          <Route path="offers" element={<PageWrapper><Offers /></PageWrapper>} />
          <Route path="booking" element={<PageWrapper><Booking /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
