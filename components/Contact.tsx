import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ArrowRight, MapPin, Mail, Phone, Flame } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <SectionWrapper id="contact" className="bg-[#050505] pt-20 pb-0 overflow-hidden">
      <div className="border-t border-stone-900 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            
            {/* Text Content */}
            <div className="lg:col-span-5 pr-12 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <Flame className="text-academy-orange" size={20} />
                    <span className="text-academy-gold text-xs font-bold tracking-widest uppercase">Join the Academy</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-black text-white mb-8">
                    Start Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-academy-red to-academy-orange">Legacy</span>
                </h2>
                
                <div className="space-y-8 bg-stone-900/30 p-8 rounded-xl border border-stone-800 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-academy-gold mt-1" size={24} />
                        <div>
                            <h4 className="text-sm text-stone-400 uppercase tracking-widest mb-1">Dojo Location</h4>
                            <p className="text-white text-lg font-medium leading-relaxed">
                                12/4, Temple Street, Mylapore,<br/> Chennai, Tamil Nadu
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="text-academy-gold mt-1" size={24} />
                        <div>
                            <h4 className="text-sm text-stone-400 uppercase tracking-widest mb-1">Call Us</h4>
                            <a href="tel:+919999999999" className="block text-white hover:text-academy-orange transition-colors text-lg font-bold">+91 99999 99999</a>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleWhatsApp}
                    className="mt-10 w-full py-5 bg-academy-gold text-black font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                    <span className="text-sm">Initiate Training</span>
                    <ArrowRight size={18} />
                </button>
            </div>

            {/* Tactical Map Visual */}
            <div className="lg:col-span-7 relative h-[600px] bg-black overflow-hidden lg:rounded-l-3xl border-l border-t border-stone-800">
                {/* Heatmap/Radar Background */}
                <div className="absolute inset-0 bg-[#080202]">
                     {/* Radar Rings */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-academy-red/20 rounded-full opacity-50"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-academy-red/30 rounded-full opacity-60"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-academy-red/40 rounded-full opacity-70"></div>
                     
                     {/* Scanning Line */}
                     <div className="absolute top-1/2 left-1/2 w-[300px] h-[2px] bg-gradient-to-r from-academy-red to-transparent origin-left animate-[spin_4s_linear_infinite]"></div>
                </div>

                {/* Location Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <div className="w-6 h-6 bg-academy-orange rounded-full z-10 relative shadow-[0_0_40px_#FF4500] border-2 border-white"></div>
                        <div className="absolute inset-0 bg-academy-orange/50 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 bg-academy-orange/30 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
                    </div>
                    {/* Label */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black/80 border border-academy-orange/50 px-4 py-1 rounded text-academy-orange text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                        Target Location
                    </div>
                </div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;