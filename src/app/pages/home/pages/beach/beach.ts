import { InfoCard } from "src/app/components/info-card/info-card";

export const BEACH: InfoCard[] = [
  {
    title: 'Swimming Pool',
    text: [
      'Beach Complex Kavalier Beach Clubv - Created in the finest tradition of European beach resorts: a perfect complex for both relaxing family fun and lounge parties with friends. Located in a special area - in the green zone of the historic part of Lviv.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/pool.jpeg',
    row: 'row',
  },
  {
    title: 'Restaurant',
    text: [
      'Kavalier Restaurant invites hotel guests and residents to start the morning with us.',
      'From 7:30 to 11:00 you will enjoy a buffet breakfast with a variety of cold and hot snacks, fresh pastries, self-made yoghurts and more. Most importantly - the magical landscape of the morning city of Lion and the ancient "Demolition" park, will enchant you and cheer you up just like the delicious Lviv coffee.'
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/restaurant.jpeg',
    row: 'reverse',
  },
  {
    title: 'The Summer Terrace',
    text: [
      "The Kavalier restaurant on the summer terrace will pleasantly surprise you with delicious dishes of European and Italian cuisine. Every Saturday we have a show time from Chief's team, namely the preparation of new unusual dishes for guests.",
      "The summer terrace invites you to enjoy the author's cuisine from 10:00 to 00:00 every day!",
      "Kavalier Boutique Hotel- Luxury Holidays in Lviv!"
    ],
    detailsBtn: true,
    bookBtn: true,
    image: '/assets/images/terrace.jpeg',
    row: 'row',
  }
]