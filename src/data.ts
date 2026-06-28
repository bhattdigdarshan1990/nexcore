/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Therapist, ResourceArticle, ParentAccount, Appointment, Message } from './types';

export const THERAPISTS: Therapist[] = [
  {
    id: 'therapist-1',
    name: 'Dr. Sarah Jenkins, PhD, BCBA-D',
    role: 'Clinical Director & Neurodevelopmental Specialist',
    education: 'PhD in Clinical Child Psychology - Vanderbilt University',
    bio: 'Dr. Jenkins has over 15 years of experience designing individualized behavioral and learning plans for children on the Autism Spectrum. She is passionate about family-centered therapy interventions.',
    specialties: ['Autism Spectrum Disorder', 'Behavioral Coaching', 'PEERS® Social Skills Certified', 'Early Intervention'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'therapist-2',
    name: 'Marcus Vance, MS, CCC-SLP',
    role: 'Pediatric Speech-Language Pathologist',
    education: 'MS in Speech-Language Pathology - Boston University',
    bio: 'Marcus is an expert in augmentative and alternative communication (AAC) and non-verbal speech development. He specializes in helping non-communicative children unlock expressive play and social language.',
    specialties: ['Non-Verbal Communication', 'AAC Systems', 'Articulatory Dyspraxia', 'Social Communication'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'therapist-3',
    name: 'Eliana Rostova, OTR/L',
    role: 'Lead Pediatric Occupational Therapist',
    education: 'MS in Occupational Therapy - University of Washington',
    bio: 'Eliana specializes in sensory-motor delays and ADHD focus coaching. She designs calming sensory gym environments that help children master motor planning and emotional regulation.',
    specialties: ['ADHD Focus & Regulation', 'Sensory Processing Disorder', 'Fine & Gross Motor Skills', 'Self-Care Independence'],
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'therapist-4',
    name: 'Dr. Christopher Todd, PsyD',
    role: 'Child & Family Behavioral Psychologist',
    education: 'PsyD in Clinical Psychology - Stanford University',
    bio: 'Dr. Todd works with children exhibiting oppositional behavior, emotional outbursts, and executive dysfunction. His approach blends cognitive-behavioral techniques with positive supportive therapy.',
    specialties: ['Childhood Behavior Issues', 'ADHD Executive Functioning', 'Alternative Play Therapy', 'Parent Positive Coaching'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const ARTICLES: ResourceArticle[] = [
  {
    id: 'article-1',
    title: 'De-escalating Sensory Meltdowns: A Guideline for Parents',
    category: 'Sensory Integration',
    summary: 'Understand the clear distinction between a sensory meltdown and a tantrum, and learn 5 soothing strategies to restore calm in your home.',
    content: 'Sensory overload is experienced by many children on the autism spectrum or with ADHD. Unlike a tantrum, which is goal-oriented behavior, a meltdown is an involuntary response to sensory inundation. To de-escalate:\n\n1. Seek Low Stimulation: Move instantly to a quiet, dimly lit, softly textured corner.\n2. Deep Pressure input: Provide weighted blankets, firm but gentle hugs, or weighted lap pads.\n3. Keep Voice Soft and Minimal: Speak in low, calming, rhythmic tones. Do not lecture or ask complex reasoning statements.\n4. Reassure Safety: Reiterate phrases like "You are safe," or "I am right here with you."\n5. Implement Recovery Quiet Time: Allow ample space for the nervous system to recalibrate before returning to active tasks.',
    readTime: '6 min read',
    author: 'Eliana Rostova, OTR/L',
    publishedDate: 'June 10, 2026'
  },
  {
    id: 'article-2',
    title: 'Supporting Your Non-Verbal Child at Home Using AAC',
    category: 'Speech & Communication',
    summary: 'Augmentative & Alternative Communication (AAC) goes beyond boards. Discover how to incorporate visual cues and PECS into daily morning, meals, and play routines.',
    content: 'For a child who is non-communicative, traditional speaking can feel overwhelming. AAC implements visual strategies to give your child an expressive voice. Here is how to construct support:\n\n- Modeling Is Essential: Point to icons or visual boards as you speak yourself. "Would you like [Milk]?" while touching the milk graphic.\n- Avoid Testing: Do not demand "Show me the cookie icon!" Instead, prompt interactively by rewarding selection with immediate high-value feedback.\n- Establish Consistent Access: Place visual cue cards near key targets (the refrigerator, toy shelf, bathroom mirror, front door).\n- Focus on Multi-Modal Communication: Accept gestures, eye gaze, vocal sounds, and physical leads as valid expressions while pairing them with AAC icons to build verbal connections.',
    readTime: '8 min read',
    author: 'Marcus Vance, MS, CCC-SLP',
    publishedDate: 'May 28, 2026'
  },
  {
    id: 'article-3',
    title: 'Managing ADHD and Executive Functioning in School Prep',
    category: 'ADHD',
    summary: 'Morning routines can be hectic for children with executive dysfunction. Use visual checklist trackers and positive interval rewards to guide success.',
    content: 'Children with ADHD struggle with sequential execution. Breaking mornings down into physical cues can alleviate stress for both child and parents. Use these visual and emotional techniques:\n\n1. Vertical Checklists with Icons: Create a physical board where your child can flip a card from red to green for items like: brush teeth, dress, breakfast, backpack pack.\n2. Audio Anchors: Use friendly musical tracks as timers (e.g. "We need to finish getting dressed by the end of this song!").\n3. Front-load Breakfast Protein: Support neural stability by offering higher protein foods before starting academic tasks.\n4. Micro-rewards: Celebrate small wins (e.g., getting socks on independently) using points trackers or a positive visual token.',
    readTime: '5 min read',
    author: 'Dr. Christopher Todd, PsyD',
    publishedDate: 'June 4, 2026'
  },
  {
    id: 'article-4',
    title: 'Positive Reinforcement Cycles in Childhood Behavioral Interventions',
    category: 'Child Behavior',
    summary: 'Learn how to transition away from punitive corrections and establish lasting behavioral habits using positive reinforcement ratio metrics.',
    content: `Behavior is a form of communication. When a child behaves disruptively, they are attempting to signal an unmet sensory, communicative, or developmental need. To establish healthy boundaries:\n\n- The "4:1 Reflection Principle": Aim to provide 4 authentic positive statements for every 1 corrective instruction.\n- Be Specific in Praise: Instead of saying "Good job," say "I love how calmly you sat at the table and waited for breakfast!"\n- Prompt Alternative Behaviors: Tell children what they CAN do, rather than what they shouldn't. (For example, instead of saying "Stop running!", state "Please use soft walking steps inside the room.")`,
    readTime: '7 min read',
    author: 'Dr. Sarah Jenkins, PhD, BCBA-D',
    publishedDate: 'May 15, 2026'
  }
];

export const INITIAL_PARENT_ACCOUNT: ParentAccount = {
  id: 'parent-1',
  parentName: 'Eleanor Vance',
  email: 'parent@example.com',
  phone: '555-019-2834',
  childProfile: {
    id: 'child-1',
    name: 'Leo',
    age: 6,
    diagnosis: 'Autism Spectrum Disorder (Level 1) & ADHD (Combined Presentation)',
    therapistId: 'therapist-1',
    startDate: 'March 12, 2026',
    milestones: [
      {
        id: 'milestone-1',
        title: 'Initiate 3-word functional requests verbally',
        category: 'Communication',
        completed: true,
        dateCompleted: '2026-05-14',
        description: 'Successfully requests toys or foods using "I want..." consistently without physical prompts.'
      },
      {
        id: 'milestone-2',
        title: 'Independent transition between active tasks',
        category: 'Sensory',
        completed: true,
        dateCompleted: '2026-06-02',
        description: 'Transitions from dynamic play therapy gym to sitting work using visual timers within 2 minutes without meltdowns.'
      },
      {
        id: 'milestone-3',
        title: 'Maintain constructive peer play for 5 minutes',
        category: 'Social',
        completed: false,
        description: 'Engaging in reciprocal play (such as building blocks together or passing a ball) with a peer, checking/sharing gaze.'
      },
      {
        id: 'milestone-4',
        title: 'Sustained focus on quiet task for 8 minutes',
        category: 'Focus',
        completed: false,
        description: 'Focusing on matching puzzles or cognitive sorting toys independently with guidance of a 4-token system.'
      }
    ],
    goals: [
      {
        id: 'goal-1',
        title: 'Express frustration verbally rather than crying',
        targetDate: 'July 15, 2026',
        status: 'In Progress',
        description: 'Leo is practicing tapping the "I need space" or "I am frustrated" cue card when sensory overload begins.'
      },
      {
        id: 'goal-2',
        title: 'Engaging in functional greetings with clinic staff',
        targetDate: 'June 30, 2026',
        status: 'In Progress',
        description: 'Slight eye contact and hand-waving or verbal "Hi" response when entering and exiting therapy cabinets.'
      },
      {
        id: 'goal-3',
        title: 'Complete a vertical 4-step sequence on home chart',
        targetDate: 'August 1, 2026',
        status: 'Not Started',
        description: 'Establish a bedtime routine tracker at home with complete parent visual cueing aid support.'
      }
    ],
    progressHistory: [
      {
        id: 'metric-1',
        date: 'Week of May 4',
        communicationScore: 52,
        socialSkillsScore: 35,
        focusScore: 40,
        sensoryRegulationScore: 45,
        therapistNotes: 'Leo has had a solid productive week. Explored tactile play heavily. Receptive vocabulary remains high but expressive language is slightly guarded.'
      },
      {
        id: 'metric-2',
        date: 'Week of May 18',
        communicationScore: 58,
        socialSkillsScore: 38,
        focusScore: 45,
        sensoryRegulationScore: 48,
        therapistNotes: 'Increased verbal expressions during sand play therapy. Responding nicely to standard visual boundaries and transition triggers.'
      },
      {
        id: 'metric-3',
        date: 'Week of June 1',
        communicationScore: 65,
        socialSkillsScore: 42,
        focusScore: 48,
        sensoryRegulationScore: 55,
        therapistNotes: 'First milestone accomplished! Successfully transitioned with high-priority interest target changes. Sensory tolerance limits showed strong resilience.'
      },
      {
        id: 'metric-4',
        date: 'Week of June 15',
        communicationScore: 72,
        socialSkillsScore: 48,
        focusScore: 54,
        sensoryRegulationScore: 62,
        therapistNotes: 'Superb results modeling with PECS boards. Speech consistency improving. Showed active interest during group interaction in clinic garden.'
      }
    ],
    homeActivities: [
      {
        id: 'home-act-1',
        title: 'Tactile Sand Writing (Tracing)',
        category: 'Sensory',
        description: 'Trace letters or daily shapes in soft dry sand to build sensory and fine motor coordination.',
        frequency: '3 times a week (10 minutes)',
        completedDays: []
      },
      {
        id: 'home-act-2',
        title: 'Visual Bedtime Routine Mapping',
        category: 'Focus',
        description: 'Complete the brush-pj-book bedtime chart interactively. Offer high-fives at final checkmark completion.',
        frequency: 'Daily (Every night)',
        completedDays: []
      },
      {
        id: 'home-act-3',
        title: 'Social Card Sharing Roll Play',
        category: 'Social',
        description: 'Pass soft target cards back and forth, matching facial expressions represented on them.',
        frequency: '2 times a week',
        completedDays: []
      }
    ]
  }
};

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    parentName: 'Eleanor Vance',
    childName: 'Leo',
    childAge: 6,
    therapistId: 'therapist-1',
    date: '2026-06-22',
    timeSlot: '10:00 AM - 11:00 AM',
    concernType: 'Autism Spectrum Support',
    status: 'confirmed',
    notes: 'Regular clinical behavioral analysis program'
  },
  {
    id: 'apt-2',
    parentName: 'Eleanor Vance',
    childName: 'Leo',
    childAge: 6,
    therapistId: 'therapist-3',
    date: '2026-06-25',
    timeSlot: '02:30 PM - 03:30 PM',
    concernType: 'Sensory Processing Training',
    status: 'confirmed',
    notes: 'Weekly motor planning and muscle control exploration'
  }
];

export const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-1',
    sender: 'therapist',
    text: "Hi Eleanor, Leo has done wonderfully in our play-based session today. He sat for the visual schedule beautifully. I have assigned a simple sand writing homework in the profile board. Give it a try!",
    timestamp: '2026-06-15 04:15 PM'
  },
  {
    id: 'msg-2',
    sender: 'parent',
    text: "Thanks Marcus, we tried the tactile sand tracing this evening and he really enjoyed the feeling! He was giggling.",
    timestamp: '2026-06-15 07:44 PM'
  },
  {
    id: 'msg-3',
    sender: 'therapist',
    text: "That is marvelous news! Pairing speech sounds along with the tracing will accelerate his letter-to-sound recognition. Keep up the amazing work!",
    timestamp: '2026-06-16 09:30 AM'
  }
];
