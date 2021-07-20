const pages = {
  home: {
    url: '/',
    title: 'Home'
  },
  contact: {
    url: '/contact',
    title: 'Contact'
  },
  sections: {
    url: '/sections',
    title: 'Sections',
    children: {
      url: '/testimonials',
      title: 'Testimonials'
    }
  }
};

export default pages;
