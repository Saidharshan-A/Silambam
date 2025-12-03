import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Existing Parallax transforms
  const yBg = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const yText = useTransform(scrollY, [0, 500], ["0%", "100%"]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 1000], [1, 1.2]);
  
  // Existing layer
  const yLayer1 = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  // NEW: Abstract Mandala Layer (Mid-ground parallax)
  // This layer moves slightly slower than the background but rotates, creating a complex depth effect
  const yMandala = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  const rotateMandala = useTransform(scrollY, [0, 1000], [0, 60]);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  const scrollToTimings = () => {
    document.getElementById('timings')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate Embers
  const embers = Array.from({ length: 25 }).map((_, i) => (
    <div 
        key={i}
        className="ember"
        style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            background: i % 2 === 0 ? '#FFD700' : '#FF4500' // Gold and Red embers
        }}
    />
  ));

  return (
    <div id="home" ref={ref} className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center justify-center bg-black">
      
      {/* Background Gradient Layer (Classy & Catchy Theme) */}
      <motion.div
        style={{ y: yBg, scale: scaleImage }}
        className="absolute inset-0 z-0"
      >
        {/* Deep Dark Base */}
        <div className="absolute inset-0 bg-[#050101]" />

        {/* Central Royal Glow (Maroon/Red) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(80,0,0,0.3),transparent_70%)]" />

        {/* Bottom Magma Rising Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#3a0000] via-[#1a0505] to-transparent opacity-90" />

        {/* Top Shadow for Text Contrast */}
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black via-black/80 to-transparent" />
        
        {/* Subtle Stardust/Noise Texture for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" /> 
      </motion.div>

      {/* NEW: Abstract Rotating Mandala Layer */}
      <motion.div 
        style={{ y: yMandala, rotate: rotateMandala }}
        className="absolute inset-0 z-5 flex items-center justify-center opacity-20 pointer-events-none"
      >
         {/* Large geometric ring */}
         <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] border-[40px] border-academy-maroon/20 rounded-full border-dashed" />
         {/* Inner geometric ring */}
         <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[2px] border-academy-gold/10 rounded-full" />
      </motion.div>

      {/* Floating Embers Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
        {embers}
      </div>

      {/* Decorative Parallax Elements (Smoke/Haze) */}
      <motion.div style={{ y: yLayer1 }} className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_60%)]" />

      {/* Content Layer */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-10 px-8 py-3 rounded-full border border-academy-gold/30 bg-black/40 backdrop-blur-md shadow-[0_0_25px_rgba(218,165,32,0.15)] group hover:border-academy-gold/60 transition-colors"
          >
            <div className="flex items-center gap-3">
                <Flame size={16} className="text-academy-gold animate-pulse" fill="#FFD700" />
                <span className="text-stone-200 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                Admissions Open
                </span>
                <Flame size={16} className="text-academy-gold animate-pulse" fill="#FFD700" />
            </div>
          </motion.div>

          {/* Main Title */}
          <h1 className="flex flex-col items-center mb-8">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-academy-gold font-bold text-sm md:text-xl tracking-[0.4em] uppercase mb-6 text-glow drop-shadow-lg"
            >
              Veera Pugazh Cholan
            </motion.span>
            <motion.span 
              initial={{ scale: 1.1, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5E1] via-[#E5E5E5] to-[#999999] drop-shadow-[0_10px_50px_rgba(0,0,0,0.9)]"
            >
              SILAMBAM
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-stone-300 text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Ignite your inner warrior. Master the ancient art of combat 
            through <span className="text-academy-orange font-medium text-glow">discipline</span>, <span className="text-academy-gold font-medium text-glow">strength</span>, and <span className="text-academy-red font-medium text-glow">tradition</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="flex flex-col md:flex-row gap-6"
          >
            <button
              onClick={scrollToTimings}
              className="relative overflow-hidden group min-w-[200px] h-14 flex items-center justify-center border border-white/20 hover:border-academy-gold/50 transition-colors uppercase text-xs tracking-[0.2em] font-bold text-white bg-white/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-academy-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">View Schedule</span>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="relative min-w-[200px] h-14 flex items-center justify-center bg-gradient-to-r from-[#700000] to-[#900000] text-white uppercase text-xs tracking-[0.2em] font-bold gap-3 shadow-[0_0_30px_rgba(100,0,0,0.6)] hover:shadow-[0_0_50px_rgba(255,69,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-red-900/50"
            >
              <MessageCircle size={18} />
              Book Class
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Hero;