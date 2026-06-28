/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Heart,
  ArrowRight
} from 'lucide-react';
import GoogleMapsSection from './GoogleMapsSection';

export default function ContactView() {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [concern, setConcern] = useState('Autism Spectrum');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 w-full">
      {/* Header */}
      <section className="text-center pt-8 space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-100/60 px-3 py-1.5 rounded-full inline-block">Connect With Us</span>
        <h1 className="font-display text-4xl font-extrabold text-brand-900 tracking-tight">
          We are Here to Partner with You
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Embarking on developmental therapy takes immense thoughtfulness. Let's start with a gentle, non-judgmental discussion regarding your child's needs.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column Contact Details cards */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-brand-100 shadow-soft space-y-6">
            <h3 className="font-display font-extrabold text-brand-900 text-lg">Clinic Liaison Contacts</h3>

            <div className="space-y-4">
              <div className="flex gap-4 p-3 bg-brand-50/40 rounded-2xl border border-brand-100/50 hover:bg-brand-50/80 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-brand-500/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-extrabold text-brand-700 uppercase tracking-wider mb-1">Call Us On</span>
                  <div className="space-y-1.5">
                    <a 
                      href="tel:+919468585779" 
                      className="block text-sm font-extrabold text-slate-850 hover:text-brand-600 transition-colors py-0.5"
                    >
                      +91 94685 85779
                    </a>
                    <a 
                      href="tel:+918426857893" 
                      className="block text-sm font-extrabold text-slate-850 hover:text-brand-600 transition-colors py-0.5"
                    >
                      +91 84268 57893
                    </a>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Direct clinical triage helpline</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry Dispatch</span>
                  <p className="text-sm font-bold text-slate-700 mt-1 break-all select-all">clinical@nexcoreclinic.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Our Campus Address</span>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Nexcore Child Development & Neuro Rehab Centre,<br />
                    University road, Next building to Eden Internationl School,<br />
                    Above SBI Bank, Udaipur, Rajasthan 313001, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-brand-900 via-brand-800 to-brand-900 p-6 rounded-3xl text-white space-y-4 border border-brand-800/30">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-400 animate-pulse" />
              <h4 className="font-display font-bold text-sm text-brand-200">Intake Desk Hours</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We return phone inquiries and custom emails actively during weekday slots to match your schedules.
            </p>
            <div className="text-xs space-y-2 border-t border-slate-700/60 pt-3">
              <div className="flex justify-between">
                <span>Moday - Friday:</span>
                <span className="font-bold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-bold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Inquiry Form Replaced with Map */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white p-5 rounded-3xl border border-brand-100 shadow-soft space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-display font-extrabold text-brand-900 text-lg">Interactive Campus Map</h3>
                <p className="text-slate-500 text-xs">Our primary treatment and administrative center in Udaipur</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>Active Center</span>
              </span>
            </div>
            <GoogleMapsSection lat={24.58902940130687} lng={73.71407201274143} />
          </div>
        </div>
      </div>
    </div>
  );
}
