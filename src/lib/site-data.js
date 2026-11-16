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
// Public hotel photos copied from the main Drive folder, not its subfolders.
const HOTEL_PHOTOS = "/static-site/assets/images/drive/";

export const images = {
  suite: `${HOTEL_PHOTOS}_DSC6290-HDR-Pano.jpg`,
  pool: `${CDN}26b73a156_generated_9b902918.png`,
  terrace: `${CDN}2e4576ad8_generated_8ccbae16.png`,
  facade: `${CDN}ecce3e492_generated_2b0bb276.png`,
  lobby: `${HOTEL_PHOTOS}_DSC6078-HDR-Pano.jpg`,
  reception: `${HOTEL_PHOTOS}_DSC6021-HDR.jpg`,
  cafe: `${HOTEL_PHOTOS}_DSC6108-HDR.jpg`,
  balcony: `${HOTEL_PHOTOS}_DSC6232-HDR-Pano.jpg`,
  ocean: `${HOTEL_PHOTOS}_DSC6193-HDR-Pano.jpg`,
  junior: `${HOTEL_PHOTOS}_DSC6494-HDR-Pano.jpg`,
  family: `${HOTEL_PHOTOS}_DSC6429-HDR-Pano.jpg`,
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
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" },
];

export const ROOMS = [
  {
    id: "single",
    image: images.junior,
    price: 850,
    size: "24 m²",
    guests: 1,
    amenities: ["room.amenity.linen", "room.amenity.wifi", "room.amenity.ac", "room.amenity.bath"],
  },
  {
    id: "double",
    image: images.suite,
    price: 1280,
    size: "30 m²",
    guests: 2,
    amenities: ["room.amenity.linen", "room.amenity.tv", "room.amenity.wifi", "room.amenity.minibar"],
  },
  {
    id: "triple",
    image: images.family,
    price: 1650,
    size: "38 m²",
    guests: 3,
    amenities: ["room.amenity.family", "room.amenity.bath", "room.amenity.wifi", "room.amenity.breakfast"],
  },
];

export const GALLERY = [
  { src: images.lobby, alt: "Hotel Marjane lobby with blue columns and seating" },
  { src: images.suite, alt: "Guest room with a double bed and purple balcony curtains" },
  { src: images.cafe, alt: "Hotel café seating area beneath the central staircase" },
  { src: images.ocean, alt: "Pink guest room with a double bed and balcony doors" },
  { src: images.balcony, alt: "Private balcony with a table, chairs and a view across Agadir" },
  { src: images.family, alt: "Guest room with a double bed and an additional single bed" },
  { src: images.reception, alt: "Hotel reception counter in the blue lobby" },
  { src: `${HOTEL_PHOTOS}_DSC6027-HDR.jpg`, alt: "Reception desk and the hotel team" },
  { src: `${HOTEL_PHOTOS}_DSC6117-HDR.jpg`, alt: "Café counter with blue and white mosaic detailing" },
  { src: `${HOTEL_PHOTOS}_DSC6214-HDR-Pano.jpg`, alt: "Pink guest room with wooden furniture and purple curtains" },
  { src: `${HOTEL_PHOTOS}_DSC6266-HDR-Pano.jpg`, alt: "Tiled guest bathroom with a shower and wooden door" },
  { src: `${HOTEL_PHOTOS}_DSC6311-HDR-Pano.jpg`, alt: "Orange guest room with a double bed and wall-mounted television" },
  { src: `${HOTEL_PHOTOS}_DSC6361-HDR-Pano.jpg`, alt: "Guest bathroom with a bathtub, washbasin and blue floor tiles" },
  { src: `${HOTEL_PHOTOS}_DSC6376-HDR-Pano.jpg`, alt: "Guest room with balcony doors, floral bedding and seating" },
  { src: `${HOTEL_PHOTOS}_DSC6397-HDR-Pano.jpg`, alt: "White tiled bathroom with a bathtub and yellow shower curtain" },
  { src: `${HOTEL_PHOTOS}_DSC6414-HDR-Pano.jpg`, alt: "Guest room with wooden bedside tables and floral bedding" },
  { src: `${HOTEL_PHOTOS}_DSC6449-HDR-Pano.jpg`, alt: "Room sitting area with striped armchairs beside the balcony" },
  { src: `${HOTEL_PHOTOS}_DSC6461-HDR-Pano.jpg`, alt: "Guest room with twin beds and a striped armchair" },
  { src: `${HOTEL_PHOTOS}_DSC6476-HDR-Pano.jpg`, alt: "Guest bathroom with a bathtub and pale blue tile details" },
  { src: images.junior, alt: "Purple guest room with twin beds and a balcony" },
  { src: `${HOTEL_PHOTOS}_DSC6515-HDR-Pano.jpg`, alt: "Guest bathroom with a bathtub and blue shower curtain" },
  { src: `${HOTEL_PHOTOS}_DSC6527-HDR-Pano-2.jpg`, alt: "Guest bathroom with a wooden door and blue shower curtain" },
];

export const LANGS = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "ع", name: "العربية" },
];