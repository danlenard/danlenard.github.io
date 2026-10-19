// Inlined at build time. Empty for a user site, "/<repo>" for a project site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Dan Lenard Hacutina",
  firstName: "Dan",
  role: "Software Engineer",
  headline: "Software Engineering Project Lead",
  tagline:
    "I design and build scalable web applications with React, Node.js, Python, and AWS.",
  availability: "Open to new opportunities",
  bio: [
    "I'm a software engineer with 7+ years of experience building and leading web applications end-to-end. I specialize in React and TypeScript on the frontend, Node.js and Python on the backend, and AWS for scalable, serverless cloud infrastructure.",
    "Currently a Software Engineering Project Lead at Novare, where I build micro frontends with Module Federation, drive code quality, and mentor engineers. I'm passionate about clean architecture, developer experience, and shipping reliable software.",
  ],
  location: "Laguna, Philippines",
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
  { value: "4", label: "Companies" },
  { value: "AWS", label: "Certified Developer" },
];
