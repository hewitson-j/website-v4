type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  alt: string;
  github: string;
  link?: string; // Optional property
};

const caseNotesApp: ProjectEntry = {
  id: "0",
  title: "Case Notes App",
  description:
    "Created voluntarily for my employer in React, JSON, Typescript, and Bootstrap. It followed stakeholder constraints and reduced agent call time by 4 minutes.",
  longDescription:
    "This application was created as a project for one of my employers. Call center agents were having issues meeting their SLA expectations due to long note-taking time. I worked with my manager and our department head to create an application which hold templates of notes for common requests from customers. The product was made according to stakeholder requirements. Although not ultimately adopted, test runs with the app indicated that the app was projected to save an average of 4 minutes per call, bringing average call time within SLA requirments.",
  technologies: [
    "react",
    "bootstrap",
    "typescript",
    "css",
    "html",
    "material-ui",
  ],
  image: "/CaseNotes.jpg",
  alt: "Case Notes App",
  github: "https://github.com/hewitson-j/",
};

const pokedexClone: ProjectEntry = {
  id: "1",
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
};

const leapsAndBoundsPreschool: ProjectEntry = {
  id: "2",
  title: "Leaps and Bounds Preschool",
  description:
    "Created for a client, this website was made in React using Bootstrap and Material UI.",
  longDescription:
    "A client contacted me requesting a website for their business. I created the website using React, Bootstrap, and several other technologies. The website is a single-page web application which was hosted on GitHub pages. The domain was purchased and configured from Google Domains. After deployment the website was added to the client's Colorado Universal Pre-K profile. This website led to an increase in demand for their services.",
  technologies: ["React", "Bootstrap", "Javascript", "GitHub", "HTML", "CSS"],
  image: "/NewLaB.jpg",
  alt: "Leaps and Bounds Website Image",
  link: "https://www.leapsandboundsprek.com",
  github: "https://github.com/hewitson-j/leaps-and-bounds/",
};

const memoryLibrary: ProjectEntry = {
  id: "3",
  title: "Memory Library",
  description:
    "A web app utilizing a hosted database which allows users to look through family photo albums and scrapbooks.",
  longDescription:
    "I go to visit my grandparents fairly frequently and over the years they've taken many photos and made tons of scrapbooks. My grandmother is proud of the work she's done but felt a little bit sad that when she and my grandfather pass away there might not be any interest in our family to keep the scrapbooks or that if there is we will all be in different places as people grow in their careers and move away from home. I got to thinking how would we be able to make it so that anyone interested could see family photos and memories and came up with the idea to make a repository where anyone in the family could go online and pull up the pictures in a photo library. I developed an app called the Memory Library where members of my family could do just that. The app allows users to go in and look at scanned photo albums. I implemented a Postgres Database and storage hosted on Supabase. The app uses the Supabase API to make queries and manage authentication for users so that the images are secure and random people or bad actors can't access our data. The frontend and UI are hosted on GitHub Pages.",
  technologies: [
    "react",
    "typescript",
    "GitHub",
    "css",
    "supabase",
    "postgres",
  ],
  image: "/MemoryLibrary.jpg",
  alt: "Memory Library",
  link: "http://hewitson-j.github.io/memory-repository/",
  github: "https://github.com/hewitson-j/memory-repository/",
};

const mineGrinderWebsite: ProjectEntry = {
  id: "4",
  title: "Mine Grinder Website",
  description:
    "Created for a client to market his new book, this website was made in React and TypeScript.",
  longDescription:
    "A client contacted me requesting a website for the release of their book. Originally I created the website using vanilla Javascript, HTML, and CSS, but as a duty of maintaining the site I rebuilt it using React, TypeScript, and several other technologies. The website is a single-page web application which was hosted on GitHub pages. The client purchased the domain from GoDaddy and I configured it for deployment.. After deployment the website increased demand for the client's book by 50%. ",
  technologies: ["React", "typescript", "GitHub", "Javascript", "HTML", "CSS"],
  image: "/MineGrinder.jpg",
  alt: "Mine Grinder",
  link: "http://minegrinder.com",
  github: "https://github.com/hewitson-j/mine-grinder-new/",
};

const todoApp: ProjectEntry = {
  id: "5",
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
};

const reactCalculator: ProjectEntry = {
  id: "6",
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
};

const javaAppointmentTracker: ProjectEntry = {
  id: "7",
  title: "Java Appointment Tracker App",
  description:
    "Created with Java, JavaFX, MySQL, and JDBC. It allows for users to create, delete, and update appointment and customer records. It has a secure login in English and French.",
  longDescription:
    "This application was created in my Software II class in university. The requirements for this project were to create an application which would register clients and appointments for a business. Appointment times were required to update according to the user's local timezone. It was also required to have a secure login page where only authorized accounts were able to log in. It was also required to have the app automatically translate its text to French depending on user language settings. Finally, it was required to generate reports on number of appointments by day, by month, and by customer. The was created according to the course requirements using Java, JavaFX for UI, SQL to store data, and a Java Database Connector API.",
  technologies: ["Java", "JavaFX", "JDBC", "MySql"],
  image: "/Software-2.jpg",
  alt: "Appointment Tracker App Image",
  github: "https://github.com/hewitson-j",
};

const javaInventoryTracker: ProjectEntry = {
  id: "8",
  title: "Java Inventory Tracker",
  description:
    "An intuitive JavaFX-based inventory tracker for managing products, stock levels, and pricing with real-time updates and validation.",
  longDescription:
    "The Inventory Tracker is a desktop application built using JavaFX that enables users to manage an inventory of products, including tracking product names, stock levels, and pricing. The application features a responsive user interface with editable fields, input validation, and formatted data presentation in table views. Key technologies include Java, JavaFX, and Scene Builder for UI design. The project demonstrates skills in object-oriented programming (OOP), UI/UX design, data validation, and event-driven programming, showcasing the ability to create robust, user-friendly applications with real-world functionality.",
  technologies: ["Java", "JavaFx"],
  image: "/InventoryTracker.png",
  alt: "Inventory Tracker Image",
  github: "https://github.com/hewitson-j/JavaInventoryTracker",
};

const reactNativeCalculator: ProjectEntry = {
  id: "9",
  title: "RapidCalc - React Native Mobile App",
  description:
    "A lightweight React Native calculator app for mobile devices, capable of performing addition, subtraction, multiplication, and division.",
  longDescription:
    "This mobile calculator app, built using React Native, provides a simple and intuitive interface for performing basic arithmetic operations, including addition, subtraction, multiplication, and division. The app demonstrates a strong understanding of React Native’s core functionality, component lifecycle, and state management. With its minimalist design and efficient implementation, the project showcases skills in mobile app development, UI/UX design for touch-based interfaces, and building lightweight applications from the ground up. The app will be published soon to the Google Play and Apple App Stores, making it accessible for both Android and iOS users.",
  technologies: ["react", "Typescript"],
  image: "/RapidCalc.png",
  alt: "Inventory Tracker Image",
  github: "https://github.com/hewitson-j/react-native-calculator",
};

const cloudResumeChallenge: ProjectEntry = {
  id: "10",
  title: "AWS Cloud Resume",
  description:
    "A serverless, full-stack resume website as part of the AWS Cloud Resume Challenge. Leveraged AWS services such as S3, CloudFront, Lambda, API Gateway, DynamoDB, and IAM to create a scalable and cost-efficient solution.",
  longDescription:
    "As part of the AWS Cloud Resume Challenge, I developed a serverless, full-stack resume website to showcase my skills in cloud architecture and DevOps. The project involved hosting a static frontend on Amazon S3, distributing content via CloudFront, and implementing a backend using AWS Lambda, API Gateway, and DynamoDB to track visitor count. I managed security and permissions with IAM, configured CI/CD pipelines using GitHub Actions, and deployed infrastructure using Terraform for automation and reproducibility. This project deepened my understanding of AWS services, serverless architecture, and best practices in cloud development.",
  technologies: ["javascript", "css", "html", "aws"],
  image: "/CloudResume.png",
  alt: "Cloud Resume Image",
  link: "http://jacobhewitsonresume.com",
  github: "https://github.com/hewitson-j/react-native-calculator",
};

export const featuredProjects = [
  cloudResumeChallenge,
  caseNotesApp,
  leapsAndBoundsPreschool,
  javaInventoryTracker,
  reactNativeCalculator,
];

export const allProjectEntries = [
  caseNotesApp,
  cloudResumeChallenge,
  leapsAndBoundsPreschool,
  mineGrinderWebsite,
  todoApp,
  pokedexClone,
  memoryLibrary,
  reactCalculator,
  javaAppointmentTracker,
  javaInventoryTracker,
  reactNativeCalculator,
];

export const professionalProjectEntries = [
  cloudResumeChallenge,
  leapsAndBoundsPreschool,
  mineGrinderWebsite,
  caseNotesApp,
  todoApp,
  javaAppointmentTracker,
];

export const portfolioProjectEntries = [
  cloudResumeChallenge,
  pokedexClone,
  memoryLibrary,
  reactCalculator,
  javaInventoryTracker,
  reactNativeCalculator,
];
