/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Dan Lenard Hacutina",
  title: "Hi, I'm Dan",
  subTitle: "A Software Developer having more than 3 years of work experience in building Web applications using Reactjs and Django with some libraries.",
  resumeLink:
    "https://drive.google.com/file/d/1NdFHF15tNA__h7cjlHbBr1n5Rd9E-utM/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/danlenard",
  linkedin: "https://www.linkedin.com/in/dan-lenard-hacutina-17b508190/",
  gmail: "danhacutina@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Developer who are eager to showcase skills and learn.",
  skills: [
    emoji(
      "• Develop interactive Front end / User Interfaces for your web."
    ),
    emoji("• Passionate at writing scripts for automation."),
    emoji(
      "• API integration of third party services."
    ),
    emoji("• Documenting and managing version and changes.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fa fa-file-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "City College of Calamba",
      logo: require("./assets/images/CCCLogo.jpg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "August 2014 - May 2018",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Best Thesis for Information Technology",
        "Top 7th Overall in BSIT Graduates 2018"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Javascript", //Insert stack or technology you have experience in
      progressPercentage: "77%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Design",
      progressPercentage: "53%"
    },
    {
      Stack: "Django",
      progressPercentage: "75%"
    },
    {
      Stack: "API",
      progressPercentage: "79%"
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Opo Networks Corp.",
      companylogo: require("./assets/images/opo-networks.jpg"),
      date: "July 2021 – January 2023",
      desc: "Backend api developer that is responsible in writing the web services and APIs used by front-end developers.",
      descBullets: [
        "Collaborate with Front-end developer to integrate user-facing elements with server-side logic.",
        "Creating precise audit report automation of company data against 3rd party service providers.",
        "Worked with the company developers to develop API systems for other internal applications.",
        "Adjusting old data for discrepancies and submitting list of changes.",
      ]
    },
    {
      role: "Software Developer",
      company: "Code Disruptors, Inc.",
      companylogo: require("./assets/images/code-disruptors.png"),
      date: "July 2018 – October 2020",
      desc: "Frontend web developer responsible for building the client-side of web applications. Translate company and customer needs into functional and appealing interactive applications.",
      descBullets: [
        "Designed and built web-based applications using ReactJS.",
        "Develop and maintain HTML-based responsive pages.",
        "Build reusable code and libraries for future use.",
        "Assure that all user input is validated before submitting to the backend.",
        "Collaborated with the team in an Agile software development environment to guide project design.",
        "Meeting up with the client for discussion of system requirements or changes to be implemented.",
        "Take part in determining the prioritization and estimation of new features and improvements.",
        "Design and review code inclusive of efficient and reusable frontend infrastructure and components.",
        "Identify and breakdown tasks then distribute it to other members as the frontend lead.",
        "Accept or reject git push requests and communicate with colleagues if there is a mistake or miscommunication.",
        "Train junior developers for best practices and coding standards.",
        "Maintain documented changes with the use of Github and MS Excel.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects I have contributed during my past jobs",
  projects: [
    {
      // image: require("./assets/images/Chronos.jpg"),
      projectName: "dj-whadmin",
      projectDesc: "An internal web application used as central system to store and send data to other applications.",
      usedStack: "Python, Django, PostgreSQL"
    },
    {
      image: require("./assets/images/Chronos.jpg"),
      projectName: "Chronos",
      projectDesc: "A mobile and internal web app developed to monitor and track couriers upon collection and deliveries.",
    },
    {
      image: require("./assets/images/alexsys-sample.JPG"),
      projectName: "Advance Logistics Express System",
      projectDesc: "Tracking of order booking upto its last transaction with cashiering, vehicle GPS tracking and user authentication.",
    },
    {
      image: require("./assets/images/pms-sample-ui.JPG"),
      projectName: "Pawnhero Management System",
      projectDesc: "Item tracking application with user authentication",

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+639859312104",
  email_address: "danhacutina@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
