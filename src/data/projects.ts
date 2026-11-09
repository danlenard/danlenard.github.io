export type Project = {
  name: string;
  description: string;
  users?: string;
  role?: string;
  contribution?: string;
  engineeringDecision?: string;
  engineeringFocus?: string;
  outcome?: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Insurance & Financial Services Provider — Questionnaire",
    featured: true,
    description:
      "An interactive questionnaire for insurance clients that supports conditional questions, draft saving, and resuming incomplete submissions.",
    users: "Insurance clients",
    role: "Software Engineering Project Lead",
    contribution:
      "Developed frontend and backend functionality, coordinated technical delivery, and participated in architectural decisions to support flexible questionnaire updates.",
    engineeringDecision:
      "Chose a custom React micro-frontend over an embedded Salesforce UI to gain more control over the user experience and reduce dependencies on external UI changes.",
    tech: ["React", "TypeScript", "Module Federation", "Vite", "Express"],
  },
  {
    name: "Insurance & Financial Services Provider — Advisor & Customer Portals",
    featured: true,
    description:
      "Web and mobile portals that allow insurance advisors and policyholders to access and manage policy information and documents.",
    users: "Insurance advisors and policyholders",
    role: "Software Engineering Project Lead",
    contribution:
      "Worked on React micro-frontend applications and their integrations within an existing enterprise portal architecture.",
    tech: ["React", "TypeScript", "Module Federation", "Nx", "AWS Lambda"],
  },
  {
    name: "Payment Center",
    featured: true,
    description:
      "An internal platform that allows branch and finance operations staff to process bill payments, manage wallets and cash flow, and administer users and access permissions.",
    users: "Branch operations staff and finance teams",
    role: "Senior Software Engineer",
    contribution:
      "Contributed to frontend development and helped stabilize the application by investigating and resolving issues across frontend and backend modules. Also supported code quality through code reviews and mentoring developers.",
    tech: ["React", "TypeScript", "Python", "Node.js", "AWS Lambda"],
  },
  {
    name: "Telecommunications Provider",
    description:
      "A reporting application that allows internal billing and infrastructure teams to analyze monthly costs and monitor infrastructure utilization.",
    users: "Billing and infrastructure teams",
    role: "Senior Software Engineer",
    contribution:
      "Worked as a full-stack developer, implementing frontend components and backend APIs to support the application's reporting and operational functionality.",
    tech: [
      "React",
      "TypeScript",
      "Express",
      "BigQuery",
      "Google Cloud Storage",
    ],
  },
  {
    name: "Central Administration System",
    description:
      "A centralized administrative application for maintaining shared records used by multiple internal systems.",
    users: "Internal administrators",
    role: "Web Developer",
    contribution:
      "Developed backend APIs using Python and Django to support the administration system and its integrations with other applications.",
    tech: ["Python", "Django", "GraphQL", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Courier Tracking & Monitoring System",
    description:
      "A web and mobile application that allows dispatchers and operations teams to monitor courier locations and track collection and delivery activities in real time.",
    users: "Dispatchers and operations staff",
    role: "Software Developer",
    contribution:
      "Led a team of five frontend developers, overseeing GPS tracking and WebSocket-related development. Broke down requirements into tasks, assigned work, conducted code reviews, and mentored developers to maintain code quality and support delivery.",
    engineeringFocus:
      "Real-time GPS tracking and WebSocket-based location updates.",
    tech: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
  },
  {
    name: "Logistics Order Tracking System",
    description:
      "An order management and tracking application that helps operations teams monitor orders from initial booking through payment and delivery.",
    users: "Logistics operations teams",
    role: "Software Developer",
    contribution:
      "Pioneered the implementation of map-based tracking and WebSocket functionality. Developed frontend features and contributed to backend API development.",
    engineeringFocus:
      "Implementing map-based tracking and real-time updates using WebSockets.",
    tech: ["React", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Pawnshop Management System",
    description:
      "An internal application that allows pawnshop employees to record, search, and manage pawned items and their status.",
    users: "Pawnshop employees",
    role: "Software Developer",
    contribution:
      "Developed application functionality using React and Node.js to support pawnshop operations and the management of pawned items.",
    tech: ["React", "Node.js", "MySQL"],
  },
];
