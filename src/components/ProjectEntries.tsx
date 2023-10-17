const projectEntries = [
  {
    id: "0",
    title: "Case Notes App",
    description:
      "Created voluntarily for my employer in React, JSON, Javascript, and Bootstrap. It followed stakeholder constraints and reduced agent call time by 4 minutes.",
    longDescription:
      "This application was created as a project for one of my employers. Call center agents were having issues meeting their SLA expectations due to long note-taking time. I worked with my manager and our department head to create an application which hold templates of notes for common requests from customers. The product was made according to stakeholder requirements. Once deployed, the app saved an average of 4 minutes per call over the next 6 months, bringing average call time within SLA requirments.",
    technologies: ["react", "bootstrap", "javascript", "json", "material-ui"],
    image: "/CaseNotes.jpg",
    alt: "Case Notes App",
    github: "https://github.com/hewitson-j/react-calculator/",
  },
  {
    id: "1",
    title: "React Calculator",
    description:
      "This calculator was made in React using Material UI Components. It is a simple calculator which allows the user to add, subtract, multiply, and divide.",
    longDescription:
      "Originally this application was created in HTML, CSS, and vanilla Javascript. Later, I decided to recreate this project in React. This application is able to take any two operands and perform a mathematical operation on it. I used Material UI components and CSS for the UI. I used React's useState and useEffect hooks to add the logic to the calculator. I deployed the app on GitHub Pages.",
    technologies: [
      "React",
      "Bootstrap",
      "Javascript",
      "CSS",
      "GitHub",
      "Material-UI",
    ],
    image: "/NewCalculator.jpg",
    alt: "Calculator App Image",
    link: "https://hewitson-j.github.io/react-calculator/",
    github: "https://github.com/hewitson-j/react-calculator/",
  },
  {
    id: "2",
    title: "Leaps and Bounds Preschool Website",
    description:
      "Created for a client, this website was made in React using Bootstrap and Material UI.",
    longDescription:
      "A client contacted me requesting a website for their business. I created the website using React, Bootstrap, and several other technologies. The website is a single-page web application which was hosted on GitHub pages. The domain was purchased and configured from Google Domains. After deployment the website was added to the client's Colorado Universal Pre-K profile. This website led to an increase in demand for their services.",
    technologies: ["React", "Bootstrap", "Javascript", "GitHub", "HTML", "CSS"],
    image: "/leapsandbounds.jpg",
    alt: "Leaps and Bounds Website Image",
    link: "https://www.leapsandboundsprek.com",
    github: "https://github.com/hewitson-j/leaps-and-bounds/",
  },
  {
    id: "3",
    title: "Java Appointment Tracker App",
    description:
      "Created with Java, JavaFX, MySQL, and JDBC. It allows for users to create, delete, and update appointment and customer records. It has a secure login in English and French.",
    longDescription:
      "This application was created in my Software II class in university. The requirements for this project were to create an application which would register clients and appointments for a business. Appointment times were required to update according to the user's local timezone. It was also required to have a secure login page where only authorized accounts were able to log in. It was also required to have the app automatically translate its text to French depending on user language settings. \n\nThe was created according to the course requirements using Java, JavaFX for UI, SQL to store data, and a Java Database Connector API",
    technologies: ["Java", "JavaFX", "JDBC", "MySql"],
    image: "/Software-2.jpg",
    alt: "Appointment Tracker App Image",
    github: "https://github.com/hewitson-j",
  },
];

export default projectEntries;
