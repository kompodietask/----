import React from 'react';
import { Clock, MapPin, Phone, CheckCircle, Wifi, Bike, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const Info: React.FC = () => {
  return (
    <section id="info" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-800 mb-6">ΠΛΗΡΟΦΟΡΙΕΣ</h2>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Ωράριο Λειτουργίας</h3>
                    <p className="text-gray-600 mt-1">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Διεύθυνση</h3>
                    <p className="text-gray-600 mt-1">{BUSINESS_INFO.address}</p>
                    <p className="text-sm text-gray-400 mt-1">40λ. περπάτημα / 27λ. με συγκοινωνία από κέντρο</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Τηλέφωνο</h3>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-brand-orange font-bold text-lg mt-1 block hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Services Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Υπηρεσίες</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-green-500" /> Θέσεις έξω
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Wifi size={16} className="text-green-500" /> Wi-Fi
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Utensils size={16} className="text-green-500" /> Πακέτο
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Bike size={16} className="text-green-500" /> Παράδοση
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-green-500" /> Χορτοφαγικές Επιλογές
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div id="map" className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg relative bg-gray-200">
             {/* Placeholder Map - In production use Google Maps Embed API */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.591032890656!2d23.7299066!3d37.9942704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a2cd15b88523%3A0x627318721c51d6c3!2zzqDOuy4gzpLOuc66z4TPic-Bzq_Osc-CIDYsIM6RzrjOrs69zrEgMTA0IDM0!5e0!3m2!1sel!2sgr!4v1709900000000!5m2!1sel!2sgr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Victoria Square"
                className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;