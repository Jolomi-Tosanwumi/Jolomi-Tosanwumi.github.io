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
  username: "Jolomi Tosanwumi",
  title: "Hi, I'm Jolomi",
  subTitle: emoji(
    "Jolomi Tosanwumi is a data scientist 🚀 with over 5 years experience working with data. He has developed expertise in creating useful and intelligent solutions across financial services and research. He has a penchant for applying data science and machine learning in corporately solving problems and meeting organizational goals. He is self-driven, enjoys working with data, and is interested in using machine learning and deep learning for descriptive, diagnostic, predictive and prescriptive data analyses."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hYTmLs69PGepOsgF9An3L8512Efj_NQE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jolomi-Tosanwumi",
  linkedin: "https://www.linkedin.com/in/jolomitosanwumi/",
  gmail: "tjolomi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@jolomi-tosanwumi",
  twitter: "https://twitter.com/t_jolomi",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji(" Skills 🛠️"),
  subTitle: "I am Interested in Using AI to Solve Some of the World's Most Difficult Problems. I am proficient in the following:",
  skills: [
    emoji(
      "⚡ AI"
    ),
    emoji(
      "⚡ Data Science"
    ),
    emoji("⚡ Machine Learning"),
    emoji(
      "⚡ Deep Learning"
    ),
    emoji(
      "⚡ Data Analyses"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "devicon-r-plain"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "devicon-keras-plain"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "devicon-pytorch-original"
    },

    {
      skillName: "PySpark",
      fontAwesomeClassname: "devicon-apachespark-original"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "power-bi-plain"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "tableau-plain"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "devicon-numpy-plain"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "devicon-pandas-plain"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "devicon-matplotlib-plain"
    },
    {
      skillName: "Scikitlearn",
      fontAwesomeClassname: "devicon-scikitlearn-plain"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "devicon-matlab-plain"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "devicon-html5-plain"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "devicon-css3-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/UofT-logo.png"),
      subHeader: "Master of Applied Science in Industrial Engineering",
      duration: "January 2023 - December 2024",
      desc: "Research Area: Applied Machine Learning.",
      descBullets: [
        <span>Tosanwumi J. et al (2024). <a href='https://tscluster.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer"><i>tscluster</i></a>: A Python Package for the Optimal Temporal Clustering Framework. <i>(Manuscript recently accepted for publication)</i>.</span>,
        <span>Tosanwumi J. et al (2024). Predictive Time Series Clustering with Granger Causality. <i>(Manuscript submitted for publication)</i>.</span>
      ]
    },
    {
      schoolName: "University of Benin",
      logo: require("./assets/images/Uniben-logo.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering",
      duration: "March 2014 - October 2018",
      desc: "Ranked top 10% in the program. Took courses about Machine Learning, Data Analysis, Operations Research, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "D3M Lab, UofT",
      companyURL: "https://d3m.mie.utoronto.ca/",
      companylogo: require("./assets/images/UofT-logo.png"),
      date: "Jan 2023 – Dec 2024",
      descBullets: [
      <span>Researching on Novel Methodologies for Optimal Temporal Clustering at <a href="https://d3m.mie.utoronto.ca/" target="_blank" rel="noopener noreferrer"> D3M Lab</a>, University of Toronto.</span>,
      <span>Built a new python library named <a href='https://tscluster.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer"><i>tscluster</i></a>, which uses novel methodology for optimal time series clustering.</span>
    ]
},
    {
      role: <span><a href="https://engineering.calendar.utoronto.ca/course/mie223h1" target="_blank" rel="noopener noreferrer"> MIE 223 (Data Science)</a> Course Prep / Lead TA</span>,
      company: "University of Toronto",
      companyURL: "https://www.utoronto.ca/",
      companylogo: require("./assets/images/UofT-logo.png"),
      date: "Sep 2023 – Apr 2024",
      descBullets: [
        "Prepared lab material covering topics across data manipulation with Python using Pandas and Numpy; and data visualization using Matplotlib and Seaborn.",
        "Graded assignments and conducted tutorial sessions covering topics including geographical data analyzes with Geopandas; Network analyzes with Network X, Bayesian Inference with PyMC, and NLP with NLTK."
      ]
    },
    {
      role: "Data Scientist", 
      company: "Turing",
      companyURL: "https://www.turing.com/",
      companylogo: require("./assets/images/Turing-logo.png"),
      date: "May 2022 – December 2022",
      descBullets: [
        "Used Google Big Query, Mode, and Google Analytics to create dashboards for the Growth team to monitor ads and key metrics.",
        "Used Python to build an experimental machine learning model with promising increase in sales-qualified lead (SQL) rate."
      ]
    },
    {
      role: "Data Scientist",
      company: "QuickCheck",
      companyURL: "https://www.quickcheck.ng/",
      companylogo: require("./assets/images/QuickCheck-logo.png"),
      date: "Oct 2021 – Dec 2022",
      descBullets: [
        "Used Python and SQL to develop credit scoring models and machine learning models for Quickcheck and JumiaPay apps that reduced their default rates by 4%.",
        "Created dashboards for the Operations team to monitor trends and to improve operational process excellence using Metabase, Power BI."
      ]
    },
    {
      role: "Data Analytics/SQL Instructor",
      company: "Utiva",
      companyURL: "https://utiva.io/",
      companylogo: require("./assets/images/Utiva-logo.png"),
      date: "May 2021 – Dec 2022",
      descBullets: [
        <span>Tutored over 500 students (including employees of <a href="https://www.diageo.com/en" target="_blank" rel="noopener noreferrer">Diageo</a>) in data analytics with PostgreSQL which contributed to increasing hiring rate of Utiva’s students to 84%.</span>
       ]
    },
    {
      role: "Data Science Intern",
      company: "Hamoye",
      companyURL: "https://www.hamoye.com/",
      companylogo: require("./assets/images/Hamoye-logo.png"),
      date: "Jul 2020 – Dec 2020",
      descBullets: [
        "Led a team of data scientists to build a credit card fraud detection model using Tensorflow with an f1 score of 87.9%",
        "Led a team to build an LSTM model (using Tensorflow) to forecast Bitcoin prices and obtained a MAPE score of 1.79%."        
      ]
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
  title: emoji("Volunteer Activities 🙋🏾‍♂️"),
  subtitle: "Some Organizations I am a Volunteer at / have Volunteered for",
  projects: [
    {
      image: require("./assets/images/BGSA-logo.png"),
      projectName: "Black Graduate Students' Association (BGSA), University of Toronto",
      projectDesc: "President (Jul 2023 - Jul 2024)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.instagram.com/bgsa_uoft/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Africode-logo.png"),
      projectName: "Africode",
      projectDesc: "Career Mentor",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://africode.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 📜 "),
  subtitle:
    "Some certificates I obtained for some Courses",

  achievementsCards: [
    {
      title: "Honors, Scientific Computing and Python for Data Science",
      subtitle:
        "Completed the Data Science module of Worldquant University and obtained an honors for scoring 100% in all projects",
      image: require("./assets/images/WQU-logo.png"),
      imageAlt: "Google Worldquant-Unversity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://wqu.thedataincubator.com/certificate/6595294170972160"
        },
        {
          name: "Projects",
          url: "https://github.com/Jolomi-Tosanwumi/Unit_1_WQU"
        }
      ]
    },
    {
      title: "Honors, Machine Learning and Statistical Analysis",
      subtitle:
        "Completed the Machine Learning module of Worldquant University and obtained an honors for scoring 100% in all projects",
      image: require("./assets/images/WQU-logo.png"),
      imageAlt: "Google Worldquant-Unversity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://wqu.thedataincubator.com/certificate/6523638362669056"
        },
        {
          name: "Projects",
          url: "https://github.com/Jolomi-Tosanwumi/Unit_2_WQU"
        }
      ]
    },

    {
      title: "GCP Fundamentals: Core Infrastructure",
      subtitle: "Completed the Google Cloud Fundamentals course through Cousera",
      image: require("./assets/images/Googlecloud-logo.png"),
      imageAlt: "GCP Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1h4SJ5PXGqc8_LuWy8dUuqyqWRAX4yASW/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: emoji("Blogs ✍🏾"),
  subtitle:
    "With Love for Data Science, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/towards-data-science/f-beta-score-in-keras-part-i-86ad190a252f",
      title: "F-beta Score in Keras Part I",
      description:
        "Creating custom F1 score for binary classification problems in Keras"
    },
    {
      url: "https://medium.com/towards-data-science/f-beta-score-in-keras-part-ii-15f91f07c9a4",
      title: "F-beta Score in Keras Part II",
      description:
        "Creating custom F1 score for multi classification problems in Keras"
    },
    {
      url: "https://medium.com/towards-data-science/f-beta-score-in-keras-part-iii-28b1721fc442",
      title: "F-beta Score in Keras Part III",
      description:
        "Creating custom F2 score for multi-label classification problems in Keras"
    },
    {
      url: "https://medium.com/hamoye-blogs/using-vector-auto-regression-to-model-bitcoin-prices-6cae0327ac30",
      title: "Using Vector Auto-Regression to Model Bitcoin Prices",
      description:
        "Applying multivariate time series forecasting on Bitcoin data using Python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  subtitle: "Feel free to have a look at my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "tjolomi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "T_Jolomi", //Replace "twitter" with your twitter username without @
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
