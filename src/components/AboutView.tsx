/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, ShieldCheck, Compass } from 'lucide-react';

export default function AboutView() {
  const principles = [
    {
      icon: <Heart className="w-5 h-5 text-brand-600" />,
      title: "Family Integrity",
      desc: "Therapy only flourishes when caregivers are fully supported and equipped. We build practical bedtime, playtime, and mealtime habits alongside you."
    },
    {
      icon: <Compass className="w-5 h-5 text-sage-600" />,
      title: "Neurodiversity Affirmation",
      desc: "We prioritize building communication pathways and emotional regulation rather than demanding sensory maskings or behavioral suppressions."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
      title: "Science & Heart",
      desc: "Our plans are backed by peer-reviewed evidence and positive reinforcement science, yet integrated within highly creative play routines."
    }
  ];

  const spaces = [
    {
      title: "Sensory Calm Pods",
      desc: "Specially designed visual corners equipped with low-luminance lighting, acoustic sound damping panels, and soft bubble tactile columns to assist children in calming down during stress."
    },
    {
      title: "Digital Communication Labs",
      desc: "Cozy rooms packed with educational tablet setups and interactive triggers where children learn to navigate and configure individual augmentative visual boards."
    },
    {
      title: "Interactive Motor-Rehab Gym",
      desc: "An active developmental play arena with soft sensory safety mats, tactile suspension swings, and balancing tracks that stimulate vestibular coordination."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Intro Header */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-16 pb-12 rounded-[2rem]">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-100/60 px-3 py-1.5 rounded-full inline-block">Our Story & Mission</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
            Nurturing Resilience, Play by Play
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Newly launched, Nexcore Child Development & Neuro Rehab Centre was designed from the ground up by forward-thinking therapists who envisioned a modern developmental space that feels less like a sterile clinic, and more like a warm, supportive home. Featuring state-of-the-art sensory technologies and neuro-rehabilitation tools, we seamlessly bridge the gap between cutting-edge, evidence-based science and absolute, soothing compassion.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-100/60 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-sage-600 uppercase tracking-wider block">How We Guide Growth</span>
            <h2 className="font-display text-3xl font-extrabold text-brand-900">
              Our Core Philosophical Pillars
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We understand that hearing developmental diagnoses like Autism or ADHD can feel overwhelming. We are here not to label your child, but to unlock their existing potential and bring back calm to your family space.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {principles.map((p, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-warm-50/50 border border-warm-100/40 hover:bg-warm-100/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-slate-700">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-900 text-base">{p.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gradient-to-tr from-brand-900 via-brand-800 to-brand-900 py-16 text-white rounded-[2.5rem] w-full shadow-soft-lg">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">Our Campus Environment</span>
          <h2 className="font-display text-3xl font-extrabold text-white">Touring Our Calming Care Spaces</h2>
          <p className="text-brand-100 text-sm sm:text-base leading-relaxed">
            Medical clinics can induce immediate stress hormones. Our spaces are curated to decrease baseline cortisol, featuring filtered lighting spectrums, safety safety matting, and acoustic dampening panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors space-y-3"
            >
              <h3 className="font-display font-bold text-lg text-brand-200">
                {space.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {space.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
