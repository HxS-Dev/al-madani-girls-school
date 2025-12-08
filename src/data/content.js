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
      name: "Teacher Zara",
      title: "Headteacher",
      message: "Assalamu Alaikum wa Rahmatullahi wa Barakatuh,\n\nIt is with great pleasure and gratitude to Allah (SWT) that I welcome you all to another exciting year at our school, where we nurture and educate young Muslimahs to become confident, compassionate, and contributing members of British society.\n\nOur ethos, Tarbiyah for Generations, is at the heart of everything we do. We are deeply committed to providing an environment that fosters both academic excellence and the development of strong Islamic character. By instilling the values of sincerity, kindness, respect, and a sense of responsibility, we aim to empower our students to uphold their Islamic identity while positively engaging with the wider community.\n\nWe take pride in creating a nurturing space where our students are encouraged to excel, dream big, and embrace their roles as future leaders. Through a rich curriculum, spiritual development, and a focus on community contribution, we strive to shape well-rounded individuals who embody the best of both their Islamic heritage and their British citizenship.\n\nMay Allah (SWT) grant us all success in this noble journey of learning and tarbiyah."
    },
    values: [
        "To set the foundation for the building of an Islamic personality; to provide students with the highest standards of education to enable them to develop their self-knowledge, self-esteem and self-confidence.",
        "To distinguish right from wrong and to respect the law, to encourage pupils to accept responsibility for their behaviour, show initiative and understanding of how they can contribute to community life.",
        "To provide pupils with a broad general knowledge of public institutions and services, and assist pupils to acquire an appreciation of and respect for their own and other cultures.",
        "To promote equal opportunities, racial and religious harmony and social justice.",
        "Educate pupils so that they also promote tolerance and harmony between different cultural traditions – this will inshaAllah help them to become responsible and productive citizens who will confidently meet the challenges of the future.",
        "To present education as a lifelong process that will lead to a healthy lifestyle.",
        "Educate pupils on how to keep safe, to be able to achieve economical well-being and improve their spiritual, moral, social and cultural outlooks."
    ],

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
        image: "",
        content: "Our students have once again demonstrated exceptional academic achievement..."
      },
      {
        id: 2,
        title: "New Science Laboratory Opening",
        excerpt: "State-of-the-art science facilities unveiled to enhance STEM education for our students.",
        date: "2024-09-15",
        category: "Facilities",
        image: "",
        content: "The new science laboratory represents our commitment to providing cutting-edge facilities..."
      },
      {
        id: 3,
        title: "International Women's Day Celebration",
        excerpt: "Students participated in inspiring workshops and presentations celebrating women's achievements.",
        date: "2024-03-08",
        category: "Events",
        image: "",
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