import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-academy-dark border-t border-stone-900">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white font-serif">Words from our Community</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-stone-900/40 p-8 rounded-xl relative border border-stone-800">
            <Quote className="text-academy-maroon/40 absolute top-4 left-4" size={40} />
            <p className="text-stone-300 italic mb-6 relative z-10 pt-4 leading-relaxed">"{t.quote}"</p>
            <div>
              <p className="text-white font-bold font-serif">{t.name}</p>
              <p className="text-stone-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;