export type LinkItem = {
  label: string;
  href: string;
};

export type DocumentItem = {
  title: string;
  fileUrl: string;
  type: 'Certificate' | 'Reference';
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: SkillCategory[];
  links: LinkItem[];
  documents: DocumentItem[];
};

export const profile: Profile = {
  name: "Kevin Hoffmann",
  role: "Software / DevOps Engineer",
  summary: `Full-Stack Software, Cloud and DevOps Engineer with hands-on experience building and deploying secure, cloud-native applications on AWS.
Skilled in Python, TypeScript, CI/CD automation, and infrastructure as code (Terraform).
Experienced in leading technical teams, combining background in social work for a unique, user-centric approach to problem-solving and clear communication.`,
  location: "Frankfurt am Main, Germany",
  email: "k-hoff-mann@web.de",
  lookingFor: "SWE / DevOps roles in Germany (remote or hybrid)",
  avatar: "/images/profile_picture.jpeg",

  resumeUrl: "/Kevin Hoffmann Resume.pdf",

  skills: [
    {
      title: "Programming Languages",
      skills: ["Python", "TypeScript", "JavaScript"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Node.js (Express.js)", "FastAPI", "Flask"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Terraform",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Prometheus",
        "Grafana",
        "PostgreSQL",
        "SQLAlchemy",
        "SQLite",
        "Loki",
      ],
    },
  ],

  documents: [
    {
      title: "Masterschool Certificate (Backend Specialization)",
      fileUrl: "/Masterschool_Certificate.pdf",
      type: "Certificate",
    },
    {
      title: "Webeet Internship Completion",
      fileUrl: "/Webeet_Certificate.pdf",
      type: "Certificate",
    },
  ],

  links: [
    { label: "GitHub", href: "https://github.com/s9096309" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinhoffmann1" },
    { label: "Email", href: "mailto:k-hoff-mann@web.de" },
  ],
};