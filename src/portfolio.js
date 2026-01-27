import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "FedericoArias",
  title: "Full Stack Developer & Product Architect",
  subTitle: emoji(
    "Full Stack Developer with a strong focus on product architecture and scalable system design. I build production-ready platforms that balance technical robustness, user experience, and real business needs across multiple industries.",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/federicoarias98",
  linkedin: "https://linkedin.com/in/federico-arias-ruiz-9216b1340",
  gmail: "ariasf91@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I Build",
  subTitle: "Designing and building scalable digital platforms",
  skills: [
    emoji(
      "⚡ Design and development of full-stack digital platforms, focusing on product architecture, scalability, and long-term maintainability.",
    ),
    emoji(
      "⚡ Translation of business requirements into structured systems and reliable software solutions used in real production environments.",
    ),
    emoji(
      "⚡ Implementation of robust backend systems, databases, and integrations to support complex workflows and data-driven operations.",
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Iberoamericana University",
      logo: require("./assets/images/Ibero_logo.jpg"),
      subHeader: "B.S. in Software Engineering (In Progress)",
      duration: "2024 – Present",
      desc: "Formal academic training in software engineering with emphasis on system design, web security, and operating systems. The program complements hands-on experience building real-world digital platforms and production systems.",
    },
    {
      schoolName: "Mundos Posibles High School",
      logo: require("./assets/images/mp_logo.jpg"),
      subHeader: "High School Diploma",
      duration: "2004 – 2016",
      desc: "Completed secondary education with a strong academic foundation and early exposure to teamwork, discipline, and structured learning.",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Platform & Software Architecture",
      progressPercentage: "85%",
    },
    {
      Stack: "Backend & Database Systems",
      progressPercentage: "80%",
    },
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "75%",
    },
    {
      Stack: "Web Application Development",
      progressPercentage: "80%",
    },
  ],

  displayCodersrank: false,
};

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer / E-commerce Builder",
      company: "Henku",
      companylogo: require("./assets/images/henku.png"),
      date: "2023",
      desc: "E-commerce platform developed for a consumer brand focused on personal care products. Designed and implemented the website to showcase products, manage online sales, and communicate brand identity. Built product pages with detailed descriptions, pricing, and visuals, ensuring a smooth user experience. Participated in the digital launch of the brand, supporting online presence and product distribution through the web platform.",
    },
    {
      role: "Full Stack Developer / Product Builder",
      company: "TrueMatch",
      companylogo: require("./assets/images/truematch.png"),
      date: "2024",
      desc: "Social dating platform designed to connect users through meaningful interactions in a digital environment. The project focused on building an engaging, scalable product that blends social networking, real-time interaction, and digital monetization. TrueMatch was developed with a strong emphasis on user experience, platform flow, and product architecture, aiming to deliver a complete and immersive online dating experience.",
    },
    {
      role: "Full Stack Developer / Product Builder",
      company: "AcadSuite",
      companylogo: require("./assets/images/xarasoft.png"),
      date: "2024",
      desc: "Web-based educational management platform built to optimize academic and administrative workflows for educational institutions. The project focused on maintaining and evolving a production-ready system, improving stability, performance, and usability. Real user feedback played a key role in shaping continuous improvements, strengthening platform reliability, adoption, and overall user experience.",
    },
    {
      role: "Full Stack Developer / Product Architect",
      company: "VitalOS",
      companylogo: require("./assets/images/vitalos.png"),
      date: "2025",
      desc: "Digital healthcare management platform designed to support operational workflows within medical and clinical environments. The project focused on building a structured, secure, and scalable system capable of handling sensitive processes and role-based interactions. VitalOS emphasizes system reliability, user experience, and modular architecture, aiming to deliver a robust foundation for healthcare operations and future growth.",
    },
    {
      role: "Full Stack Developer / Product Builder",
      company: "PINMB",
      companylogo: require("./assets/images/pinmb.png"),
      date: "2025",
      desc: "Digital proptech platform conceived to explore modern approaches to real estate investment through technology. The project focused on product architecture, user trust, and scalable system design, aiming to deliver a transparent and accessible investment experience. PINMB was developed as an MVP with a strong emphasis on platform structure, long-term scalability, and product strategy.",
    },
    {
      role: "Full Stack Developer / Product Builder",
      company: "BigToys",
      companylogo: require("./assets/images/bigtoys.png"),
      date: "2025",
      desc: "Specialized e-commerce platform developed for a niche consumer market, focused on delivering a structured, reliable, and scalable online shopping experience. The project emphasized product organization, operational flow, and user experience, supporting both customer interaction and business operations. BigToys was built as a production-ready digital storefront with a strong focus on long-term maintainability and growth.",
    },
    /* {
      role: "Full Stack Developer / Product Architect",
      company: "LivingTrips",
      companylogo: require("./assets/images/livingtrips.png"),
      date: "Coming Soon",
      desc: "Internal B2B platform designed as the core operational and commercial system for professional tour operators. LivingTrips was conceived as a modular, scalable solution to manage complex travel operations through structured workflows and controlled processes. The project emphasizes product architecture, long-term evolution, and system reliability, serving as a foundational platform for enterprise-level travel management.",
    },*/
  ],
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Selected product platforms and systems I have built",
  projects: [
    {
      image: require("./assets/images/sirio.jpeg"),
      projectName: "Sirio Miner Group",
      projectRole: "Full Stack Developer / Technical Partner",
      projectDesc:
        "Mining operations and investment management platform built to deliver transparent performance metrics, structured ownership models, and scalable infrastructure for mining-based businesses.",
      footerLink: [],
    },
    {
      image: require("./assets/images/livingtrips.png"),
      projectName: "LivingTrips",
      projectRole: "Full Stack Developer / Product Architect",
      projectDesc:
        "Internal B2B platform designed as the core operational and commercial system for professional tour operators, focused on modular architecture, reliability, and long-term scalability.",
      footerLink: [],
    },
    {
      image: require("./assets/images/vitalos.png"),
      projectName: "VitalOS",
      projectRole: "Full Stack Developer / Product Architect",
      projectDesc:
        "Digital healthcare management platform built to support clinical operations through structured workflows, role-based interactions, and a secure, scalable foundation for growth.",
      footerLink: [],
    },
    {
      image: require("./assets/images/pinmb.png"),
      projectName: "PINMB",
      projectRole: "Full Stack Developer / Product Builder",
      projectDesc:
        "Digital proptech MVP exploring modern real estate investment experiences with an emphasis on platform structure, user trust, and scalable product design.",
      footerLink: [],
    },
    {
      image: require("./assets/images/bigtoys.png"),
      projectName: "BigToys",
      projectRole: "Full Stack Developer / Product Builder",
      projectDesc:
        "Specialized e-commerce platform built for a niche retail market, focused on structured shopping flow, operational reliability, and long-term maintainability.",
      footerLink: [],
    },
    {
      image: require("./assets/images/truematch.png"),
      projectName: "TrueMatch",
      projectRole: "Full Stack Developer / Product Builder",
      projectDesc:
        "Social dating platform designed to connect users through meaningful interactions, blending social networking, real-time engagement, and digital monetization within a scalable product experience.",
      footerLink: [],
    },
    {
      image: require("./assets/images/henku.png"),
      projectName: "Henku",
      projectRole: "Full Stack Developer / E-commerce Builder",
      projectDesc:
        "E-commerce platform developed for a personal care brand, focused on product presentation, online sales, and a consistent brand experience through a clean storefront and catalog.",
      footerLink: [],
    },
    {
      image: require("./assets/images/xarasoft.png"),
      projectName: "AcadSuite",
      projectRole: "Full Stack Developer / Product Builder",
      projectDesc:
        "Educational management platform optimized for academic and administrative workflows, strengthened through continuous improvements focused on stability, usability, and real user feedback.",
      footerLink: [],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Certifications & Professional Training"),
  /*subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    */
  achievementsCards: [
    {
      title: "Python for Data Science",
      subtitle:
        "Professional training in Python applied to data analysis, visualization, and machine learning, supporting data-driven features and system insights within software platforms.",
      image: require("./assets/images/python.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9fef3c47c20a4d8382304ac989b0c11b",
        },
      ],
    },
    {
      title: "SQL and Relational Databases",
      subtitle:
        "Formal training in relational databases and SQL, reinforcing efficient data modeling, query optimization, and reliable data management for production systems.",
      image: require("./assets/images/sql.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/57e5fed877b0456b8e8457edc413b408",
        },
      ],
    },
    {
      title: "JavaScript Essentials",
      subtitle:
        "Foundational certification in JavaScript, supporting the development of dynamic and maintainable web applications.",
      image: require("./assets/images/JavaScript.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.netacad.com/es/certificates?issuanceId=4fc81df8-ff54-4fe1-b912-23878c5150c4",
        },
      ],
    },
    {
      title: "Big Data",
      subtitle:
        "Training in Big Data concepts and data processing techniques, strengthening understanding of large-scale data handling and analytics.",
      image: require("./assets/images/Bigdata.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/3396433e4dba4b67a9621b665ed9bf1b",
        },
      ],
    },
    {
      title: "Ethical Hacker",
      subtitle:
        "Certification in Ethical Hacking focused on identifying vulnerabilities and securing systems, complementing the design of robust and secure digital platforms.",

      image: require("./assets/images/EthicalHacker.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/318bf2c5-b408-46a8-8a3d-15d5e2ac426b",
        },
      ],
    },
    {
      title: "Data Science",
      subtitle:
        "Professional training in data science methodologies, supporting analytical thinking and data-informed decision-making in software products.",
      image: require("./assets/images/DataScience.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9e57ea3707664529bdd509f1ca27ad3d",
        },
      ],
    },
    {
      title: "Elementos of AI",
      subtitle:
        "Foundational training in artificial intelligence concepts, enhancing understanding of AI-driven features and modern system capabilities.",
      image: require("./assets/images/AI.jpg"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.mooc.fi/validate/f603toa833e",
        },
      ],
    },
    {
      title: "Cloud Essentials by IBM",
      subtitle:
        "Cloud computing fundamentals certification, reinforcing knowledge of cloud services, deployment models, and scalable infrastructure design.",
      image: require("./assets/images/cloud.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.cognitiveclass.ai/certificates/9cb87ce57d424dae8e6f4f639c5f0b56",
        },
      ],
    },
    {
      title: "Machine Learning Modelling",
      subtitle:
        "Training in machine learning modeling techniques, providing a solid foundation for building and understanding predictive systems.",
      image: require("./assets/images/machine.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mygreatlearning.com/certificate/RYZPMCIY",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

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
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let’s Work Together"),
  subtitle:
    "Open to discussing product development, platform architecture, or long-term technical collaborations. Feel free to reach out.",
  number: "+57-314-849-0885",
  email_address: "ariasfederico.dev@gmail.com",
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
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
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
