export type Role = {
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

export type Experience = {
  company: string;
  location: string;
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    company: "Novare",
    location: "BGC, Metro Manila",
    roles: [
      {
        role: "Software Engineering Project Lead",
        period: "April 2025 – Present",
        current: true,
        summary:
          "Leading delivery of enterprise web applications with modern frontend architecture and cloud infrastructure.",
        highlights: [
          "Lead delivery of enterprise web applications with a micro-frontend architecture built on Module Federation across Vite and Webpack.",
          "Own frontend architecture decisions and shared UI libraries to keep portals consistent and maintainable.",
          "Drive code quality through code reviews, shared UI libraries, and Jest testing.",
          "Design backend-for-frontend (BFF) API integrations with consistent error, loading, and retry handling.",
          "Mentor engineers, share knowledge, and collaborate with stakeholders to deliver projects on time.",
        ],
        tech: [
          "React",
          "TypeScript",
          "Module Federation",
          "Express",
          "Kubernetes",
          "Jest",
        ],
      },
      {
        role: "Senior Software Engineer",
        period: "May 2023 – March 2025",
        summary:
          "Designed and built full-stack solutions on React, Python, and AWS Serverless.",
        highlights: [
          "Designed and built full-stack applications with React and Python on AWS Serverless.",
          "Integrated, tested, and debugged applications across development, test, and production environments.",
          "Troubleshot deployment issues and resolved CI/CD pipeline failures.",
          "Partnered with lead engineers to improve software development processes and resolve new technical issues.",
        ],
        tech: ["React", "Python", "AWS Serverless", "CI/CD"],
      },
    ],
  },
  {
    company: "Opo Networks Corporation",
    location: "Makati, Metro Manila",
    roles: [
      {
        role: "Web Developer",
        period: "June 2021 – January 2023",
        summary:
          "Built backend services, APIs, and internal tooling with Django and PostgreSQL.",
        highlights: [
          "Built and maintained backend services and REST APIs with Django and PostgreSQL.",
          "Developed automated audit reports that verify company data against third-party service providers.",
          "Corrected historical data discrepancies and submitted detailed change lists.",
          "Developed and maintained an internal site for monitoring and updating company-hosted domains and services.",
          "Collaborated with front-end developers to integrate user-facing elements with server-side logic.",
        ],
        tech: ["Django", "PostgreSQL", "Python", "REST APIs"],
      },
    ],
  },
  {
    company: "Code Disruptors Inc.",
    location: "Los Baños, Laguna",
    roles: [
      {
        role: "Software Developer",
        period: "July 2018 – October 2020",
        summary: "Built React and Node.js web applications in an Agile environment.",
        highlights: [
          "Developed web applications with React, Node.js, and MySQL in an Agile team.",
          "Led the frontend team, delegated tasks, managed Git workflows, and ensured quality control.",
        ],
        tech: ["React", "Node.js", "MySQL"],
      },
    ],
  },
];
