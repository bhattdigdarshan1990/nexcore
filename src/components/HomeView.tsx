/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Smile, 
  Brain, 
  MessageCircle, 
  Activity, 
  Calendar,
  ShieldCheck,
  Award
} from 'lucide-react';
import neuroIllustration from '../assets/images/neuro_illustration_1781778010361.jpg';
import expertMale1 from '../assets/images/expert_male_1.png';
import expertMale2 from '../assets/images/expert_male_2.png';

interface HomeViewProps {
  setView: (view: string) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  const focusAreas = [
    {
      icon: <Smile className="w-6 h-6 text-brand-600" />,
      title: "Autism Spectrum Therapy",
      description: "Strength-based, sensory-aware behavioral and play therapy targeted at self-reliance, emotional vocabulary, and deep family connection.",
      bg: "bg-brand-50/50 hover:bg-brand-100/60 border-brand-100"
    },
    {
      icon: <Brain className="w-6 h-6 text-sage-600" />,
      title: "ADHD & Executive Training",
      description: "Calming strategies to strengthen working memory, ease task-switching transitions, and build confidence through visual routines.",
      bg: "bg-sage-50/40 hover:bg-sage-100/50 border-sage-100"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-warm-500" />,
      title: "AAC & Speech Pathways",
      description: "Nurturing expressive abilities in non-communicative children through customized vocal games and Augmentative Visual Boards.",
      bg: "bg-amber-50/30 hover:bg-amber-100/40 border-amber-100"
    },
    {
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      title: "Behavioral & Social Guidance",
      description: "Positive child behavior adjustment using playful clinical pacing that replaces dysregulation with collaborative joint interactions.",
      bg: "bg-teal-50/30 hover:bg-teal-100/40 border-teal-100"
    }
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-600" />,
      title: "HIPAA-Secure Clinical Standard",
      desc: "Instant communication, fully encrypted health logs, and certified clinical coordination tools."
    },
    {
      icon: <Award className="w-5 h-5 text-sage-600" />,
      title: "Gold-Standard Pediatric Licensing",
      desc: "All programs are customized and directed under senior BCBA and pediatric speech-language therapist supervision."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-warm-500" />,
      title: "Neurodiversity-Affirming Space",
      desc: "We prioritize each child's innate strengths and sensory integrity rather than enforcing behavioral conformity."
    }
  ];

  const handleBookClick = () => {
    setView('contact');
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-20 overflow-hidden rounded-[2.5rem] sm:mx-4 md:mx-0 shadow-soft-lg border border-brand-100 bg-white">
        
        {/* Full Section Background Image with high-quality localized pediatric blend/vignette */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src={neuroIllustration} 
            alt="Nexcore Neurodiversity watercolor background illustration with kids, heart brain and glowing neurons" 
            className="w-full h-full object-cover object-center opacity-90 md:opacity-100 transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          {/* Faint overlay to protect text contrast while letting the deep watercolor background shine clearly */}
          <div className="absolute inset-0 bg-white/15 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12">
          {/* Glass panel wrapper to elevate text contrast over the background elements */}
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-white/45 backdrop-blur-[5px] p-6 sm:p-10 rounded-[2rem] border border-white/50 shadow-soft-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-950 text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
              <span>Empowering Neurodiverse Childhoods</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-950 leading-[1.08] max-w-3xl mx-auto">
              Where Every Unique Mind Finds Its <span className="text-brand-600">Gentle Path</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold max-w-2xl mx-auto">
              A serene therapeutic haven tailored for autistic children, ADHD regulatory coaching, non-verbal speech development, and collaborative child behavioral therapy. Our dedicated clinicians partner with you to turn stress into everyday milestones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                 onClick={handleBookClick}
                 className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-base transition-all shadow-soft hover:shadow-soft-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 mx-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Initial Assessment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Minimal Trust Indicator */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-slate-200/60 text-center max-w-md mx-auto">
              <div>
                <span className="block text-2.5xl font-bold font-display text-brand-900">100%</span>
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Strength-Based</span>
              </div>
              <div>
                <span className="block text-2.5xl font-bold font-display text-slate-700">1:1</span>
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Family Focus</span>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="w-full">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-brand-600 tracking-wider uppercase">Our Core Specializations</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-900">
            Support Tailored for Your Child's Unique Developmental Journey
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Our approaches do not attempt to change who your child is. We build sensory comfort, language access, and behavioral confidence patterns so they navigate the world on their own terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {focusAreas.map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-3xl border transition-all duration-300 shadow-soft group hover:-translate-y-1 ${item.bg}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-soft flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="bg-slate-50 border-y border-brand-100/50 py-20">
        <div className="w-full px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-brand-600 tracking-wider uppercase block">Meet Our Experts</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-900 leading-tight">
              A Highly Specialized Clinical Leadership Team
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary directors and clinicians bring years of clinical competence, offering strength-based and holistic development guidance uniquely tailored around pediatric growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Expert 1 */}
            <div className="bg-white rounded-[2rem] border border-brand-100/60 p-6 shadow-soft flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg group">
              <div className="w-40 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden shadow-inner shrink-0 border border-brand-100 bg-slate-50">
                <img 
                  src={expertMale1} 
                  alt="Dr. Shubham Jangid" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex py-1 px-2 text-[10px] font-bold tracking-wider uppercase leading-none bg-brand-100 text-brand-900 rounded-full">
                  DIRECTOR & FOUNDER
                </div>
                <h3 className="font-display font-bold text-xl text-brand-950">
                  Dr. Shubham Jangid
                </h3>
                <p className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">
                  BOT • MOT PEDIATRICS
                </p>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="bg-white rounded-[2rem] border border-brand-100/60 p-6 shadow-soft flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg group">
              <div className="w-40 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden shadow-inner shrink-0 border border-brand-100 bg-slate-50">
                <img 
                  src={expertMale2} 
                  alt="Dr. Kuldeep Singh Rathore" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex py-1 px-2 text-[10px] font-bold tracking-wider uppercase leading-none bg-sage-100 text-sage-900 rounded-full">
                  DIRECTOR & FOUNDER
                </div>
                <h3 className="font-display font-bold text-xl text-brand-950">
                  Dr. Kuldeep Singh Rathore
                </h3>
                <p className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">
                  BOT • MOT NEUROSCIENCE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action at bottom */}
      <section className="w-full">
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-soft-lg border border-brand-800/20">
          <div className="absolute inset-0 bg-radial-gradient-top opacity-10"></div>
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold text-brand-300 uppercase tracking-widest block">Embark on Your Path Today</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Ready to Support Your Child's Bright Horizon?</h2>
            <p className="text-brand-100 text-sm sm:text-base leading-relaxed">
              Reach out to our welcoming intake team to schedule a preliminary observation and discuss customized guidance options tailored directly around your child's daily habits.
            </p>
            <div className="flex justify-center pt-4">
              <button
                onClick={handleBookClick}
                className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                Schedule Initial Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
