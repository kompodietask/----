export interface MenuItem {
  name: string;
  price: string; // Using string to handle ranges like "3.20€ - 3.90€" or multiple sizes easily
  description?: string;
  image?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  hours: string;
  mapsLink: string;
}