export interface InfoCard {
  title: string;
  text: any;
  detailsBtn: boolean;
  bookBtn: boolean;
  image: string;
  row: string;
};

export const Rooms: InfoCard[] = [
  {
    title: 'Classic',
    text: [
      'Elegant, cozy rooms up to 24 m2.',
      'The rooms are on the third and fourth (attic) floors of the hotel, equipped with exceptionally wide double beds, 190 cm wide.',
      'Ideal for business people and couples.',
      'The rooms are mostly without balconies and offer panoramic views of the city.',
      'For the convenience of guests, the room has an ergonomic work area and a seating area.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/classic.jpeg',
    row: 'row',
  },
  {
    title: 'Superior',
    text: [
      'The room is 27 square meters and consists of one living room with carpet floor and a bathroom with shower (all rooms with large balcony and pool view).',
      'The room has one double bed or two single beds, a desk with an armchair and a classic wardrobe. For the convenience of the guest there is satellite TV + smart TV, central air conditioning, heating, safe, mini bar, telephone, towels, slippers, bathrobes, hair dryer and cosmetic set. It is possible to deliver an extra bed.',
      'Room rates include buffet breakfast, one parking space on site and Wi-Fi.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/superior.jpeg',
    row: 'reverse',
  },
  {
    title: 'Family Superior',
    text: [
      'The room is 27 square meters and consists of one living room with carpet floor and a bathroom with shower (all rooms with large balcony and pool view).',
      'The room has one double bed and one single or three single beds, a desk with an armchair and a classic wardrobe. For the convenience of the guest there is satellite TV + smart TV, central air conditioning, heating, safe, mini bar, telephone, towels, slippers, bathrobes, hair dryer and cosmetic set.',
      'Room rates include Buffet Breakfast, one parking space on site, and secure Wi-Fi.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/family.jpeg',
    row: 'row',
  },
  {
    title: 'Semi-Suit',
    text: [
      'Refined rooms, 30 m2. In classic pastel colors, balconies offer beautiful views of the Demolition Park. Guests can enjoy the seating area on the balcony while enjoying the scenery.',
      'The Snow White Junior Suite is ideal for honeymooners.',
      'If necessary, it is possible to deliver a bed or crib for children.',
      'For the convenience of guests, the room has an ergonomic work area and a seating area.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/semi-suit.jpeg',
    row: 'reverse',
  },
  {
    title: 'Suit',
    text: [
      'Luxury design rooms, 40 m2.',
      'The suite is ideal for couples as well as families with children.',
      'Consists of living room and bedroom. The bathroom comes with high-quality plumbing and a hot tub.',
      'It is possible to deliver a crib or crib for the baby.',
      'For convenience, guests have a seating area and an ergonomic work area.'    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/suit.jpeg',
    row: 'row',
  },
];

