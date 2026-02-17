import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center no-repeat"
        style={{ 
          // ΔΙΟΡΘΩΣΗ: Αλλαγή από .jpeg σε .jpg και προσθήκη /
          backgroundImage: 'url("/bg.jpg")', 
          opacity: 0.6
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-1 shadow-lg">
          <Star size={14} fill="currentColor" />
          {BUSINESS_INFO.rating} ({BUSINESS_INFO.reviewCount} Κριτικές)
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-xl">
          <span className="text-orange-500">ΤΥΛΙΞΕ</span> ΤΟ
        </h1>
        
        <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl drop-shadow-md">
          Το καλύτερο σουβλάκι στην Πλατεία Βικτωρίας. <br/>
          Αυθεντικές γεύσεις, χειροποίητες σως και φρέσκα υλικά.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#menu" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 text-center"
          >
            Δείτε το Μενού
          </a>
          <div 
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            <Clock size={20} />
            Ανοιχτά έως 12:00 π.μ.
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-white/80 text-sm md:text-base">
            <MapPin size={16} />
            {BUSINESS_INFO.address}
        </div>
      </div>
    </div>
  );
};

export default Hero;