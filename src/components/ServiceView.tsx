/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Smile, 
  Brain, 
  MessageSquare, 
  Activity, 
  CheckCircle2, 
  TrendingUp, 
  Bookmark,
  Sparkles,
  Calendar
} from 'lucide-react';

interface ServiceViewProps {
  setView: (view: string) => void;
}

export default function ServiceView({ setView }: ServiceViewProps) {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const services = [
    {
      icon: <Smile className="w-6 h-6 text-brand-600" />,
      title: "Autism Spectrum Disorder (ASD) Program",
      subtitle: "Strength-based development centered on physical comfort, communication, and emotional coping.",
      problem: "Traditional systems demand total masking or compliance, causing stress meltdowns, burnout, and emotional withdrawal in autistic children.",
      approach: "We utilize natural play environments where children complete goals utilizing high-priority special interests (e.g. trains, dinosaurs, space) and positive reinforcement ratios. We foster intrinsic confidence and emotional vocabulary.",
      milestones: [
        "Self-initiate 3-word expressive functional requests",
        "Form calm transitional habits using visual countdown cues",
        "Regulate and seek help when sensory overload triggers begin",
        "Cooperate and take turns in supportive 1:1 adult/peer play"
      ],
      homeExercise: "Create a designated 'Sensory Cozy Nest' in your living room featuring plush pillows, low noise, and specialized tactile elements for quiet de-escalation times."
    },
    {
      icon: <Brain className="w-6 h-6 text-sage-600" />,
      title: "ADHD & Executive Pacing Program",
      subtitle: "Calming strategies to master transitions, sustain play tasks, and build self-directing routines.",
      problem: "Children with combined ADHD find vertical sequences, instructions, and static transitions highly frantic, leading to parent frustration and low child confidence.",
      approach: "We replace verbal scolding with physical, high-contrast visual task boards, sensory pacing breaks, and vertical countdown timers. We break complex mornings into simple, doable steps wrapped in token play mechanics.",
      milestones: [
        "Complete 3-step morning visual chart independently",
        "Maintain focus on quiet cognitive tasks for up to 10 minutes",
        "Self-direct clean-up phases using audio anchors and songs",
        "Decrease transition outbursts by utilizing physical checklist helpers"
      ],
      homeExercise: "Set a dynamic audio timer using high-energy music tracks as morning anchors. 'Get dressed before this space-mission track completes!'"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-teal-600" />,
      title: "Speech & Non-Speech Comm (AAC)",
      subtitle: "Customized diagnostic systems to unlock speech clarity and augmentative communications.",
      problem: "Non-verbal and speech-delayed children express extreme distress because their underlying intellect is bottlenecked by physical expressive limitations.",
      approach: "Our certified practitioners model AAC boards, Picture Exchange Systems (PECS), and communication tablets. Every communicative signal (gaze, gesture, touch) is validated, accepted, and paired with functional visual tools.",
      milestones: [
        "Navigate and select icons on communication tablets to state basic needs",
        "Coordinate joint-directed eye contact during cooperative play models",
        "Imitate consonant-vowel word chains consistently",
        "Form social responses such as hand waving or shaking head"
      ],
      homeExercise: "Modeling-First: Point to physical icons on refrigerator cards as you state daily meals. Direct modeling accelerates symbol associations faster than testing them."
    },
    {
      icon: <Activity className="w-6 h-6 text-amber-600" />,
      title: "Child Behavior & Home Calm Counseling",
      subtitle: "Supportive emotional-behavior remodeling that converts meltdowns into cooperative harmony.",
      problem: "Oppositional behavior and emotional tantrums can isolate families, making grocery trips, sibling interactions, and school prep feel impossible.",
      approach: "We identify the core physiological triggers behind the disruptive expressions (lack of sleep, physical hunger, visual noise, lack of escape pathways) and teach alternative functional communication actions to both parent and child.",
      milestones: [
        "Replace physical hitting with physical pointing to emotions cards",
        "Follow simple 2-step clinical directives safely on first request",
        "Express anger using tactile squeezing or verbalizing 'I need space'",
        "Form self-regulating strategies to handle sibling interactive sharing"
      ],
      homeExercise: "Adopt the '4:1 Positive Statement Ratio'. Actively look for small compliant acts and declare specific verbal praise immediately to build secure respect loops."
    }
  ];

  const handleBookRedirect = () => {
    setView('contact');
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-16 pb-12 text-center space-y-4">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-100/60 px-3 py-1.5 rounded-full inline-block">Our Care Pathways</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
          Specialized Therapy Services
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
          Every child is a distinct learner. Our multi-disciplinary programs combine behavior therapy, speech development, sensory occupational calibration, and supportive parent coaching.
        </p>
      </section>

      {/* Interactive Tabs Layout */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1 px-4">Select Program</span>
            {services.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveServiceIdx(index)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                  activeServiceIdx === index
                    ? 'bg-white border-brand-200 shadow-soft text-brand-900 ring-2 ring-brand-100'
                    : 'bg-warm-50/50 border-transparent hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  activeServiceIdx === index ? 'bg-brand-50 text-brand-600' : 'bg-white text-slate-400'
                }`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
            
            <div className="p-5 rounded-2xl bg-brand-900 text-white space-y-3 mt-8">
              <h4 className="font-display font-bold text-sm">Need a Custom Intake Coordination?</h4>
              <p className="text-xs text-brand-200 leading-relaxed">
                Our clinical director conducts initial parent-caregiver intakes to map the ideal therapy team matches for your child.
              </p>
              <button 
                onClick={handleBookRedirect}
                className="w-full py-2.5 rounded-xl bg-white text-brand-900 text-xs font-bold hover:bg-brand-50 transition cursor-pointer"
              >
                Request Consultation Appt
              </button>
            </div>
          </div>

          {/* Right Active Details Display */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-brand-100 shadow-soft space-y-8 animate-in fade-in duration-350">
            {/* Header */}
            <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 shadow-sm">
                {services[activeServiceIdx].icon}
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-brand-900">
                  {services[activeServiceIdx].title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm italic">
                  {services[activeServiceIdx].subtitle}
                </p>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem/Analysis */}
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-xs text-rose-600 uppercase tracking-widest">
                  The Everyday Challenge
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {services[activeServiceIdx].problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-xs text-sage-600 uppercase tracking-widest">
                  Our Positive Clinical Core
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {services[activeServiceIdx].approach}
                </p>
              </div>
            </div>

            {/* Target Milestones list */}
            <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <h4 className="font-display font-bold text-xs sm:text-sm text-brand-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-500" />
                <span>Primary Target Therapy Milestones</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {services[activeServiceIdx].milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-xs sm:text-sm leading-tight">
                      {milestone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Exercises */}
            <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-100/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Bookmark className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs sm:text-sm text-amber-900 uppercase tracking-wider">
                  Caregiver Home Partnership Integration
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {services[activeServiceIdx].homeExercise}
                </p>
              </div>
            </div>

            {/* Booking CTA trigger */}
            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={handleBookRedirect}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm hover:opacity-95 shadow transition-all cursor-pointer transform active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule an Assessment for this Program</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* HIPAA Core Affirmation */}
      <section className="w-full">
        <div className="bg-gradient-to-br from-slate-50 to-brand-50/30 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display font-bold text-lg text-brand-900">Do you have an active pediatric referral or IEP?</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We accept and coordinate directly with school district IEP specialists, local pediatric neurologists, and health insurance providers representing Autism spectrum, speech therapy, and clinical child behavior coverage policies.
            </p>
          </div>
          <button 
            onClick={() => setView('contact')}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-soft cursor-pointer shrink-0"
          >
            Inquire Referrals Setup
          </button>
        </div>
      </section>
    </div>
  );
}
