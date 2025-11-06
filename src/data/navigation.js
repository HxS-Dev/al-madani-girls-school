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
        { title: 'School Values & Mission Statement', path: '/about/values' },
        { title: 'Ofsted Report', path: '/about/ofsted' },
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
      id: 'dates',
      title: 'Key Dates & Timings',
      path: '/dates',
      subItems: [
        { title: 'Annual Calendar', path: '/dates/calendar' },
        { title: 'School Timetable', path: '/dates/timetable' }
      ]
    },
    {
      id: 'admissions',
      title: 'Admissions',
      path: '/admissions',
      subItems: [
        { title: 'Admissions Calendar', path: '/admissions/calendar' },
        { title: 'Admissions Procedure', path: '/admissions/procedure' },
        { title: 'Admissions Fees', path: '/admissions/fees' },
        { title: 'Application Form', path: '/admissions/application' },
        { title: 'Entrance Exam Overview', path: '/admissions/exam' },
        { title: 'Gallery', path: '/admissions/gallery' }
      ]
    },
    {
      id: 'information',
      title: 'Fees & Key Information',
      path: '/information',
      subItems: [
        { title: 'Policies', path: '/information/policies' },
        { title: 'School Fees', path: '/information/fees' },
        { title: 'School Curriculum', path: '/information/curriculum' },
        { title: 'Uniform & Equipment', path: '/information/uniform' }
      ]
    }
  ]
}

export default navigationData