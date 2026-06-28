/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Therapist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string;
}

export interface Appointment {
  id: string;
  parentName: string;
  childName: string;
  childAge: number;
  therapistId: string;
  date: string;
  timeSlot: string;
  concernType: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface ProgressMetric {
  id: string;
  date: string;
  communicationScore: number; // 1-100%
  socialSkillsScore: number;  // 1-100%
  focusScore: number;         // 1-100%
  sensoryRegulationScore: number; // 1-100%
  therapistNotes: string;
}

export interface Milestone {
  id: string;
  title: string;
  category: 'Communication' | 'Social' | 'Focus' | 'Sensory';
  completed: boolean;
  dateCompleted?: string;
  description: string;
}

export interface TherapyGoal {
  id: string;
  title: string;
  targetDate: string;
  status: 'In Progress' | 'Achieved' | 'Not Started';
  description: string;
}

export interface HomeActivity {
  id: string;
  title: string;
  description: string;
  frequency: string;
  completedDays: string[]; // dates of completion e.g. ["2026-06-17", "2026-06-18"]
  category: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  diagnosis: string;
  therapistId: string;
  startDate: string;
  milestones: Milestone[];
  goals: TherapyGoal[];
  progressHistory: ProgressMetric[];
  homeActivities: HomeActivity[];
}

export interface ParentAccount {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childProfile: ChildProfile;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Autism' | 'ADHD' | 'Speech & Communication' | 'Child Behavior' | 'Sensory Integration';
  summary: string;
  content: string;
  readTime: string;
  author: string;
  publishedDate: string;
}

export interface Message {
  id: string;
  sender: 'parent' | 'therapist';
  text: string;
  timestamp: string;
}
