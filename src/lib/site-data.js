// Hotel Marjane Agadir — static content. Everything lives in the project files.
// Replace the contact details and prices below with the hotel's real information.

export const contact = {
  phone: "+212 528 84 00 00",
  phoneHref: "tel:+212528840000",
  whatsappNumber: "212661234567",
  email: "reservation@hotelmarjane-agadir.ma",
  street: "Boulevard du 20 Août",
  city: "Agadir 80000, Maroc",
  mapQuery: "Hotel Marjane Agadir",
  checkIn: "14:00",
  checkOut: "12:00",
};

export function whatsappLink(message) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const CDN = "https://media.base44.com/images/public/6af6fd02760f3e5992735916/";

export const images = {
  suite: `${CDN}f8cd7d3b6_generated_9a67c9a2.png`,
  pool: `${CDN}26b73a156_generated_9b902918.png`,
  terrace: `${CDN}2e4576ad8_generated_8ccbae16.png`,
  facade: `${CDN}ecce3e492_generated_2b0bb276.png`,
  lobby: `${CDN}fa8572e39_generated_2d9e8159.png`,
  ocean: `${CDN}a95414e31_generated_86f61cec.png`,
  junior: `${CDN}0a2753f21_generated_04888f04.png`,
  family: `${CDN}ff6b2a428_generated_31a76694.png`,
  hammam: `${CDN}6343db4a2_generated_9e702731.png`,
  breakfast: `${CDN}ed27996fb_generated_7cfb894e.png`,
  rooftop: `${CDN}b58b7f8fd_generated_300cc42f.png`,
  beach: `${CDN}17b669c7a_generated_b4b6ef7d.png`,
};

export const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/rooms", key: "nav.rooms" },
  { to: "/services", key: "nav.services" },
  { to: "/offers", key: "nav.offers" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" },
];

export const ROOMS = [
  {
    id: "classic",
    image: images.suite,
    price: 850,
    size: "24 m²",
    guests: 2,
    amenities: ["room.amenity.linen", "room.amenity.wifi", "room.amenity.ac", "room.amenity.breakfast"],
  },
  {
    id: "ocean",
    image: images.ocean,
    price: 1280,
    size: "30 m²",
    guests: 2,
    amenities: ["room.amenity.sea", "room.amenity.balcony", "room.amenity.wifi", "room.amenity.minibar"],
  },
  {
    id: "junior",
    image: images.junior,
    price: 1650,
    size: "38 m²",
    guests: 3,
    amenities: ["room.amenity.terrace", "room.amenity.sofa", "room.amenity.wifi", "room.amenity.breakfast"],
  },
  {
    id: "family",
    image: images.family,
    price: 2100,
    size: "48 m²",
    guests: 4,
    amenities: ["room.amenity.twoRooms", "room.amenity.family", "room.amenity.wifi", "room.amenity.ac"],
  },
];

export const GALLERY = [
  { src: images.lobby, alt: "Carved cedar lobby with brass lanterns" },
  { src: images.pool, alt: "Hotel pool at golden hour" },
  { src: images.terrace, alt: "Restaurant terrace set for dinner" },
  { src: images.suite, alt: "Suite with Moroccan mint tea on the bed" },
  { src: images.hammam, alt: "Traditional hammam with brass bucket" },
  { src: images.breakfast, alt: "Moroccan breakfast on the terrace" },
  { src: images.ocean, alt: "Room with Atlantic ocean view" },
  { src: images.rooftop, alt: "Rooftop terrace above Agadir bay" },
  { src: images.beach, alt: "Agadir beach at golden hour" },
  { src: images.facade, alt: "Hotel facade at dusk" },
];

export const OFFERS = [
  { id: "atlantic", image: images.ocean, discount: "-15%", price: 2850, nights: 3 },
  { id: "spa", image: images.hammam, discount: "-10%", price: 2200, nights: 2 },
  { id: "longstay", image: images.rooftop, discount: "-20%", price: 5400, nights: 7 },
];

export const LANGS = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "ع", name: "العربية" },
];