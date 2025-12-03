import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const galleryItems = [
  { title: "Outdoor Performance", img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-2" },
  { title: "Weapon Practice", img: "https://images.unsplash.com/photo-1626245963955-46f338b55639?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-1" },
  { title: "Focus & Meditation", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-1" },
  { title: "Kids Batch Training", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-2" },
];

const Gallery: React.FC = () => {
  return (
    <SectionWrapper id="gallery" className="bg-academy-dark">
      <div className="text-center mb-12">
        <h2 className="text-academy-gold font-serif text-lg tracking-widest uppercase mb-2">Life at Academy</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white font-serif">Gallery</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto h-auto">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative h-64 md:h-80 overflow-hidden rounded-lg cursor-pointer ${item.colSpan}`}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
              <h4 className="text-white font-bold text-xl border-l-4 border-academy-gold pl-3">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;