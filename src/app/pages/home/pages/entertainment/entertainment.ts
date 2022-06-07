import { InfoCard } from "src/app/components/info-card/info-card";

export const ACTIVITY: InfoCard[] = [
  {
    title: 'Tennis Club',
    text: [
      'Kavalier Boutique Hotel provides a hard court tennis court for everyone.',
      'For playing this exciting sport we offer the following services:',
      '- rent of the court - 230 UAH / hour',
      '- evening with lighting - 250 UAH / hour',
      '- Coach services, partner sparring - 300 UAH / hour',
      '- rental of rackets and balls - 50 UAH / pc',
      '- Reservation by phone: 032 242 3 999',
      'reception@kavalier.com.ua'
    ],
    detailsBtn: false,
    bookBtn: true,
    image: '/assets/images/tennis.jpeg',
    row: 'row',
  },
  {
    title: 'Excursions',
    text: [
      'Kavalier Boutique Hotel offers you the maximum of emotion from the city of Lion - unusual trips to the unknown city of Lviv at your service.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/excursion.jpeg',
    row: 'reverse',
  },
  {
    title: 'Car & Bike Rental',
    text: [
      'In order to make your stay in Lviv as comfortable as possible, we suggest you to use a car rental service. You can book a car for your own use without leaving the hotel.',
      'Kavalier Boutique Hotel - Only for a Healthy Lifestyle! Cycling will give you a good mood and fitness.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/bike.jpeg',
    row: 'row',
  },
]