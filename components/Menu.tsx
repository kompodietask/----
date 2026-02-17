import React, { useState } from 'react';
import { MENU_DATA } from '../data';
import { UtensilsCrossed, Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-full mb-4">
            <UtensilsCrossed className="text-brand-orange" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">ΤΟ ΜΕΝΟΥ ΜΑΣ</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Απολαύστε τις μοναδικές γεύσεις μας, φτιαγμένες με μεράκι και τα καλύτερα υλικά.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="sticky top-20 z-40 bg-gray-50/95 backdrop-blur-sm py-4 mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar scroll-smooth md:justify-center px-4">
            {MENU_DATA.map((category) => (
                <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                    activeCategory === category.id
                    ? 'bg-brand-orange border-brand-orange text-white shadow-lg transform scale-105'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                }`}
                >
                {category.title}
                </button>
            ))}
            </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in min-h-[400px]">
          {MENU_DATA.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Image Area */}
              {item.image ? (
                <div className="relative h-48 overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    {item.isPopular && (
                        <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <Star size={12} fill="currentColor" />
                            ΔΗΜΟΦΙΛΕΣ
                        </div>
                    )}
                </div>
              ) : (
                <div className="h-2 bg-brand-orange/20 w-full"></div>
              )}

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-brand-orange transition-colors leading-tight">
                        {item.name}
                    </h3>
                    <span className="font-black text-brand-orange text-xl whitespace-nowrap bg-brand-orange/5 px-2 py-1 rounded-lg">
                        {item.price}
                    </span>
                </div>
                
                {item.description && (
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                )}

                {!item.image && item.isPopular && (
                    <div className="mt-auto pt-4 flex justify-start">
                         <div className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star size={12} fill="currentColor" />
                            ΔΗΜΟΦΙΛΕΣ
                        </div>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;