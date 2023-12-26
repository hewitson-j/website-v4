const projectEntries = [
  {
    id: "0",
    title: "Case Notes App",
    description:
      "Created voluntarily for my employer in React, JSON, Javascript, and Bootstrap. It followed stakeholder constraints and reduced agent call time by 4 minutes.",
    longDescription:
      "This application was created as a project for one of my employers. Call center agents were having issues meeting their SLA expectations due to long note-taking time. I worked with my manager and our department head to create an application which hold templates of notes for common requests from customers. The product was made according to stakeholder requirements. Once deployed, the app saved an average of 4 minutes per call over the next 6 months, bringing average call time within SLA requirments.",
    technologies: ["react", "bootstrap", "typescript", "material-ui"],
    image: "/CaseNotes.jpg",
    alt: "Case Notes App",
    github: "https://github.com/hewitson-j/case-notes-library/",
  },
  {
    id: "1",
    title: "Leaps and Bounds Preschool",
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
    id: "6",
    title: "Mine Grinder Website",
    description:
      "Created for a client to market his new book, this website was made in React and TypeScript.",
    longDescription:
      "A client contacted me requesting a website for the release of their book. Originally I created the website using vanilla Javascript, HTML, and CSS, but as a duty of maintaining the site I rebuilt it using React, TypeScript, and several other technologies. The website is a single-page web application which was hosted on GitHub pages. The client purchased the domain from GoDaddy and I configured it for deployment.. After deployment the website increased demand for the client's book by 50%. ",
    technologies: [
      "React",
      "typescript",
      "GitHub",
      "Javascript",
      "HTML",
      "CSS",
    ],
    image: "/MineGrinder.jpg",
    alt: "Mine Grinder",
    link: "http://minegrinder.com",
    github: "https://github.com/hewitson-j/mine-grinder-new/",
  },
  {
    id: "2",
    title: "To-Do List",
    description:
      "A browser-based to-do list app requested by a client which allows users to add, complete, delete, and modify tasks.",
    longDescription:
      "Requested by a client, this app allows users to create, modify, delete task entries and mark them as completed. This is a browser-based application which saves task data in browser local storage rather than a database according to client requirements. Users can add in pertinent details to the task entry such as title, description, associated project, due date, when to remind about the task, etc. The app alerts users to past due and currently due tasks.",
    technologies: ["react", "typescript", "GitHub", "material-ui"],
    image: "/TodoList.jpg",
    alt: "To-Do List App",
    link: "http://hewitson-j.github.io/new-todo-list/",
    github: "https://github.com/hewitson-j/new-todo-list/",
  },
  {
    id: "3",
    title: "Pokedex Clone",
    description:
      "A web app utilizing a hosted database which allows users to find information about Pokemon.",
    longDescription:
      "I wanted to do something fun and unique for this portfolio project. The idea came to me to build a Pokedex like the kind you would see in Pokemon games with Pokemon's names, types, descriptions, and other information. I made it with an interface similar to that of the Pokedex from Pokemon Sword and Shield. I stored the data in a Postgres Database which I hosted in Supabase, and the UI which I hosted in GitHub pages fetches the data using the Supabase API.",
    technologies: [
      "react",
      "typescript",
      "GitHub",
      "css",
      "supabase",
      "postgres",
    ],
    image: "/pokedex.png",
    alt: "Pokedex Clone App",
    link: "http://hewitson-j.github.io/pokedex/",
    github: "https://github.com/hewitson-j/pokedex/",
  },
  {
    id: "4",
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
    id: "5",
    title: "Java Appointment Tracker App",
    description:
      "Created with Java, JavaFX, MySQL, and JDBC. It allows for users to create, delete, and update appointment and customer records. It has a secure login in English and French.",
    longDescription:
      "This application was created in my Software II class in university. The requirements for this project were to create an application which would register clients and appointments for a business. Appointment times were required to update according to the user's local timezone. It was also required to have a secure login page where only authorized accounts were able to log in. It was also required to have the app automatically translate its text to French depending on user language settings. Finally, it was required to generate reports on number of appointments by day, by month, and by customer. The was created according to the course requirements using Java, JavaFX for UI, SQL to store data, and a Java Database Connector API.",
    technologies: ["Java", "JavaFX", "JDBC", "MySql"],
    image: "/Software-2.jpg",
    alt: "Appointment Tracker App Image",
    github: "https://github.com/hewitson-j",
  },
];

export default projectEntries;
