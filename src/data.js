export const data = {
  profile: {
    name: 'S.Berkay Aydın',
    title: 'Full Stack Developer',
    mail: 'sbaydin06@gmail.com',
    phoneNumber: '+90 (507) 808 4130',
    website: 'sbaydin.com',
    linkedin: 'linkedin.com/in/sbaydin',
    github: 'github.com/sbayd',
    imagePath: 'profile.png',
    twitter: null,
    educationDetails: {
      sectionTitle: '',
      list: [
        { name: 'BSc in CEIT', school: 'Hacettepe University', date: '2013-Present' },
      ]
    },
    languages: {
      sectionTitle: 'Languages',
      list: [{ name: 'Turkish', level: 'Native' }, { name: 'English', level: 'Professional' }, { name: 'Spanish', level: 'Beginner' }]
    },
    interests: {
      sectionTitle: '',
      list: ['Pipes', 'Analog Photography', 'Cooking', 'Archery', 'Poems', 'Drums']
    }
  },
  careerProfile: {
    sectionTitle: 'Career Profile',
    icon: null,
    description: '<p>I\'m coding something since I was 14. In the beginning I was creating game servers for popular games, after that I started with php and created some basic apps for small-sized companies. Then I decided to train myself. And now, I have successfully finished a good many projects for companies, universities and my government you can see the project details <a href="#projects">below.</a> So, may be we can work together!</p>'
  },
  experiences: {
    sectionTitle: '',
    icon: null,
    description: null,
    list: [
      {
        title: 'Software Developer',
        company: 'JotForm',
        description: 'I\'m using ReactJS and working as a front-end developer to develop new features for JotForm.',
        companyLink: 'http://jotform.com',
        companyShortDetail: '',
        date: '2016.8 - Present'
      },
      {
        title: 'Full-Stack Developer',
        company: 'YD Software',
        description: 'I was using ASP.Net MVC Framework with N Tier Architecture to develop management systems, learning management systems & big data projects. And i was developing Android / IOS applications using Xamarin or NDK. You can see projects that I have completed for YD Software <a href=\'#projects\'>below.</a>',
        companyLink: 'http://ydyazilim.com',
        companyShortDetail: 'ANKARA METU Technopolis(ODTU Teknokent)',
        date: '2012 - 2016.8'
      },
      {
        title: 'Intern',
        company: 'YD Software',
        description: 'I was warming up with a Learning Management System including desktop and web apps.',
        companyLink: 'http://ydyazilim.com',
        companyShortDetail: 'ANKARA METU Technopolis(ODTU Teknokent)',
        date: '2012.06 - 2012.10'
      }
    ]
  },
  projects: {
    sectionTitle: '',
    icon: null,
    description: '',
    categories: [
      {
        name: '',
        list: {
          name: '',
          url: null,
          description: ''
        }
      },
    ]
  },
  skills: {
    sectionTitle: '',
    icon: null,
    list: [
      { name: '', percent: null }
    ]
  },
  tags: {
    sectionTitle: '',
    icon: null,
    list: ['test']
  }
};

export default data;