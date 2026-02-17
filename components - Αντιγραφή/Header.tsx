import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-white p-2 rounded-lg font-black text-xl tracking-tighter transform -rotate-3">
                ΤΥΛΙΞΕ ΤΟ
            </div>
            <span className="hidden md:block text-gray-700 font-bold text-lg">ΒΙΚΤΩΡΙΑ</span>
        </div>

        {/* Call CTA */}
        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
          className="flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
        >
          <Phone size={18} />
          <span className="font-bold">{BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;