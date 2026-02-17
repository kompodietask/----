import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-brand-orange mb-2">ΤΥΛΙΞΕ ΤΟ</h3>
          <p className="text-gray-400 text-sm">
            Αυθεντικό Σουβλάκι στην Βικτώρια.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-orange transition-colors"><Facebook /></a>
          <a href="#" className="hover:text-brand-orange transition-colors"><Instagram /></a>
        </div>

        <div className="text-center md:text-right text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ΤΥΛΙΞΕ ΤΟ. All rights reserved.</p>
          <p className="mt-1">Designed for Taste.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;