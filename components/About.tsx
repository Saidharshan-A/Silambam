import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax rotation based on scroll
  const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotateCounter = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yShift = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionWrapper id="about" className="bg-academy-dark overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left: Content */}
        <div>
          <h2 className="text-academy-gold font-serif text-xl tracking-widest uppercase mb-2">Our Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6 font-serif">
            Preserving the Legacy of <span className="text-academy-maroon">Warriors</span>
          </h3>
          <p className="text-stone-400 text-lg leading-relaxed mb-6">
            Silambam is more than just stick fighting; it is a 3000-year-old Tamil martial art form 
            rooted in the Sangam era. At Veera Pugazh Cholan Silambam Academy, we are dedicated to preserving this 
            ancient tradition in its purest form while adapting training methods for modern fitness needs.
          </p>
          <p className="text-stone-400 text-lg leading-relaxed mb-8">
            Our academy stands on the pillars of respect (Mariyadhai), discipline (Ozhukkam), and valor (Veeram). 
            We train students not just to fight, but to master their own minds and bodies.
          </p>

          <div className="bg-stone-900/50 p-6 border-l-4 border-academy-gold rounded-r-lg backdrop-blur-sm shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
            <h4 className="text-xl font-bold text-white mb-4">Why Choose Us?</h4>
            <ul className="space-y-3">
              {['Certified Masters with 20+ Years Experience', 'Authentic Weapon Training (Vel, Katti, Vaal)', 'Focus on Competition & Performance'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-stone-300">
                  <CheckCircle2 className="text-academy-gold flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Abstract Decoration with Parallax */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
          {/* Abstract Circle/Mandala CSS Shape - Controlled by Scroll */}
          <motion.div 
            style={{ rotate: rotateClockwise }}
            className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[2px] border-academy-maroon/20 rounded-full border-dashed shadow-[0_0_50px_rgba(127,29,29,0.1)]" 
          />
          <motion.div 
            style={{ rotate: rotateCounter }}
            className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border-[2px] border-academy-gold/10 rounded-full border-dotted" 
          />
          
          {/* Crossed Sticks Iconography using pure CSS/SVG */}
          <motion.div 
            style={{ y: yShift, rotateX: 10, rotateY: 10 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 opacity-100"
          >
             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[20px_20px_50px_rgba(0,0,0,0.8)]">
                <defs>
                    {/* Metallic Gold Gradient */}
                   <linearGradient id="stickGrad" x1="0" y1="0" x2="200" y2="200">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="40%" stopColor="#d97706" />
                      <stop offset="60%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#78350f" />
                   </linearGradient>
                   {/* Shield Metallic Gradient */}
                   <radialGradient id="shieldGrad" cx="0" cy="0" r="1">
                       <stop offset="0%" stopColor="#44403c" />
                       <stop offset="100%" stopColor="#1c1917" />
                   </radialGradient>
                </defs>
                
                {/* 3D Drop Shadows */}
                <filter id="shadow3d">
                    <feDropShadow dx="4" dy="4" stdDeviation="4" floodColor="black" floodOpacity="0.5"/>
                </filter>

                {/* Stick 1 (3D Cylinder look) */}
                <rect x="20" y="94" width="160" height="14" rx="2" transform="rotate(45 100 100)" fill="url(#stickGrad)" filter="url(#shadow3d)" />
                {/* Highlight line for cylindrical effect */}
                <rect x="25" y="96" width="150" height="2" transform="rotate(45 100 100)" fill="white" fillOpacity="0.4" />
                
                {/* Stick 2 */}
                <rect x="20" y="94" width="160" height="14" rx="2" transform="rotate(-45 100 100)" fill="url(#stickGrad)" filter="url(#shadow3d)" />
                <rect x="25" y="96" width="150" height="2" transform="rotate(-45 100 100)" fill="white" fillOpacity="0.4" />

                {/* Shield center */}
                <circle cx="100" cy="100" r="35" fill="url(#shieldGrad)" stroke="url(#stickGrad)" strokeWidth="4" filter="url(#shadow3d)" />
                <circle cx="100" cy="100" r="12" fill="#7f1d1d" stroke="#f59e0b" strokeWidth="1" />
             </svg>
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-academy-maroon/20 blur-[80px]" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;