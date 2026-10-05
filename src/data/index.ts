import portfolio from "../content/portfolio.json";

export const projects = portfolio.projects;

export const skills = [
  {
    icon: "⚙️",
    name: "Backend",
    dot: "v",
    items: [
      "C# / ASP.NET Core",
      "Clean Architecture",
      "RESTful API Design",
      "SOAP / XML Services",
      "Entity Framework / LINQ",
      "Role-Based Authorization",
      "Task Parallelism",
      "AutoMapper",
    ],
  },
  {
    icon: "🖥️",
    name: "Frontend",
    dot: "s",
    items: [
      "React (TypeScript)",
      "Redux / RTK Query",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Shadcn UI",
      "Vite",
      "HTML / CSS / JavaScript",
    ],
  },
  {
    icon: "🤖",
    name: "AI & Data",
    dot: "e",
    items: [
      "Python",
      "CNN / Deep Learning",
      "YOLOv5 (Object Detection)",
      "Scikit-learn",
      "Pandas / NumPy",
      "SVC / Neural Networks",
      "Logistic Regression",
      "Jupyter Notebook",
    ],
  },
  {
    icon: "📱",
    name: "Mobile & Other",
    dot: "a",
    items: [
      "Flutter / Dart",
      "Bloc / Cubit",
      "MySQL / SQL",
      "Git / GitHub",
      "PHP",
      "Dynamsoft Barcode SDK",
      "ML Kit",
      "Cybersecurity Basics",
    ],
  },
];

export const socials = [
  {
    icon: "🐙",
    name: "GitHub",
    url: "https://github.com/ilknrgzll",
    display: "github.com/ilknrgzll",
  },
  {
    icon: "💼",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ilknrgzl/",
    display: "linkedin.com/in/ilknrgzl",
  },
  {
    icon: "✍️",
    name: "Medium",
    url: "https://medium.com/@ilknrgzl",
    display: "medium.com/@ilknrgzl",
  },
  // { icon:'📊', name:'Kaggle',    url:'https://www.kaggle.com/ilknrgzl',             display:'kaggle.com/ilknrgzl' },
  // { icon:'📸', name:'Instagram', url:'https://www.instagram.com/ilknrgzl/',         display:'instagram.com/ilknrgzl' },
  {
    icon: "✉️",
    name: "Email",
    url: "mailto:ilknrgzl99@gmail.com",
    display: "ilknrgzl99@gmail.com",
  },
];
