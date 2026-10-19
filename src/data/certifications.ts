export type Certification = {
  title: string;
  issuer: string;
  period: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    period: "2024 – 2027",
    description:
      "Validates expertise in developing, deploying, and debugging cloud-based applications using AWS.",
  },
];
