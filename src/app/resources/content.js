const person = {
  firstName: "Anshul",
  lastName: "Shirude",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "apshirude28@gmail.com",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Resume",
    icon: "document",
    link: "https://drive.google.com/file/d/1Ua0dl21Ndk93xqEH8C1r4CzxHQmgV1Dr/view?usp=sharing",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AnshulShirude",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anshul-shirude/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello 👋</>,
  subline: (
    <>
      I'm Anshul, a recent graduate from Northeastern University in computer science. I am a software engineer.
      <br /> Some of my hobbies are traveling, sports, weightlifting, real estate, stocks, and so much more.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. My interests lie in data visualization,
        machine learning, artificial intelligence, and full stack development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Moody's Analytics",
        timeframe: "Aug-Dec 2024",
        role: "Full-Stack Software Developer Co-op",
        technologies: "React, Python, Docker, Jinja",
        achievements: [
          <>
            Programmed a real-time email template preview editor supporting data model translations in React, Jinja, & Python.
          </>,
          <>
            Saved ~30 minutes per email for implementation engineers to configure the appropriate email per client.
          </>,
          <>
            Migrated a new UI to enhance React application efficiency by 45% using Handsontable for Citi Bank clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Dell Technologies",
        timeframe: "May-Aug 2024",
        role: "Software Developer Intern",
        technologies: "Python, Java, MongoDB",
        achievements: [
          <>
            Created visualizations to investigate web crawler services in Python with Matplotlib to
            handle crawl failures in virtual machines.
          </>,
          <>
            Developed a REST API full-stack service connecting policies & failures integrated with
            Jira & ServiceNow in Java.
          </>,
          <>
            Resolved <strong>300k</strong> virtual machine failures (22% of crawls) by processing big data in Mongo
            Query Language.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Northeastern University",
        description: <>B.S. in Computer Science</>,
        gpa: "3.8/4.0",
        achievements: "Magna Cum Laude, Dean's List, Honors"
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Java, Python, SQL, JavScript, TypeScript, HTML, CSS, R, C#, .Net</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>React, Express, NextJS, Django, Pandas, NumPy, TensorFlow, Flask</>,
        images: [],
      },
      {
        title: "Tools",
        description: <>Git, Docker, MySQL, AWS, Linux, Postman, Firebase, JUnit, PostgreSQL, Google Cloud</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/clubs",
  label: "Clubs",
  title: "Clubs",
  description: `Read what ${person.name} has been up to recently`,
  // Create new club posts by adding a new .mdx file to app/clubs/posts
  // All posts will be listed on the /clubs route
};

const work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/posts
  // All projects will be listed on the /home and /projects routes
};

const gallery = {
  path: "/hobbies",
  label: "Hobbies",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
