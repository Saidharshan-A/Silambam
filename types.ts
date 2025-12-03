import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProgramBenefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ClassSlot {
  id: string;
  label: string;
  days: string;
  time: string;
  isPopular?: boolean;
}

export interface Instructor {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string; // Optional image URL
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}