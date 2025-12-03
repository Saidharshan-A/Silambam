import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SLOTS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import { Clock, Calendar, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Timings: React.FC = () => {
  const handleBookSlot = (slotLabel: string) => {
    const text = `${WHATSAPP_MESSAGE}. I am interested in the ${slotLabel}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <SectionWrapper id="timings" className="bg-black relative py-32">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-academy-maroon/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Training <span className="text-academy-orange">Slots</span></h2>
        <p className="text-stone-400">Choose your path. Commit to the process.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10 px-4">
        {SLOTS.map((slot, idx) => (
          <motion.div 
            key={slot.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
                slot.isPopular 
                ? 'bg-academy-maroon/20 border-academy-red/50 shadow-[0_0_30px_rgba(139,0,0,0.2)]' 
                : 'bg-stone-900/40 border-stone-800 hover:border-academy-gold/30'
            }`}
          >
            {/* Background Hover Flare */}
            <div className="absolute inset-0 bg-gradient-to-br from-academy-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {slot.isPopular && (
                <div className="absolute top-0 right-0 bg-academy-red text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-bl-xl">
                    High Demand
                </div>
            )}

            <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-serif font-bold text-white group-hover:text-academy-gold transition-colors">{slot.label}</h4>
                <div className="p-3 bg-stone-900 rounded-full border border-stone-700 group-hover:border-academy-orange transition-colors">
                    <Zap size={20} className={slot.isPopular ? "text-academy-orange" : "text-stone-500"} />
                </div>
            </div>
            
            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-stone-300">
                    <Calendar className="text-academy-gold" size={18} />
                    <span className="font-sans font-medium">{slot.days}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-300">
                    <Clock className="text-academy-gold" size={18} />
                    <span className="font-sans font-medium">{slot.time}</span>
                </div>
            </div>

            <button
                onClick={() => handleBookSlot(slot.label)}
                className={`w-full py-4 uppercase text-sm font-bold tracking-widest rounded-lg transition-all duration-300 shadow-lg ${
                    slot.isPopular
                    ? 'bg-gradient-to-r from-academy-red to-academy-orange text-white hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transform hover:-translate-y-1'
                    : 'bg-stone-800 text-white hover:bg-stone-700 border border-stone-600'
                }`}
            >
                Secure Spot
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Timings;