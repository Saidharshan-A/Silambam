import React from 'react';
import { NAV_LINKS } from '../constants';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-academy-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-wide">VEERA PUGAZH CHOLAN</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light">
              Preserving the authentic lineage of Silambam. <br/>
              Forging character through discipline and martial tradition.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-stone-500 hover:text-academy-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            {NAV_LINKS.map(link => (
            <a 
                key={link.label} 
                href={link.href} 
                className="text-stone-500 hover:text-white text-sm uppercase tracking-widest transition-colors"
            >
                {link.label}
            </a>
            ))}
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-700 text-xs font-mono uppercase">
            © {new Date().getFullYear()} VPC Academy. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-700 hover:text-stone-500 text-xs font-mono uppercase">Privacy</a>
            <a href="#" className="text-stone-700 hover:text-stone-500 text-xs font-mono uppercase">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;