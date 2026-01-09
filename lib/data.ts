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
    logo: "/logos/ucsc.webp",
    degree: "B.Sc. (Hons) in Computer Science",
    period: "2022 - Present (Exp. 2026)",
    gpa: "Current GPA: 3.5055",
    desc: "Reading for a special degree in Computer Science, focusing on advanced software architectures and systems programming.",
  },
  {
    id: 2,
    institution: "Piliyandala Central College",
    logo: "/logos/pcc.webp",
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
    logo: "/logos/talentfort.webp",
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
    title: "Real-Time Logistics System",
    shortDesc:
      "Microservices delivery tracking system with Kafka and Spring Boot.",
    fullDesc:
      "A distributed microservices architecture designed for real-time order processing and delivery tracking. It utilizes Spring Cloud Gateway for routing, Kafka for high-throughput event streaming, and implements the Saga Pattern (Choreography) to maintain data consistency across Order and Inventory services. Features high-frequency GPS tracking optimized via the CQRS pattern.",
    tech: ["Spring Boot", "Kafka", "React", "Docker", "PostgreSQL", "Redis"],
    period: "Ongoing",
    type: "Group Project",
    imgUrl: "/projects/logistic.webp",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/Eranda2001/modurix_logistics_system",
      },
    ],
    collaboration: [
      "Role: Operations & Workflow",
      "Built the core Order Service handling distributed transaction logic.",
      "Implemented the Saga Pattern for the 'Order Placement' flow (Order Created → Inventory Reserved → Payment Processed).",
      "Developed Kafka Producers to emit state-change events and handled compensating transactions for failure recovery.",
    ],
  },
  {
    id: "research",
    title: "Fileless Malware Detection",
    shortDesc: "ML framework using Electromagnetic Side-Channel Analysis.",
    fullDesc:
      "A research-based two-stage machine learning framework to detect and classify fileless malware (e.g., Poweliks) by capturing CPU electromagnetic emissions. Utilizing a HackRF One SDR and a Log-Periodic antenna, the system preprocesses RF signals via Short-Time Fourier Transform (STFT) and utilizes SVM/OCSVM classifiers to identify malicious execution patterns across Windows and Linux environments.",
    tech: [
      "Python",
      "Machine Learning",
      "SDR",
      "GNU Radio",
      "Scikit-Learn",
      "HDF5",
    ],
    period: "Ongoing",
    type: "Research",
    imgUrl: "/projects/research.webp",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/RamathPerera/fileless-malware-research-scripts",
      },
    ],
  },
  {
    id: "aqua",
    title: "Aqua Smart Water Management",
    shortDesc:
      "IoT simulation platform for leak detection and billing visibility.",
    fullDesc:
      "A full-stack IoT simulation system designed to identify residential water leaks and provide billing predictions. Developed a high-performance background engine using Node.js Worker Threads and Node-cron to handle complex simulation math without blocking the main API. Features real-time usage dashboards and automated email alerts for budget overflows.",
    tech: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "Nodemailer",
    ],
    period: "ongoing",
    type: "Individual",
    imgUrl: "/projects/aqua.webp",
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
    shortDesc: "Priority-based booking system for the Sri Lanka Army.",
    fullDesc:
      "A centralized MERN-stack application featuring a unique tiered priority queue (SLEME Officers > Other Units > Civilians). Implements an exclusive booking model where entire resorts are reserved at once. Includes complex Super Admin approval workflows, automated conflict checking, and secure guest access via OTP-based management.",
    tech: ["MERN Stack", "JWT", "RBAC", "Nodemailer", "MongoDB"],
    period: "ongoing",
    type: "Individual",
    imgUrl: "/projects/resort.webp",
    repoLinks: [],
    liveUrl: "https://resort-reservation-frontend.vercel.app/",
  },
  {
    id: "dreamwed",
    title: "DreamWed",
    shortDesc: "Wedding planning marketplace with role-based coordination.",
    fullDesc:
      "A robust marketplace connecting clients with Sri Lankan wedding service providers. The system manages complex vendor hierarchies including beauty salons, catering, and photography. Features include real-time chat, budget planning, and a dynamic progress tracking system to ensure all preparation tasks are completed on time.",
    tech: ["React", "Node.js", "MySQL", "Sequelize", "Tailwind CSS"],
    period: "June 2024 - December 2024",
    type: "Group Project",
    imgUrl: "/projects/dreamwed.webp",
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
      "Developed the secure authentication system using JWT.",
      "Implemented Role-Based Access Control (RBAC) to protect client and vendor data.",
      "Built frontend modules for service provider packages and client budget planning.",
    ],
  },
  {
    id: "readspot",
    title: "ReadSpot Online Book Hub",
    shortDesc: "Community platform for book sharing and donation.",
    fullDesc:
      "A versatile library community hub built without external frameworks. Facilitates buying, selling, and swapping used books. Includes a virtual currency system where users earn points for participating in book-reading challenges. Features an integrated event management system for book drives and literary exhibitions.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "XAMPP"],
    period: "June 2023 - April 2024",
    type: "Group Project",
    imgUrl: "/projects/readspot.webp",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/pathu11/Readspot",
        icon: FaGithub,
      },
    ],
    demoUrl: "https://youtu.be/dG8pfdVTGs8",
    collaboration: [
      "Developed the Customer Homepage and full-stack Dashboard.",
      "Implemented the Event Saving system and calendar-based event tracking.",
      "Built the CRUD logic for managing Used and Exchange book listings.",
    ],
  },
  {
    id: "webserver",
    title: "Low-Level C HTTP Server",
    shortDesc: "Concurrent HTTP/1.1 server with Zero-Copy optimization.",
    fullDesc:
      "A functional web server built using the Berkeley Sockets API in C. It supports simultaneous client connections using a multi-process model (fork). Optimized for performance using the sendfile() system call for Zero-Copy data transfer and features security measures like path sanitization to prevent directory traversal attacks. Supports dynamic content via PHP-CGI integration.",
    tech: ["C", "Unix Sockets", "PHP-CGI", "Process Management"],
    period: "June 2025 - July 2025",
    type: "Individual",
    imgUrl: "/projects/webserver.webp",
    repoLinks: [
      {
        label: "Code",
        url: "https://github.com/RamathPerera/c-web-server",
        icon: FaGithub,
      },
    ],
  },
];
