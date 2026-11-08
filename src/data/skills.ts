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
      "JavaScript (ES6+)",
      "Redux",
      "React Query",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST APIs",
      "Socket.IO",
      "WebSocket",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "Amazon S3",
      "Amazon RDS",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB", "SQL"],
  },
  {
    title: "Architecture",
    skills: [
      "Micro-frontends",
      "Module Federation",
      "Backend-for-Frontend (BFF)",
      "API integrations",
    ],
  },
  {
    title: "Testing & Tooling",
    skills: ["Jest", "Zod", "Git", "Vite", "Webpack"],
  },
  {
    title: "AI-Assisted Development",
    minor: true,
    skills: ["GitHub Copilot", "Claude", "DeepSeek"],
  },
];
