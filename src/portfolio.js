/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "FedericoArias",
  title: "Hi all, I'm Federico",
  subTitle: emoji(
    "A passionate Software Engineering student with a solid background in software development, data analysis, and relational databases. I have worked on projects that integrate multiple languages and technologies such as PHP, Python, Angular, React, HTML and CSS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/federicoarias98",
  linkedin: "https://linkedin.com/in/federico-arias-ruiz-9216b1340",
  gmail: "ariasf91@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "APASSIONATE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Development of highly interactive software solutions, including interfaces for web applications, mobile apps, and Big Data systems."),
    emoji("⚡ Implementation of relational and non-relational databases with MySQL, PostgreSQL, and optimization of SQL queries for data science and software development projects."),
    emoji("⚡ Integration of cloud services such as AWS and data visualization tools like Power BI for advanced analytics and strategic visualization.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Colegio Mundos Posibles",
      logo: require("./assets/images/mp_logo.jpg"),
      subHeader: "High School Graduate",
      duration: "2004 - 2016",
      desc: "Graduated from high school with a solid academic foundation, where I participated in various cultural and sports activities. These experiences helped me develop key skills such as teamwork, leadership, and time management.",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      schoolName: "Corporacion Universitaria Iberoamericana",
      logo: require("./assets/images/Ibero_logo.jpg"),
      subHeader: "Software Engineering",
      duration: "2024 - now",
      desc: "Currently pursuing a degree in Software Engineering at a recognized university, with a focus on key areas like Software Engineering, Web Security, and Operating Systems. I have demonstrated strong performance in my courses and actively participate in university projects to enhance my practical skills.",
      /*descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Development ", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL & Database Management ",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Services & Data Visualization",
      progressPercentage: "75%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Support Asssitant",
      company: "Xarasoft SAS",
      companylogo: require("./assets/images/xarasoft.jpg"),
      date: "2016 – 2017",
      desc: "Provided technical support to clients, resolving software-related issues and maintaining high customer satisfaction. Collaborated with the development team to identify and fix bugs, enhancing software stability. Trained users on new features, promoting efficient adoption of tools by clients. Documented processes and solutions in a knowledge base, ensuring efficient access to key information for the support team.",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      role: "Technician",
      company: "AVD Colombia",
      companylogo: require("./assets/images/avd.jpg"),
      date: "2021 – 2023",
      desc: "Installed and configured security camera systems and audiovisual equipment in various judicial facilities nationwide, ensuring proper functionality. Diagnosed and repaired equipment, reducing downtime and ensuring customer satisfaction. Provided client training and guidance on equipment use and maintenance. Collaborated on project planning and execution, meeting deadlines effectively as part of a team."
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications  "),
  /*subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    */
  achievementsCards: [
    {
      title: "Python for Data Science",
      subtitle:
        "I've mastered Python for Data Science, focusing on data analysis, visualization, and machine learning to solve real-world problems.",
      image: require("./assets/images/python.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9fef3c47c20a4d8382304ac989b0c11b"
        },
      ]
    },
    {
      title: "SQL and Relational Databases",
      subtitle:
        "I've developed expertise in SQL and Relational Databases, enabling efficient data management and complex queries for structured data.",
      image: require("./assets/images/sql.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/57e5fed877b0456b8e8457edc413b408"
        }
      ]
    },
    {
      title: "JavaScript Essentials",
      subtitle: "Through mastering JavaScript Essentials, I can now craft dynamic web applications that deliver engaging and seamless user experiences.",
      image: require("./assets/images/JavaScript.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.netacad.com/es/certificates?issuanceId=4fc81df8-ff54-4fe1-b912-23878c5150c4"
        }
      ]
    },
    {
      title: "Big Data",
      subtitle: "Specializing in Big Data, I leverage advanced techniques to process and analyze massive datasets, uncovering valuable insights for data-driven decision-making.",
      image: require("./assets/images/Bigdata.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/3396433e4dba4b67a9621b665ed9bf1b"
        }
      ]
    },
    {
      title: "Ethical Hacker",
      subtitle: "With expertise in Ethical Hacking, I am equipped to identify vulnerabilities and secure systems, ensuring robust protection against cyber threats.",
      image: require("./assets/images/EthicalHacker.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/318bf2c5-b408-46a8-8a3d-15d5e2ac426b"
        }
      ]
    },
    {
      title: "Data Science",
      subtitle: "Skilled in Data Science, I apply statistical analysis, machine learning, and data visualization to extract meaningful insights and drive informed decisions.",
      image: require("./assets/images/DataScience.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9e57ea3707664529bdd509f1ca27ad3d"
        }
      ]
    },
    {
      title: "Elementos of AI",
      subtitle: "Through the 'Elements of AI' course from the University of Helsinki, I gained foundational knowledge in artificial intelligence, exploring key concepts and applications in real-world scenarios.",
      image: require("./assets/images/AI.jpg"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.mooc.fi/validate/f603toa833e"
        }
      ]
    },
    {
      title: "Cloud Essentials by IBM",
      subtitle: "Cloud Essentials by YBM provided me with a solid understanding of cloud computing, focusing on key concepts, deployment models, and cloud services to drive scalable solutions.",
      image: require("./assets/images/cloud.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9cb87ce57d424dae8e6f4f639c5f0b56"
        }
      ]
    },
    {
      title: "Machine Learning Modelling",
      subtitle: "With expertise in Machine Learning Modeling, I design and implement algorithms to train models, predict outcomes, and optimize performance for data-driven solutions.",
      image: require("./assets/images/machine.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mygreatlearning.com/certificate/RYZPMCIY"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📞 "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57-314-849-0885",
  email_address: "ariasfederico.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
