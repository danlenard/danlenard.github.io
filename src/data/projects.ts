export type Project = {
  name: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Insurance & Financial Services Provider — Advisor & Customer Portals",
    description:
      "Nx monorepo serving insurance advisors and policyholders across web portals and an Ionic/Capacitor mobile app. React shells compose shared micro-frontend libraries and runtime Module Federation remotes, backed by a TypeScript backend-for-frontend of roughly 150 AWS Lambda endpoints plus an Express service for PDF generation and uploads, with shared Zod validation and Okta client-credentials calls to downstream policy systems.",
    tech: [
      "React",
      "TypeScript",
      "Nx",
      "Module Federation",
      "Ionic",
      "Capacitor",
      "AWS Lambda",
      "Serverless Framework",
      "Express",
      "Kubernetes",
    ],
  },
  {
    name: "Insurance & Financial Services Provider — Project Compass",
    description:
      "Financial-goals questionnaire delivered as a React micro-frontend, loaded at runtime by a host shell through Vite Module Federation, with a Node and Express backend-for-frontend. Respondents give consent, answer branching questions, save drafts, and resume from either browser storage or the server before submitting.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Module Federation",
      "Express",
      "Zod",
      "React Query",
      "styled-components",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    name: "Payment Center",
    description:
      "Microservices platform for bill payments, branch and financial operations, wallet and cash-flow processing, and user and role administration. Built across many repositories, spanning legacy and modernized Python and Node.js APIs plus three React frontends.",
    tech: [
      "React",
      "TypeScript",
      "Python",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "AppSync",
      "MySQL",
      "DynamoDB",
      "Step Functions",
    ],
  },
  {
    name: "Telecommunications Provider",
    description:
      "Reporting application for billing, cost breakdown, month comparisons, and infrastructure utilization. A React and TypeScript frontend consumes an Express API that queries BigQuery, with CSV exports delivered through Google Cloud Storage signed URLs.",
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "Express",
      "BigQuery",
      "Google Cloud Storage",
      "Docker",
      "Vite",
    ],
  },
  {
    name: "Central Administration System",
    description:
      "Internal web application that acts as a central system of record, storing and distributing shared data to other applications. A React interface and Django REST backend on PostgreSQL give administrators one place to maintain the records that downstream systems depend on.",
    tech: ["React", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Courier Tracking & Monitoring System",
    description:
      "Mobile and internal web application for monitoring and tracking couriers in real time during collections and deliveries. Live Socket.IO updates keep dispatchers and operations staff informed as status changes happen, while PostgreSQL stores tracking history.",
    tech: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
  },
  {
    name: "Logistics Order Tracking System",
    description:
      "End-to-end order tracking from booking through final transaction, combining cashiering, vehicle GPS tracking, and user authentication in a single system. Operations teams get a unified view of order status, payments, and delivery progress across the order lifecycle.",
    tech: ["React", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Pawnshop Management System",
    description:
      "Item tracking application with user authentication for streamlined pawnshop operations. Staff can record, search, and manage pawned items and their status from one internal tool, backed by a React frontend and Node.js API over MySQL.",
    tech: ["React", "Node.js", "MySQL"],
  },
];
