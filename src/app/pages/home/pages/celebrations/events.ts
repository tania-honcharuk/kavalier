import { InfoCard } from "src/app/components/info-card/info-card";

export const EVENTS: InfoCard[] = [
  {
    title: 'Corporate Events',
    text: [
      'Elegant, cozy rooms up to 24 m2.',
      'The rooms are on the third and fourth (attic) floors of the hotel, equipped with exceptionally wide double beds, 190 cm wide.',
      'Ideal for business people and couples.',
      'The rooms are mostly without balconies and offer panoramic views of the city.',
      'For the convenience of guests, the room has an ergonomic work area and a seating area.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/corporate.jpeg',
    row: 'row',
  },
  {
    title: 'Banquets',
    text: [
      'The room is 27 square meters and consists of one living room with carpet floor and a bathroom with shower (all rooms with large balcony and pool view).',
      'The room has one double bed or two single beds, a desk with an armchair and a classic wardrobe. For the convenience of the guest there is satellite TV + smart TV, central air conditioning, heating, safe, mini bar, telephone, towels, slippers, bathrobes, hair dryer and cosmetic set. It is possible to deliver an extra bed.',
      'Room rates include buffet breakfast, one parking space on site and Wi-Fi.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/breakfast.jpeg',
    row: 'reverse',
  },
  {
    title: 'Corporate Events',
    text: [
      "Wedding is a very important event in everyone's life. This unique day should leave only bright and happy memories.",
      'How to make the day dedicated to your love perfect and at the highest level? How to organize a wedding? Kavalier Boutique Hotel will answer these questions. It is a professional who can solve a lot of small and big problems with the organization.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/wedding.jpeg',
    row: 'row',
  }
]