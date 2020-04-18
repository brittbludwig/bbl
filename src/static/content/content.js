const content = [
  {
    name: "Intro",
    id: "section1",
    header: "Hi there.",
    content: [
      "My name is Brittany.",
      "I'm a front end engineer living in Los Angeles with 10 years industry experience.",
    ],
    formText: "What's your name?",
  },
  {
    name: "Resume",
    id: "section2",
    header: "Places I've worked",
    formText: "What is your job?",
    resume: [
      {
        place: "ConsumerTrack",
        date: "10/2019 - 03/2020",
      },
      {
        place: "Deloitte Digital",
        date: "05/2016 - 10/2019",
      },
      {
        place: "Canyon Design Group",
        date: "10/2014 - 04/2016",
      },
      {
        place: "...and company",
        date: "03/2012 - 09/2014",
      },
      {
        place: "Tuesday Creative",
        date: "10/2009 - 03/2012",
      },
      {
        place: "Oskoui+Oskoui",
        date: "09/2007 - 12/2008",
      },
    ],
  },
  {
    name: "Skills",
    id: "section3",
    header: "Skills",
    formText: "Filter",
    skills: [
      {
        name: "HTML",
        type: "languages",
      },
      {
        name: "Javascript (ES5 & ES6)",
        type: "languages",
      },
      {
        name: "JSON",
        type: "languages",
      },
      {
        name: "AJAX",
        type: "languages",
      },
      {
        name: "CSS",
        type: "languages",
      },
      {
        name: "PHP",
        type: "languages",
      },
      {
        name: "MySQL",
        type: "languages",
      },
      {
        name: "NodeJs",
        type: "languages",
      },
      {
        name: "XSL/XML",
        type: "languages",
      },
      {
        name: "React",
        type: "libraries",
      },
      {
        name: "Vue",
        type: "libraries",
      },
      {
        name: "Typescript",
        type: "libraries",
      },
      {
        name: "jQuery",
        type: "libraries",
      },
      {
        name: "Material UI",
        type: "libraries",
      },
      {
        name: "ReactStrap",
        type: "libraries",
      },
      {
        name: "Angular (1, 2, 8)",
        type: "libraries",
      },
      {
        name: "Sass/SCSS",
        type: "libraries",
      },
      {
        name: "Gulp",
        type: "libraries",
      },
      {
        name: "Stylus",
        type: "libraries",
      },
      {
        name: "Bootstrap",
        type: "libraries",
      },
      {
        name: "Foundation",
        type: "libraries",
      },
      {
        name: "Greensock/TweenMax",
        type: "libraries",
      },
      {
        name: "Snap.svg",
        type: "libraries",
      },
      {
        name: "Google Tag Manager",
        type: "apis",
      },
      {
        name: "Youtube API",
        type: "apis",
      },
      {
        name: "Facebook API",
        type: "apis",
      },
      {
        name: "Twitter API",
        type: "apis",
      },
      {
        name: "PayPal API",
        type: "apis",
      },
      {
        name: "Google Maps API",
        type: "apis",
      },
      {
        name: "Mass Relevance API",
        type: "apis",
      },
      {
        name: "Salesforce",
        type: "crms",
      },
      {
        name: "Wordpress",
        type: "crms",
      },
      {
        name: "Gigya",
        type: "crms",
      },
      {
        name: "Contentful",
        type: "crms",
      },
      {
        name: "Shopify",
        type: "crms",
      },
      {
        name: "Squarespace",
        type: "crms",
      },
      {
        name: "Teamsite",
        type: "crms",
      },
      {
        name: "Photoshop",
        type: "programs",
      },
      {
        name: "Sketch",
        type: "programs",
      },
      {
        name: "Zeplin",
        type: "programs",
      },
      {
        name: "Scrum",
        type: "programs",
      },
      {
        name: "Agile",
        type: "programs",
      },
      {
        name: "Jira",
        type: "programs",
      },
      {
        name: "Git",
        type: "programs",
      },
      {
        name: "Scrum Master",
        type: "certifications",
      },
      {
        name: "SAFe Agilist",
        type: "certifications",
      },
    ],
  },
  {
    name: "Clients",
    id: "section4",
    header: "Clients",
    formText: "Pick an adverb",
    clients: [
      "Walmart",
      "Humana",
      "PayPal",
      "Disney",
      "State of California",
      "Republic Services",
      "Amgen",
      "Casey's General Store",
      "Warner Bros",
      "Starz",
      "Universal",
      "Sony",
      "IMAX",
      "Fremantle",
      "Dignity Memorial",
      "20th Century Fox",
      "The Recording Company/Grammys",
      "Magical Elves Productions",
      "Paradox Entertainment",
      "Burke Williams",
    ],
  },
  {
    name: "About",
    id: "section5",
    content: [
      {
        text:
          "I've been making websites since the mid-90's, when I discovered AOL Publisher and what \"View Source\" meant. I'm self-taught, and since those days early days of making online 'zines and blogging before the word blog existed, I've worked for some of the biggest names in entertainment, retail, financial services and pharmaceuticals. I'm always looking for new challenges, up for learning a new library or framework, and have years of experience working on projects from simple email templates to large-scale, consumer-facing, enterprise level applications. I'd love to talk to you about whatever project you have, large or small.",
      },
      {
        text:
          "I currently live in Los Angeles with my real-life Garfield cat, Reggie, and love music, macrame, and all things outer space.",
      },
      { text: "Pick a noun" },
    ],
  },
  {
    name: "Links",
    id: "section6",
    content: [{ text: "Pick an adjective" }],
  },
  {
    name: "Contact",
    id: "section7",
    inspiration: ["David Bowie", "Prince", "Bob Ross"],
  },
];

export default content;
