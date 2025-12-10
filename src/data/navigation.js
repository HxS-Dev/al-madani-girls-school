// Navigation structure for Al-Madani Girls School
export const navigationData = {
  main: [
    {
      id: 'home',
      title: 'Home',
      path: '/',
      subItems: []
    },
    {
      id: 'about',
      title: 'About Us',
      path: '/about',
      subItems: [
        { title: "Headteacher's Introduction", path: '/about/headteacher' },
        { title: 'School Vision & Ethos', path: '/about/values' },
        { title: 'Ofsted Report', path: 'https://reports.ofsted.gov.uk/provider/27/136955' },
        { title: 'Academic Results', path: '/about/results' },
        { title: 'Contact, Staff & Governors', path: '/about/contact' }
      ]
    },
    {
      id: 'news',
      title: 'News & Events',
      path: '/news',
      subItems: [
        { title: 'News', path: '/news/articles' },
        { title: 'Events', path: '/news/events' }
      ]
    },
    {
      id: 'annual-calendar',
      title: 'Annual Calendar',
      path: '/dates/calendar',
      subItems: []
    },
    {
      id: 'admissions',
      title: 'Admissions',
      path: '/admissions',
      subItems: [
        { title: 'Application Timeline', path: '/admissions/calendar' },
        { title: 'Admissions Policy', path: '/admissions/procedure' },
        { title: 'Admissions Fees', path: '/admissions/fees' },
        { title: 'Application Form', path: '/admissions/application' },
        { title: 'Entrance Exam Overview', path: '/admissions/exam' }
      ]
    },
    {
      id: 'policies',
      title: 'Policies',
      path: '/policies',
      subItems: [
        { title: 'Policies', path: '/policies/policies' }
      ]
    }
  ]
}

export default navigationData