export type Project = {
  name: string;
  description: string;
  contribution?: string;
  outcome?: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Insurance & Financial Services Provider — Questionnaire",
    featured: true,
    description:
      "A module federated hosted questionnaire that lets insurance clients answer branching questions, save a draft, and resume before submitting.",
    contribution:
      "I contributed to the React frontend and Node.js backend, coordinated delivery, and helped choose an approach that made the questionnaire easier to update.",
    tech: ["React", "TypeScript", "Module Federation", "Vite", "Express"],
  },
  {
    name: "Insurance & Financial Services Provider — Advisor & Customer Portals",
    featured: true,
    description:
      "Web and mobile portals where insurance advisors and policyholders work with policy information and documents.",
    tech: ["React", "TypeScript", "Module Federation", "Nx", "AWS Lambda"],
  },
  {
    name: "Payment Center",
    featured: true,
    description:
      "Internal platform that branch and finance operations staff use to process bill payments, manage wallets and cash flow, and administer users and roles.",
    tech: ["React", "TypeScript", "Python", "Node.js", "AWS Lambda"],
  },
  {
    name: "Telecommunications Provider",
    description:
      "Reporting tool that internal billing and infrastructure teams use to review costs month over month and monitor infrastructure utilization.",
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
      "Internal application that administrators use to maintain the shared records other systems depend on.",
    tech: ["React", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Courier Tracking & Monitoring System",
    description:
      "Mobile and web app that dispatchers and operations staff use to track couriers in real time during collections and deliveries.",
    tech: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
  },
  {
    name: "Logistics Order Tracking System",
    description:
      "Order tracking system that operations teams use to follow each order from booking through payment and final delivery.",
    tech: ["React", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Pawnshop Management System",
    description:
      "Internal tool that pawnshop staff use to record, search, and manage pawned items and their status.",
    tech: ["React", "Node.js", "MySQL"],
  },
];
