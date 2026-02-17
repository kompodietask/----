import React, { useState } from 'react';
import { MENU_DATA } from '../data';
import { UtensilsCrossed, Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-full mb-4">
            <UtensilsCrossed className="text-brand-orange" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight uppercase">ΤΟ ΜΕΝΟΥ ΜΑΣ</h2>
        </div>

        {/* Navigation - Fixed Left Start */}
        <div className="sticky top-20 z-40 bg-gray-50/95 backdrop-blur-sm py-4 mb-12 border-b border-gray-200/50">
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth justify-start">
                <div className="flex flex-nowrap gap-3 px-2">
                    {MENU_DATA.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`whitespace-nowrap px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border shrink-0 ${
                                activeCategory === category.id
                                ? 'bg-brand-orange border-brand-orange text-white shadow-lg scale-105'
                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {MENU_DATA.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800'; 
                    }}
                />
                {item.isPopular && (
                    <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md z-10">
                        <Star size={12} fill="currentColor" /> ΔΗΜΟΦΙΛΕΣ
                    </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-brand-orange transition-colors">
                        {item.name}
                    </h3>
                    <span className="font-black text-brand-orange text-lg whitespace-nowrap bg-brand-orange/5 px-3 py-1 rounded-lg">
                        {item.price}
                    </span>
                </div>
                {item.description && <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;