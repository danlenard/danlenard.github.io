export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineering Project Lead",
    company: "Novare (formerly MDI Novare)",
    location: "BGC, Metro Manila",
    period: "April 2025 – Present",
    current: true,
    summary:
      "Leading delivery of enterprise web applications with modern frontend architecture and cloud infrastructure.",
    highlights: [
      "Build and maintain micro frontends using Module Federation, Vite, Webpack, React Query, Express, Zod, Kubernetes, and Jest.",
      "Develop scalable React components, shared UI libraries, and backend-for-frontend (BFF) API integrations with error, loading, and retry handling.",
      "Use Claude for AI-assisted development to accelerate implementation, debugging, and documentation.",
      "Mentor engineers, conduct code reviews, and collaborate with stakeholders to deliver projects on time.",
    ],
    tech: ["React", "TypeScript", "Module Federation", "Kubernetes", "Express", "Jest"],
  },
  {
    role: "Senior Software Engineer",
    company: "Novare (formerly MDI Novare)",
    location: "BGC, Metro Manila",
    period: "May 2023 – March 2025",
    summary:
      "Designed and built full-stack solutions on React, Python, and AWS Serverless.",
    highlights: [
      "Integrated, tested, and debugged application solutions across development, test, and production environments.",
      "Provided recommendations to lead engineers when encountering new issues.",
      "Collaborated with lead software engineers to improve software development processes.",
      "Troubleshot deployment issues and resolved pipeline failures.",
      "Designed and built applications using ReactJS, Python, and AWS Serverless.",
    ],
    tech: ["React", "Python", "AWS Serverless", "CI/CD"],
  },
  {
    role: "Web Developer",
    company: "Opo Networks Corporation (formerly Idigital Internet Inc.)",
    location: "Makati, Metro Manila",
    period: "June 2021 – January 2023",
    summary:
      "Built backend services, APIs, and internal tooling with Django and PostgreSQL.",
    highlights: [
      "Collaborated with front-end developers to integrate user-facing elements with server-side logic seamlessly.",
      "Developed automated audit reports for company data, ensuring accuracy against third-party service providers.",
      "Created API systems for web applications in collaboration with other developers.",
      "Corrected discrepancies in historical data and submitted detailed lists of changes.",
      "Developed and maintained an internal website for monitoring and updating company-hosted domains and services, using Django and PostgreSQL.",
    ],
    tech: ["Django", "PostgreSQL", "Python", "REST APIs"],
  },
  {
    role: "Software Developer",
    company: "Code Disruptors Inc.",
    location: "Los Baños, Laguna",
    period: "July 2018 – October 2020",
    summary: "Built React and Node.js web applications in an Agile environment.",
    highlights: [
      "Developed web applications using ReactJS, NodeJS, and MySQL in an Agile environment.",
      "Led frontend team, delegated tasks, managed git push requests, and ensured quality control.",
    ],
    tech: ["React", "Node.js", "MySQL"],
  },
];
