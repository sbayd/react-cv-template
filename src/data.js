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
    description: 'Projects, i have completed are listed below. To get general information about private project or not-finished projects you can get in touch.',
    categories: [
      {
        name: 'YD Software',
        list: [{
          url: 'http:////mavimasa.ankara.bel.tr',
          title: 'Mavi Masa',
          description: 'Ankara Metropolitan Municipality - Mavi Masa Project - Mobile Applications (C# / Oracle / Android SDK - Java / iOS SDK/ Web Services)'
        },
        {
          url: 'http:////giris.odtuteknokent.com.tr',
          title: 'TKBS',
          description: 'METU Technopolis Information System ( C# / SQL Server / Xamarin / MongoDB / Web Services)'
        },
        {
          url: 'http:////yfyi2.odtuteknokent.com.tr',
          title: 'YFYI',
          description: 'New Business New Ideas(YFYİ) Entrepreneurship Acceleration Program Management System ( C# / SQL Server / Web Services)'
        },
        {
          url: 'http:////ggj.odtuteknokent.com.tr',
          title: 'Global Game Jam',
          description: 'Global Game Jam (METU Technopolis) Management System ( C# / SQL Server / Web Services)'
        },
        {
          url: 'http:////atom.odtuteknokent.com.tr',
          title: 'ATOM in Games',
          description: 'ATOM Pre-Incubation Center (METU Technopolis) Management System ( C# / SQL Server / Web Services)'
        },
        {
          url: 'http:////sanayipolitikalari.sanayi.gov.tr',
          title: 'Sanayi Politikalari Portali',
          description: 'T.C. Industry Ministry Industrial Policies Portal ( C# / SQL Server / Web Services)'
        },
        {
          url: 'http:////teknojump2.odtuteknokent.com.tr',
          title: 'TeknoJUMP',
          description: 'TeknoJUMP Entrepreneurship Acceleration Program Management System ( C# / SQL Server / Web Services)'
        },
        {
          url: 'http:////bigg.odtuteknokent.com.tr',
          title: 'TUBITAK BIGG / 1512',
          description: 'TUBITAK Invidual Young Enterprise(BİGG/1512) Program Management System - METU ( C# / SQL Server / Web Services )'
        },
        {
          url: 'http:////aosb.org.tr',
          title: 'AOSB',
          description: 'Ankara Chamber of Industry 1st Organized Industrial Zone Web Portal - Mobile Applications (C#, SQL Server, Android SDK - Java / iOS SDK / Web Services)'
        },
        {
          url: '',
          title: 'AMS App',
          description: 'Central Bank of the Republic of Turkey (TCMB) Mobile Archive Management System ( Android SDK / Xamarin / Urovo SDK)'
        },
        {
          url: 'http:////yee.org.tr',
          title: 'YEE Z-BOOK',
          description: 'Yunus Emre Institute Z-Book Education Platform (C#/ MongoDB/ SQLite, Web Services)'
        },
        {
          url: 'http:////evdekiogretmen.bilfen.com',
          title: 'Evdeki Ögretmen(Teacher at Home)',
          description: 'Bilfen Evdeki Ogretmen Online Education System (C# / SQL Server / Web Services)'
        }]
      },
      {
        name: 'Extracurricular Activities',
        list: [
          {
            url: '',
            title: 'Mobile Exam System',
            description: 'A mobile exam project for a company written with Xamarin.Android, Laravel'
          },
          {
            url: 'http:////www.karmer.hacettepe.edu.tr/hutest/',
            title: 'RIASEC Student Career Profile',
            description: 'Hacettepe University Career Development Application And Research Center Student Profile Application ( PHP(CI), MySQL, MongoDB)'
          },
          {
            url: '',
            title: 'Educational Mobile Game Framework',
            description: 'A personal project for physical interactive mobile game development ( C#, Xamarin, Vuforia , OpenCV, MongoDB)'
          }
        ]
      }
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
    list: ['Javascript', 'ReactJS', 'ReactNative', 'Redux', 'C#', 'ASP.NETMVC', 'PHP', 'SOLID PRINCIPLES', 'C++', 'OPENCV', 'XAMARIN', 'ANDROID SDK', 'LARAVEL', 'SQL SERVER', 'MYSQL', 'SQLITE', 'LINQ', 'N-TIER ARCHITECTURE', 'SOA ARCHITECTURE']
  }
};

export default data;
