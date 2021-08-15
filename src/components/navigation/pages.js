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
      testimonials: {
        url: '/testimonials',
        title: 'Testimonials'
      },
      plans: {
        url: '/plans',
        title: 'Plans'
      }
    }
  }
};

export default pages;
