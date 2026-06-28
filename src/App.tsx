/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServiceView from './components/ServiceView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentView, setView] = useState<string>('home');

  // Switch views wrapper with smooth scroll back to top of page
  const handleSetView = (view: string) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-sans selection:bg-brand-100 selection:text-brand-900 relative">
      
      {/* Premium ambient decorative background reflecting neuro-rehab and kids development */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft glowing ambient child-friendly pediatric color gradients - perfectly visible yet elegant */}
        <div className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-100/70 to-indigo-100/50 blur-3xl opacity-90" />
        <div className="absolute top-[28%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-100/80 to-brand-100/40 blur-3xl opacity-80" />
        <div className="absolute top-[55%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-100/60 to-brand-100/30 blur-3xl opacity-75" />
        <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-100/60 to-blue-50/70 blur-3xl opacity-85" />
        
        {/* Subtle, beautiful neural connection grid / synapses dot-matrix pattern - enhanced visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(#3884f6_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.11]" />
        
        {/* Soft concentric sensory rings representing pediatric support, steps and safety zones */}
        <svg className="absolute top-[14%] right-[10%] w-80 h-80 text-brand-500/20 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="24" />
          <circle cx="50" cy="50" r="10" />
        </svg>

        <svg className="absolute bottom-[22%] left-[4%] w-72 h-72 text-indigo-500/15 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
          <path d="M 12 50 Q 32 15, 52 50 T 92 50" />
        </svg>

        {/* Soft synapses symbol showing developmental connection pathways */}
        <svg className="absolute top-[58%] right-[8%] w-60 h-60 text-brand-600/15 opacity-85" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
          <circle cx="52" cy="52" r="4.5" fill="currentColor" />
          <circle cx="84" cy="28" r="3.5" fill="currentColor" />
          <circle cx="72" cy="80" r="3.5" fill="currentColor" />
          <line x1="20" y1="20" x2="52" y2="52" />
          <line x1="52" y1="52" x2="84" y2="28" />
          <line x1="52" y1="52" x2="72" y2="80" />
        </svg>

        {/* Gradient overlays to prevent background distraction near headers */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent opacity-95" />
      </div>
      
      {/* Dynamic Navbar */}
      <Navbar 
        currentView={currentView} 
        setView={handleSetView} 
      />

      {/* Primary Page Layout Stage */}
      <main className="flex-grow py-6 sm:py-10 overflow-hidden transition-all duration-500 bg-transparent hover:bg-warm-50/20">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {currentView === 'home' && (
                <HomeView 
                  setView={handleSetView} 
                />
              )}

              {currentView === 'about' && (
                <AboutView />
              )}

              {currentView === 'services' && (
                <ServiceView 
                  setView={handleSetView} 
                />
              )}

              {currentView === 'contact' && (
                <ContactView />
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      {/* Styled Footing Credits */}
      <Footer setView={handleSetView} />

    </div>
  );
}
