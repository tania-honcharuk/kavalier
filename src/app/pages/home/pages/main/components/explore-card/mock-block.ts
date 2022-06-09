export interface Blog {
  img: string;
  title: string;
  text: string;
  path: string;
};

export const BLOG: Blog[] = [
  {
    img: '/assets/images/pool02.jpeg',
    title: 'Wellness & Spa',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
    path: 'beach',
  },
  {
    img: '/assets/images/restaurant.jpeg',
    title: 'Restaurants & Bars',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
    path: 'beach',
  },
  {
    img: '/assets/images/gallery-header.jpeg',
    title: 'Special Offers',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
    path: 'entertainment',
  }
]