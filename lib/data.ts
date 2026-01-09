import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGlobe,
  FaVideo,
  FaLock,
  FaMobileAlt,
  FaServer,
  FaLaptopCode,
  FaBroadcastTower,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiLinux,
  SiPostman,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ramathperera",
    color: "hover:text-blue-400",
  },
  {
    id: "github",
    icon: FaGithub,
    href: "https://github.com/ramathperera",
    color: "hover:text-purple-400",
  },
  {
    id: "hackerrank",
    icon: FaHackerrank,
    href: "https://www.hackerrank.com/profile/ramath_perera08",
    color: "hover:text-green-400",
  },
];

export const CONTACT_DETAILS = {
  email: "ramath.perera08@gmail.com",
  phone: "+94 71 693 3522",
  location: "Panadura, Sri Lanka",
};

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Linux", icon: SiLinux },
      { name: "GNU Radio", icon: FaBroadcastTower },
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "University of Colombo School of Computing",
    logo: "/logos/ucsc.png",
    degree: "B.Sc. (Hons) in Computer Science",
    period: "2022 - Present (Exp. 2026)",
    gpa: "Current GPA: 3.5055",
    desc: "Reading for a special degree in Computer Science, focusing on advanced software architectures and systems programming.",
  },
  {
    id: 2,
    institution: "Piliyandala Central College",
    logo: "/logos/pcc.jpg",
    degree: "GCE Advanced Level",
    period: "2020",
    gpa: "Z-Score: 1.7006",
    desc: "Physical Science Stream: Combined Maths (A), Physics (B), Chemistry (A).",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    company: "Talentfort (Pvt) Ltd",
    logo: "/logos/talentfort.jpg",
    role: "Software Engineer Intern",
    period: "Nov 2024 - May 2025",
    description: [
      "Developed frontend modules for an enterprise Health Information System (HIS) to handle patient data and hospital records.",
      "Built a custom appointment calendar with daily, weekly, and monthly views from scratch without using any third-party UI libraries.",
      "Optimized frontend performance using lazy loading and React memoization techniques (useMemo, useCallback) to reduce load times for heavy views.",
      "Created reusable input components with built-in validation rules for handling different types of user data accurately.",
      "Improved the responsiveness of web layouts using TailwindCSS to ensure they work correctly on desktop, tablet, and mobile screens.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "logistic",
    title: "Logistic System",
    shortDesc: "Microservices delivery tracking system.",
    fullDesc:
      "A distributed system handling real-time logistics. Implements the Saga Pattern for distributed transactions and Kafka for event streaming between Order, Inventory, and Tracking services. Designed to ensure data consistency across microservices while handling high-throughput delivery events.",
    tech: ["Spring Boot", "Kafka", "React", "Docker", "PostgreSQL"],
    period: "Ongoing",
    type: "Group Project",
    imgUrl: "/projects/logistic.png",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/Eranda2001/modurix_logistics_system",
      },
    ],
    collaboration: [
      "Role: Operations & Workflow",
      "Developing the Order Service and Inventory Service.",
      "Implementing the Saga Pattern for distributed transactions (Order -> Inventory -> Payment).",
      "Setting up Kafka Producers for 'Order Placed' events.",
    ],
  },
  {
    id: "research",
    title: "Fileless Malware Detection",
    shortDesc: "ML framework using Electromagnetic Side-Channel Analysis.",
    fullDesc:
      "Researching a two-stage ML framework to detect fileless malware (like Poweliks) by analyzing CPU electromagnetic emissions using a HackRF One SDR. The system captures RF signals emitted by the processor during malware execution and uses SVM classifiers to identify malicious patterns without relying on traditional file scanning.",
    tech: ["Python", "Machine Learning", "SDR", "GNU Radio", "Scikit-Learn"],
    period: "Ongoing",
    type: "Research",
    imgUrl: "/projects/research.png",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/RamathPerera/fileless-malware-research-scripts",
      },
    ],
  },
  {
    id: "aqua",
    title: "Aqua IoT",
    shortDesc: "Smart water management simulation.",
    fullDesc:
      "Full-stack IoT solution for real-time water usage visibility, automated billing predictions, and leak alerts. Includes a simulator for meter readings that pushes data to a NestJS backend, allowing users to monitor consumption patterns via a Next.js dashboard.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    period: "2024",
    type: "Individual",
    imgUrl: "/projects/aqua.png",
    repoLinks: [
      {
        label: "Web",
        url: "https://github.com/RamathPerera/aqua-web",
        icon: FaLaptopCode,
      },
      {
        label: "Backend",
        url: "https://github.com/RamathPerera/aqua-backend",
        icon: FaServer,
      },
      // {
      //   label: "Mobile",
      //   url: "https://github.com/RamathPerera/aqua-mobile",
      //   icon: FaMobileAlt,
      // },
    ],
  },
  {
    id: "resort",
    title: "Resort Reservation System",
    shortDesc: "Priority-based booking system for Army resorts.",
    fullDesc:
      "Centralized reservation system with complex business logic for priority queuing (Officers vs Civilians) and Super Admin approval workflows. Features include Role-Based Access Control, automated priority sorting, and a secure booking management portal.",
    tech: ["MERN Stack", "JWT", "RBAC", "Express", "MongoDB"],
    period: "ongoing",
    type: "Individual",
    imgUrl: "/projects/resort.png",
    repoLinks: [],
    liveUrl: "https://resort-reservation-frontend.vercel.app/",
  },
  {
    id: "dreamwed",
    title: "DreamWed",
    shortDesc: "Wedding planning platform.",
    fullDesc:
      "Full-stack web app connecting couples with vendors. Features include budget planning, chat functionality, booking management, and a dynamic checklist to guide couples through the wedding planning process.",
    tech: ["React", "Node.js", "MySQL", "Sequelize"],
    period: "2024",
    type: "Group Project",
    imgUrl: "/projects/dreamwed.png",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/SCS3214-Group-21/frontend",
        icon: FaLaptopCode,
      },
      {
        label: "Backend",
        url: "https://github.com/SCS3214-Group-21/backend",
        icon: FaServer,
      },
    ],
    collaboration: [
      "Full-stack development for Client-Vendor connection features.",
      "Implemented the logic for the primary planning flow.",
      "Developed chat functionality and booking request handling.",
    ],
  },
  {
    id: "readspot",
    title: "ReadSpot",
    shortDesc: "Book exchange community hub.",
    fullDesc:
      "Platform for buying, selling, and exchanging books. Includes event hosting, content management, and community features. The system facilitates book donations and supports a community-driven library exchange model.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    period: "2023",
    type: "Group Project",
    imgUrl: "/projects/readspot.png",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/pathu11/Readspot",
        icon: FaGithub,
      },
    ],
    demoUrl: "https://youtu.be/dG8pfdVTGs8",
    collaboration: [
      "Developed the Customer Homepage and Dashboard.",
      "Implemented the Event Saving process and Calendar integration.",
      "Built CRUD modules for Used and Exchange book sections.",
    ],
  },
  {
    id: "webserver",
    title: "C HTTP Server",
    shortDesc: "Low-level HTTP/1.1 server implementation.",
    fullDesc:
      "Built from scratch using Unix sockets. Handles concurrent connections, serves static/dynamic content (CGI), and manages processes. Implements core HTTP methods and status codes without reliance on external server libraries.",
    tech: ["C", "Unix Sockets", "HTTP Protocol", "CGI"],
    period: "2023",
    type: "Individual",
    imgUrl: "/projects/webserver.png",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/RamathPerera/c-web-server",
        icon: FaGithub,
      },
    ],
  },
];
