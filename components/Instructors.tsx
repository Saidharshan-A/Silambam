import React from 'react';
import SectionWrapper from './SectionWrapper';
import { INSTRUCTORS } from '../constants';
import { motion } from 'framer-motion';

const Instructors: React.FC = () => {
  return (
    <SectionWrapper id="instructors" className="bg-academy-dark py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {INSTRUCTORS.map((instructor, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* 3D Portal Image Section */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center">
               {/* Rotating Ring 1 */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-academy-maroon/30 rounded-full border-dashed"
               />
               {/* Rotating Ring 2 (Counter) */}
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-academy-gold/20 rounded-full"
               >
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-academy-gold rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#FFD700]" />
               </motion.div>
               
               {/* Main Image Container */}
               <div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[450px] bg-stone-900 rounded-lg overflow-hidden border-2 border-academy-orange/30 shadow-[0_0_50px_rgba(255,69,0,0.2)]">
                   {instructor.image ? (
                        <img 
                            src={instructor.image} 
                            alt={instructor.name} 
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                        />
                   ) : (
                       <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-800 to-black">
                           <span className="text-9xl font-serif font-black text-stone-700">{instructor.initials}</span>
                       </div>
                   )}
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   
                   {/* Name Overlay */}
                   <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                        <h3 className="text-2xl font-serif font-bold text-white text-glow">{instructor.name}</h3>
                        <p className="text-academy-gold text-sm tracking-widest uppercase mt-1">Chief Master</p>
                   </div>
               </div>
            </div>
            
            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-center lg:text-left"
            >
                <div className="inline-block px-4 py-1 border border-academy-gold/30 rounded-full bg-academy-gold/5 mb-6">
                    <span className="text-academy-gold text-xs font-bold tracking-widest uppercase">Meet the Legend</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-academy-orange to-academy-red">Warrior</span> Spirit.<br/>
                    Modern Mind.
                </h2>
                
                <p className="text-stone-300 text-lg leading-relaxed font-light mb-8 max-w-xl mx-auto lg:mx-0">
                    {instructor.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <div className="bg-stone-900/50 p-6 rounded-lg border border-white/5 text-center min-w-[150px]">
                        <div className="text-3xl font-black text-white mb-1">20+</div>
                        <div className="text-xs text-academy-orange uppercase tracking-widest">Years Exp.</div>
                    </div>
                    <div className="bg-stone-900/50 p-6 rounded-lg border border-white/5 text-center min-w-[150px]">
                        <div className="text-3xl font-black text-white mb-1">500+</div>
                        <div className="text-xs text-academy-orange uppercase tracking-widest">Disciples</div>
                    </div>
                </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Instructors;