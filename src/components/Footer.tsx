/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Card Column */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <Logo variant="dark" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering children on the Autism Spectrum, with ADHD, and communication barriers to uncover their absolute brightest potential within a serene, supportive setting.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-semibold text-white uppercase text-xs tracking-wider mb-5">
              Explore Services
            </h3>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <button 
                  onClick={() => setView('services')}
                  className="hover:text-brand-300 transition-colors cursor-pointer text-left"
                >
                  Autism Spectrum Support (ASD)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('services')}
                  className="hover:text-brand-300 transition-colors cursor-pointer text-left"
                >
                  ADHD Focus & Regulation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('services')}
                  className="hover:text-brand-300 transition-colors cursor-pointer text-left"
                >
                  Speech & AAC Communication
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('services')}
                  className="hover:text-brand-300 transition-colors cursor-pointer text-left"
                >
                  Behavioral & Social Coaching
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div>
            <h3 className="font-display font-semibold text-white uppercase text-xs tracking-wider mb-5">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Nexcore Child Development & Neuro Rehab Centre,<br />University road, Next building to Eden Internationl School,<br />Above SBI Bank, Udaipur, Rajasthan 313001, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sage-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919468585779" className="block hover:text-brand-300 transition-colors">
                    +91 94685 85779
                  </a>
                  <a href="tel:+918426857893" className="block hover:text-brand-300 transition-colors">
                    +91 84268 57893
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="break-all">clinical@nexcoreclinic.com</span>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM (By Appt)
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Navigation Shortcuts */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <button onClick={() => setView('home')} className="hover:underline cursor-pointer">Home</button>
            <span>•</span>
            <button onClick={() => setView('about')} className="hover:underline cursor-pointer">About Us</button>
            <span>•</span>
            <button onClick={() => setView('services')} className="hover:underline cursor-pointer">Services</button>
            <span>•</span>
            <button onClick={() => setView('contact')} className="hover:underline cursor-pointer">Contact Us</button>
          </div>
          <p className="text-center text-slate-600 mt-2">
            © 2026 Nexcore Clinic. All Rights Reserved. Empowering family resilience through mindful, scientific care.
          </p>
        </div>
      </div>
    </footer>
  );
}
