export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Redux",
      "React Query",
      "Node.js",
      "Express.js",
      "Django",
      "Zod",
      "Bootstrap",
      "Socket.IO",
      "WebSocket",
      "Jest",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "S3",
      "RDS",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Vite",
      "Webpack",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    title: "AI-Assisted Development",
    skills: ["GitHub Copilot", "Claude", "DeepSeek"],
  },
];
