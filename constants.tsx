import { Shield, Users, Trophy, Zap, Heart, Sword } from 'lucide-react';
import { NavItem, ProgramBenefit, ClassSlot, Instructor, Testimonial } from './types';

export const WHATSAPP_NUMBER = "919999999999";
export const WHATSAPP_MESSAGE = "I am interested in Silambam classes at Veera Pugazh Cholan Silambam Academy";

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  // About link removed
  { label: 'Programs', href: '#programs' },
  { label: 'Timings', href: '#timings' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Contact', href: '#contact' },
];

export const BENEFITS: ProgramBenefit[] = [
  {
    title: "Traditional Heritage",
    description: "Learn the authentic techniques passed down through generations of Tamil martial arts masters.",
    icon: Shield
  },
  {
    title: "Expert Guidance",
    description: "Train under seasoned masters who focus on form, precision, and the philosophy of combat.",
    icon: Users
  },
  {
    title: "Structured Curriculum",
    description: "From beginner footwork (Chuvadu) to advanced weapon mastery, our syllabus is methodically designed.",
    icon: Trophy
  },
  {
    title: "Agility & Fitness",
    description: "Develop full-body strength, flexibility, and reflexes through rigorous physical conditioning.",
    icon: Zap
  },
  {
    title: "Self-Defense",
    description: "Gain the confidence to protect yourself and others with practical combat applications.",
    icon: Sword
  },
  {
    title: "Holistic Growth",
    description: "Cultivate mental discipline, respect, and focus alongside physical prowess.",
    icon: Heart
  }
];

export const SLOTS: ClassSlot[] = [
  {
    id: 'weekday',
    label: 'Weekday Batch',
    days: 'Monday to Friday',
    time: '5:30 PM - 7:00 PM',
    isPopular: false
  },
  {
    id: 'weekend',
    label: 'Weekend Batch',
    days: 'Saturday & Sunday',
    time: '4:00 PM - 6:30 PM',
    isPopular: true
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Master Vasanth Kumar",
    role: "Founder & Chief Instructor",
    description: "A visionary martial artist dedicated to preserving the purity of Silambam. With deep expertise in 'Alankara' and combat techniques, Master Vasanth Kumar instills discipline, bravery, and cultural pride in every student.",
    initials: "VK"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    role: "Parent",
    quote: "My son has become more disciplined and focused since joining. The masters treat every student like family."
  },
  {
    name: "Sneha P.",
    role: "Student",
    quote: "Silambam isn't just an art; it's a way of life here. The physical fitness I've gained is incredible."
  },
  {
    name: "Vijay S.",
    role: "Student",
    quote: "The weekend batches are perfect for working professionals like me to reconnect with our culture."
  }
];