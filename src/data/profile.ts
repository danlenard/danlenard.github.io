// Inlined at build time. Empty for a user site, "/<repo>" for a project site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Dan Lenard Hacutina",
  firstName: "Dan",
  role: "Senior Software Engineer",
  currentRole: "Software Engineering Project Lead",
  headline:
    "Senior Software Engineer | Technical Lead | Full-Stack Development",
  tagline:
    "I build scalable enterprise applications, micro-frontends, and cloud-backed services with React, Node.js, Python, and AWS.",
  availability: "Open to new opportunities",
  bio: [
    "I'm a full-stack software engineer with over 7 years of experience building and maintaining web applications. My expertise spans React and TypeScript on the frontend, Node.js and Python on the backend, and AWS cloud services.",
    "Currently, I'm a Software Engineering Project Lead at Novare, where I remain hands-on with development while mentoring developers, reviewing code, and coordinating technical delivery. I work closely with business and system analysts to translate requirements into practical technical solutions.",
    "I particularly enjoy debugging complex issues, improving existing systems, and finding efficient ways to solve problems. I'm continually developing my skills in system design and architecture while staying actively involved in software development.",
  ],
  location: "Laguna, Philippines",
  focus: "Full-Stack Development · Technical Leadership",
  email: "danhacutina@gmail.com",
  phone: "+63 976 184 3645",
  phoneHref: "tel:+639761843645",
  resumeUrl: `${basePath}/Dan_Lenard_Hacutina_Resume.pdf`,
  socials: {
    github: "https://github.com/danlenard",
    linkedin: "https://www.linkedin.com/in/dan-lenard-hacutina/",
    email: "mailto:danhacutina@gmail.com",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "3", label: "Companies" },
  { value: "AWS", label: "Certified Developer" },
];
