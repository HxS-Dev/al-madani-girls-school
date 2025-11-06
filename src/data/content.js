// Content data for Al-Madani Girls School
export const contentData = {
  hero: {
    title: "Excellence in Education",
    subtitle: "Empowering Young Women Since 1985",
    description: "At Al-Madani Girls School, we provide exceptional education that inspires academic excellence, personal growth, and community leadership. Our dedicated faculty and modern facilities create an environment where every student can thrive.",
    primaryButton: {
      text: "Explore Our School",
      path: "/about"
    },
    secondaryButton: {
      text: "Admissions Information",
      path: "/admissions"
    }
  },

  about: {
    headteacher: {
      name: "Dr. Sarah Ahmed",
      title: "Headteacher",
      message: "Welcome to Al-Madani Girls School, where we believe in the power of education to transform lives. Our commitment to academic excellence, combined with a nurturing environment, ensures that every student reaches her full potential. We foster not just learning, but the development of confident, compassionate young women who will make a difference in the world.",
      qualifications: [
        "PhD in Educational Leadership, University of London",
        "MA in Mathematics Education, King's College London",
        "BA (Hons) in Mathematics, University of Oxford",
        "National Professional Qualification for Headship (NPQH)"
      ],
      experience: "15+ years in education, including 8 years as Headteacher"
    },
    
    values: {
      mission: "To provide an outstanding education that empowers young women to achieve academic excellence, develop strong moral values, and become confident leaders who contribute positively to society.",
      vision: "To be recognized as a leading educational institution that nurtures the intellectual, personal, and spiritual development of young women, preparing them for success in higher education and beyond.",
      values: [
        {
          title: "Excellence",
          description: "We strive for the highest standards in all aspects of education and personal development."
        },
        {
          title: "Integrity",
          description: "We uphold the highest ethical standards and promote honesty and respect in all interactions."
        },
        {
          title: "Compassion",
          description: "We foster empathy, kindness, and social responsibility within our school community."
        },
        {
          title: "Innovation",
          description: "We embrace new technologies and teaching methods to enhance learning experiences."
        },
        {
          title: "Community",
          description: "We build strong partnerships between students, staff, parents, and the wider community."
        }
      ]
    },

    academicResults: {
      gcse: {
        year: "2024",
        grade9: "45%",
        grades9_7: "78%",
        grades9_4: "96%",
        progress8: "+0.8",
        attainment8: "58.2"
      },
      alevel: {
        year: "2024",
        aStar: "32%",
        aStarA: "68%",
        aStarB: "89%",
        passRate: "99.5%"
      },
      destinations: {
        university: "95%",
        russellGroup: "78%",
        apprenticeship: "3%",
        employment: "2%"
      }
    }
  },

  news: {
    articles: [
      {
        id: 1,
        title: "Outstanding GCSE Results 2024",
        excerpt: "Al-Madani Girls School celebrates exceptional GCSE results with 78% of grades at 9-7 and 96% at 9-4.",
        date: "2024-08-22",
        category: "Academic",
        image: "/resources/library-students.png",
        content: "Our students have once again demonstrated exceptional academic achievement..."
      },
      {
        id: 2,
        title: "New Science Laboratory Opening",
        excerpt: "State-of-the-art science facilities unveiled to enhance STEM education for our students.",
        date: "2024-09-15",
        category: "Facilities",
        image: "/resources/science-lab.png",
        content: "The new science laboratory represents our commitment to providing cutting-edge facilities..."
      },
      {
        id: 3,
        title: "International Women's Day Celebration",
        excerpt: "Students participated in inspiring workshops and presentations celebrating women's achievements.",
        date: "2024-03-08",
        category: "Events",
        image: "/resources/assembly-hall.png",
        content: "Our International Women's Day celebration brought together students, staff, and guest speakers..."
      }
    ],
    
    events: [
      {
        id: 1,
        title: "Open Day 2024",
        date: "2024-10-15",
        time: "10:00 AM - 2:00 PM",
        location: "School Campus",
        description: "Join us for our annual Open Day to explore our facilities and meet our staff."
      },
      {
        id: 2,
        title: "Christmas Concert",
        date: "2024-12-12",
        time: "7:00 PM",
        location: "School Hall",
        description: "Annual Christmas concert featuring performances by our talented students."
      },
      {
        id: 3,
        title: "Sports Day",
        date: "2025-07-05",
        time: "9:00 AM - 4:00 PM",
        location: "School Sports Ground",
        description: "Annual sports day with various athletic competitions and team events."
      }
    ]
  },

  admissions: {
    procedure: {
      steps: [
        {
          title: "Initial Inquiry",
          description: "Contact our admissions team to express interest and receive information pack."
        },
        {
          title: "School Visit",
          description: "Attend an open day or schedule a private tour of our facilities."
        },
        {
          title: "Application Submission",
          description: "Complete and submit the application form with required documents."
        },
        {
          title: "Entrance Examination",
          description: "Sit for our entrance exam to assess academic potential."
        },
        {
          title: "Interview",
          description: "Meet with senior staff to discuss aspirations and fit."
        },
        {
          title: "Offer & Acceptance",
          description: "Receive offer letter and complete enrollment process."
        }
      ],
      requirements: [
        "Completed application form",
        "Recent school reports",
        "Birth certificate",
        "Passport-sized photograph",
        "Registration fee",
        "Reference from current school"
      ]
    },
    
    fees: {
      tuition: {
        year7_9: "£18,500 per annum",
        year10_11: "£19,200 per annum",
        year12_13: "£19,800 per annum"
      },
      additional: {
        registration: "£150 (non-refundable)",
        deposit: "£1,000 (refundable)",
        lunch: "£1,200 per annum (optional)",
        transport: "£800-1,500 per annum (optional)",
        uniforms: "£300-500 (initial setup)",
        trips: "Varies by year group"
      },
      scholarships: [
        {
          type: "Academic Excellence",
          value: "Up to 50% fee remission",
          criteria: "Exceptional academic performance in entrance exam"
        },
        {
          type: "Music Scholarship",
          value: "Up to 25% fee remission",
          criteria: "Grade 5+ in instrument or voice"
        },
        {
          type: "Sports Scholarship",
          value: "Up to 25% fee remission",
          criteria: "Regional or national level representation"
        }
      ]
    }
  },

  curriculum: {
    keyStage3: {
      years: "7-9",
      coreSubjects: [
        "English Language & Literature",
        "Mathematics",
        "Science (Biology, Chemistry, Physics)",
        "Modern Foreign Languages (French, Spanish, Arabic)",
        "History",
        "Geography",
        "Religious Studies",
        "Physical Education",
        "Art & Design",
        "Music",
        "Drama",
        "Computing",
        "Personal, Social, Health & Economic Education"
      ]
    },
    keyStage4: {
      years: "10-11 (GCSE)",
      coreSubjects: [
        "English Language",
        "English Literature",
        "Mathematics",
        "Science (Combined or Triple)",
        "Religious Studies",
        "Physical Education"
      ],
      optionalSubjects: [
        "Art & Design",
        "Business Studies",
        "Computer Science",
        "Drama",
        "French",
        "Geography",
        "History",
        "Music",
        "Physical Education (GCSE)",
        "Spanish",
        "Textiles",
        "Food Preparation & Nutrition"
      ]
    },
    keyStage5: {
      years: "12-13 (A Level)",
      subjects: [
        "Art & Design",
        "Biology",
        "Business Studies",
        "Chemistry",
        "Computer Science",
        "Drama & Theatre Studies",
        "Economics",
        "English Literature",
        "French",
        "Geography",
        "History",
        "Mathematics",
        "Further Mathematics",
        "Music",
        "Physics",
        "Politics",
        "Psychology",
        "Religious Studies",
        "Sociology",
        "Spanish"
      ],
      extracurricular: [
        "Extended Project Qualification (EPQ)",
        "Duke of Edinburgh Award",
        "Community Service",
        "Work Experience",
        "University Preparation",
        "Career Guidance"
      ]
    }
  }
}

export default contentData