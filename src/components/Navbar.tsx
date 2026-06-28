/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-blue-50/95 backdrop-blur-md border-b border-blue-100/80 shadow-sm' 
        : 'bg-transparent border-b border-transparent hover:bg-blue-50/95 hover:backdrop-blur-md hover:border-blue-100/80 hover:shadow-sm'
    }`}>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-24 sm:h-28">
          
          {/* Left Container: Logo & Nav items immediately to its right */}
          <div className="flex items-center gap-10">
            {/* Logo & Brand */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group shrink-0 text-left transition-all duration-300 transform hover:scale-[1.01]"
            >
              <Logo variant="light" />
            </button>

            {/* Desktop Navigation immediately to the left-center */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-1.5 border-l border-slate-100 pl-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    currentView === item.id
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Container: Book Assessment primary action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all shadow-soft hover:shadow-soft-lg cursor-pointer transform active:scale-98"
            >
              Book Assessment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  currentView === item.id
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 text-white font-bold text-center shadow-soft"
              >
                <span>Book Assessment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
