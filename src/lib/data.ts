export type PropertyType = "apartment" | "house" | "studio" | "duplex" | "self-contain";
export type City = "Lagos" | "Abuja" | "Port Harcourt" | "Ibadan" | "Kano";

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  city: City;
  area: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size?: number;
  images: string[];
  amenities: string[];
  landlordName: string;
  landlordVerified: boolean;
  available: boolean;
  featured: boolean;
  postedDate: string;
  lat: number;
  lng: number;
}

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Modern 3-Bedroom Apartment in Lekki Phase 1",
    description:
      "Spacious and fully finished 3-bedroom apartment in the heart of Lekki. Features contemporary finishes, 24/7 security, and access to swimming pool. Perfect for families and professionals.",
    type: "apartment",
    city: "Lagos",
    area: "Lekki Phase 1",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 2,
    size: 180,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    amenities: ["Swimming Pool", "24/7 Security", "Generator", "Parking", "CCTV", "Water Treatment"],
    landlordName: "Adebayo Okafor",
    landlordVerified: true,
    available: true,
    featured: true,
    postedDate: "2025-01-10",
    lat: 6.4281,
    lng: 3.4219,
  },
  {
    id: "2",
    title: "Self-Contain Studio in Wuse 2",
    description:
      "Clean and well-maintained self-contain studio apartment in Wuse 2. Close to major banks, restaurants, and Transcorp Hilton. Ideal for young professionals.",
    type: "self-contain",
    city: "Abuja",
    area: "Wuse 2",
    price: 800000,
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    ],
    amenities: ["Generator", "Water Supply", "Security", "Parking"],
    landlordName: "Chidinma Eze",
    landlordVerified: true,
    available: true,
    featured: true,
    postedDate: "2025-01-08",
    lat: 9.0579,
    lng: 7.4951,
  },
  {
    id: "3",
    title: "4-Bedroom Duplex in GRA Port Harcourt",
    description:
      "Luxurious 4-bedroom duplex in the prestigious GRA area. Features en-suite rooms, a large kitchen, and a beautiful garden. Perfect for executive living.",
    type: "duplex",
    city: "Port Harcourt",
    area: "GRA Phase 2",
    price: 5000000,
    bedrooms: 4,
    bathrooms: 4,
    size: 350,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    ],
    amenities: ["Garden", "Generator", "BQ", "Swimming Pool", "Security", "Parking", "CCTV"],
    landlordName: "Emmanuel Peterside",
    landlordVerified: true,
    available: true,
    featured: true,
    postedDate: "2025-01-05",
    lat: 4.8156,
    lng: 7.0498,
  },
  {
    id: "4",
    title: "2-Bedroom Flat in Yaba",
    description:
      "Affordable and spacious 2-bedroom flat in vibrant Yaba. Walking distance to UNILAG, close to tech hubs, restaurants, and public transport.",
    type: "apartment",
    city: "Lagos",
    area: "Yaba",
    price: 1200000,
    bedrooms: 2,
    bathrooms: 1,
    size: 90,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    ],
    amenities: ["Generator", "Water Supply", "Security"],
    landlordName: "Funmilayo Adeyemi",
    landlordVerified: false,
    available: true,
    featured: false,
    postedDate: "2025-01-12",
    lat: 6.5158,
    lng: 3.3756,
  },
  {
    id: "5",
    title: "1-Bedroom Apartment in Maitama",
    description:
      "Elegant 1-bedroom apartment in the serene Maitama district. Premium finishes, constant power supply, and a quiet environment.",
    type: "apartment",
    city: "Abuja",
    area: "Maitama",
    price: 1800000,
    bedrooms: 1,
    bathrooms: 1,
    size: 65,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    ],
    amenities: ["24/7 Power", "Water Supply", "Security", "Parking", "Air Conditioning"],
    landlordName: "Ibrahim Musa",
    landlordVerified: true,
    available: true,
    featured: false,
    postedDate: "2025-01-14",
    lat: 9.0764,
    lng: 7.4892,
  },
  {
    id: "6",
    title: "3-Bedroom House in Ikeja GRA",
    description:
      "Well-maintained 3-bedroom bungalow in quiet Ikeja GRA. Gated estate with 24/7 security, large compound with parking for 3 cars.",
    type: "house",
    city: "Lagos",
    area: "Ikeja GRA",
    price: 4200000,
    bedrooms: 3,
    bathrooms: 3,
    size: 220,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
    amenities: ["Compound", "Security", "Generator", "Water Supply", "Parking x3", "Garden"],
    landlordName: "Olumide Fashola",
    landlordVerified: true,
    available: true,
    featured: true,
    postedDate: "2025-01-03",
    lat: 6.5973,
    lng: 3.3515,
  },
];

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString("en-NG")}`;
}

export const STATS = [
  { label: "Market Size", value: "$20B+", sub: "Annual rental market" },
  { label: "Urban Renters", value: "70%", sub: "Of Nigerians rent" },
  { label: "Cost Savings", value: "40%", sub: "No agent fees" },
  { label: "Market Leader", value: "0", sub: "No dominant platform" },
];

export const CITIES: City[] = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano"];
