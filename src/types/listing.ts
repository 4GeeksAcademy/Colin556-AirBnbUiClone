export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  distance: string;
  dates: string;
  pricePerNight: number;
  totalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isGuestFavorite?: boolean;
};

export type RoomDetail = Listing & {
  hostName: string;
  hostRole: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  about: string;
  highlights: string[];
  amenities: string[];
  gallery: string[];
};