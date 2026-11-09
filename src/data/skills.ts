export type SkillGroup = {
  title: string;
  skills: string[];
  minor?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Query",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon S3",
      "Amazon RDS",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    title: "Architecture & Integration",
    skills: [
      "Micro-frontends",
      "Module Federation",
      "Backend-for-Frontend (BFF)",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    title: "Testing & Development Tools",
    skills: ["Jest", "Git", "Vite", "Webpack", "Zod"],
  },
  {
    title: "AI-Assisted Development",
    minor: true,
    skills: ["GitHub Copilot"],
  },
];
