import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
            {/* Προσθήκη του Logo */}
            <img 
              src="/logo.jpg" 
              alt="ΤΥΛΙΞΕ ΤΟ Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange shadow-sm"
            />
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                <div className="bg-brand-orange text-white px-2 py-1 rounded-lg font-black text-xl tracking-tighter transform -rotate-2">
                    ΤΥΛΙΞΕ ΤΟ
                </div>
                <span className="hidden md:block text-gray-700 font-bold text-lg uppercase tracking-widest">
                  ΒΙΚΤΩΡΙΑ
                </span>
            </div>
        </div>

        {/* Call CTA */}
        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
          className="flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
        >
          <Phone size={18} />
          <span className="font-bold hidden sm:inline">{BUSINESS_INFO.phone}</span>
          <span className="font-bold sm:hidden">ΚΛΗΣΗ</span>
        </a>
      </div>
    </header>
  );
};

export default Header;