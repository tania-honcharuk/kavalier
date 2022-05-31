export interface InfoCard {
  title: string;
  text: any;
  detailsBtn: boolean;
  bookBtn: boolean;
  image: string;
  row: string;
};

export const INFO: InfoCard[] = [
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
      'reception@kavalier.com.ua'],
    detailsBtn: false,
    bookBtn: true,
    image: '/assets/images/',
    row: 'reverse',
  },


]