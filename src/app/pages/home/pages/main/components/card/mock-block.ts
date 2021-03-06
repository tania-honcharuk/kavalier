export interface Blog {
  img: string;
  date: string;
  section: string;
  title: string;
  text: string;
};

export const BLOG: Blog[] = [
  {
    img: '/assets/images/blog-first.png',
    date: '2019-11-28',
    section: 'SIGHTS',
    title: 'Ut Tellus Dolor',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
  },
  {
    img: '/assets/images/blog-second.png',
    date: '2019-11-19',
    section: 'NEWS',
    title: 'Vivamus Eget Nibh',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
  },
  {
    img: '/assets/images/blog-third.png',
    date: '2019-11-8',
    section: 'TIPS',
    title: 'Nemo Enim Ipsam',
    text: 'Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.',
  }
]