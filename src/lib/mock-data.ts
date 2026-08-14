import { Category, Listing, RoomDetail } from "@/types/listing";

export const categories: Category[] = [
  { id: "beach", label: "Beach", icon: "B" },
  { id: "cabins", label: "Cabins", icon: "C" },
  { id: "icons", label: "Icons", icon: "I" },
  { id: "amazing-pools", label: "Pools", icon: "P" },
  { id: "countryside", label: "Countryside", icon: "N" },
  { id: "tiny-homes", label: "Tiny homes", icon: "T" },
  { id: "lakefront", label: "Lakefront", icon: "L" },
  { id: "surfing", label: "Surfing", icon: "S" },
];

export const listings: Listing[] = [
  {
    id: "1",
    title: "Oceanfront villa with private deck",
    location: "Santa Monica, California",
    distance: "12 miles away",
    dates: "Sep 12 - 17",
    pricePerNight: 420,
    totalPrice: 2100,
    rating: 4.96,
    reviews: 184,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    badge: "Superhost",
    isGuestFavorite: true,
  },
  {
    id: "2",
    title: "Minimal loft near art district",
    location: "Austin, Texas",
    distance: "4 miles away",
    dates: "Sep 20 - 24",
    pricePerNight: 185,
    totalPrice: 740,
    rating: 4.82,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "A-frame cabin under pine trees",
    location: "Asheville, North Carolina",
    distance: "28 miles away",
    dates: "Oct 2 - 7",
    pricePerNight: 240,
    totalPrice: 1200,
    rating: 4.9,
    reviews: 135,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    badge: "Guest favorite",
  },
  {
    id: "4",
    title: "Design-forward penthouse with skyline view",
    location: "Chicago, Illinois",
    distance: "City center",
    dates: "Oct 14 - 18",
    pricePerNight: 330,
    totalPrice: 1320,
    rating: 4.88,
    reviews: 221,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    isGuestFavorite: true,
  },
  {
    id: "5",
    title: "Sunny bungalow with plunge pool",
    location: "Tulum, Mexico",
    distance: "Beach access",
    dates: "Nov 1 - 6",
    pricePerNight: 295,
    totalPrice: 1475,
    rating: 4.93,
    reviews: 301,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "Historic townhouse in old quarter",
    location: "Lisbon, Portugal",
    distance: "Walkable center",
    dates: "Nov 10 - 15",
    pricePerNight: 210,
    totalPrice: 1050,
    rating: 4.86,
    reviews: 146,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
];

const hosts = ["Maya", "Jordan", "Iris", "Noah", "Elena", "Sami"];

const roomData: Record<string, RoomDetail> = listings.reduce((acc, listing, index) => {
  const hostName = hosts[index % hosts.length];

  acc[listing.id] = {
    ...listing,
    hostName,
    hostRole: `${listing.badge ?? "Host"} | Hosting for ${index + 2} years`,
    maxGuests: 2 + (index % 3) * 2,
    bedrooms: 1 + (index % 3),
    beds: 1 + (index % 3),
    baths: 1 + (index % 2),
    about:
      "Designed for comfort and easy city access, this stay combines thoughtful interiors with practical amenities for short or medium-length trips.",
    highlights: [
      "Fast Wi-Fi and work-friendly setup",
      "Easy self check-in",
      "Walkable access to food and transit",
    ],
    amenities: [
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Washer",
      "Dedicated workspace",
      "Essentials",
      "Smart TV",
      "Hair dryer",
    ],
    gallery: [listing.image, listing.image, listing.image, listing.image, listing.image],
  };

  return acc;
}, {} as Record<string, RoomDetail>);

export const getRoomById = (id: string): RoomDetail | undefined => roomData[id];