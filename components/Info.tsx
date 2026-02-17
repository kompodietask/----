import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const Info: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-brand-dark">
          ΠΟΥ ΘΑ ΜΑΣ <span className="text-brand-orange">ΒΡΕΙΤΕ</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-brand-dark">Διεύθυνση</h3>
                <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                <p className="text-sm text-brand-orange font-medium mt-1">
                  Στην καρδιά της Πλατείας Βικτωρίας
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-brand-dark">Τηλέφωνο</h3>
                <p className="text-gray-600 font-medium">{BUSINESS_INFO.phone}</p>
                <p className="text-sm text-gray-400">Δεχόμαστε τηλεφωνικές παραγγελίες</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-brand-dark">Ωράριο Λειτουργίας</h3>
                <p className="text-gray-600">Καθημερινά: {BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5714483758654!2d23.7282534!3d37.9918237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3793f77363%3A0x6a0f7e4c27a92965!2zzqDOu86xz4TOtc6vzrEgzpLOuc66z4TPic-Bzq_Osc-CIDYsIM6RzrjOrs69zrEgMTA0IDM0!5e0!3m2!1sel!2sgr!4v1710000000000!5m2!1sel!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Τοποθεσία ΤΥΛΙΞΕ ΤΟ"
              className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;