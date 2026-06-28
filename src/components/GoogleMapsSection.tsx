/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Compass, Heart } from 'lucide-react';

interface GoogleMapsSectionProps {
  lat?: number;
  lng?: number;
  zoom?: number;
}

export default function GoogleMapsSection({ 
  lat = 24.58902940130687, 
  lng = 73.71407201274143, 
  zoom = 16 
}: GoogleMapsSectionProps) {
  // Free, robust coordinates-based embed URL that requires zero API keys or billing configurations
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full relative rounded-3xl overflow-hidden border border-brand-100 shadow-soft h-[480px] bg-slate-50 flex flex-col justify-between">
      {/* Interactive Free Embed Frame */}
      <div className="w-full h-full relative">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nexcore Center Location Map"
          className="w-full h-full grayscale-[10%] contrast-[110%] hover:grayscale-0 transition-all duration-500"
        ></iframe>

        {/* Floating Custom Info Pill for enhanced UX */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-brand-100/60 max-w-xs pointer-events-none sm:pointer-events-auto">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-600 block">
                Main R&D Centre
              </span>
              <h4 className="font-display font-bold text-xs text-brand-900 leading-tight">
                Nexcore Neuro Rehab Centre
              </h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                University road, Next building to Eden Internationl School, Above SBI Bank, Udaipur
              </p>
              <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px]">
                <span className="font-mono text-slate-400">24.5890° N, 73.7141° E</span>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 font-bold hover:underline inline-flex items-center gap-0.5 pointer-events-auto"
                >
                  Directions <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

