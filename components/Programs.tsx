import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BENEFITS } from '../constants';
import { ProgramBenefit } from '../types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// 3D Tilt Card Component
const ProgramCard: React.FC<{ benefit: ProgramBenefit; index: number }> = ({ benefit, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-full perspective-1000"
    >
      <div className="relative h-full bg-gradient-to-br from-stone-900 to-black border border-white/5 p-8 rounded-xl shadow-2xl group overflow-hidden transition-all duration-300 hover:border-academy-orange/50 hover:shadow-[0_0_40px_rgba(255,69,0,0.2)]">
        
        {/* Magma Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-academy-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-z-10">
            <div className="w-16 h-16 mb-6 rounded-full bg-stone-800/50 flex items-center justify-center group-hover:bg-academy-orange/20 transition-colors border border-white/5 group-hover:border-academy-orange/50">
                <benefit.icon className="text-stone-400 group-hover:text-academy-orange transition-colors" size={32} />
            </div>

            <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-academy-gold transition-colors">{benefit.title}</h4>
            <p className="text-stone-400 font-light leading-relaxed group-hover:text-stone-300">{benefit.description}</p>
        </div>

        {/* Number Watermark */}
        <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 group-hover:text-academy-orange/10 transition-colors pointer-events-none select-none">
            {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

const Programs: React.FC = () => {
  return (
    <SectionWrapper id="programs" className="bg-[#050505] relative overflow-hidden">
      {/* Background Lava Lamp effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-academy-maroon rounded-full blur-[150px] animate-pulse" />
         <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-academy-orange rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center mb-20">
        <h2 className="text-academy-orange font-bold tracking-widest uppercase mb-4 text-glow">Master the Art</h2>
        <h3 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-academy-gold to-academy-orange">Curriculum</span></h3>
        <p className="max-w-2xl mx-auto text-stone-400 text-lg">
            Forge your body and mind in the fires of discipline. A complete combat system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {BENEFITS.map((benefit, index) => (
          <ProgramCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Programs;