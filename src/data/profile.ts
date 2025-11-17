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
      title: "Core Languages & Runtime",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Node.js"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      title: "Backend & APIs",
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "JWT Authentication",
        "Zod Validation",
        "SQLAlchemy",
      ],
    },
    {
      title: "Databases & Data",
      skills: ["PostgreSQL", "SQLite", "Alembic", "SQL"],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "AWS",
        "Terraform",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Git / GitHub",
        "Linux",
        "Shell / CLI Tools",
        "Prometheus",
        "Grafana",
        "Loki",
        "Elastic Stack",
        "HashiCorp Vault",
      ],
    },
    {
      title: "Testing & QA",
      skills: [
        "Pytest",
        "Vitest",
        "Jest",
        "TDD / BDD",
        "Integration Testing",
        "E2E Testing",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Patterns & Practices",
      skills: [
        "Clean Architecture",
        "Microservices",
        "Event-driven Architecture",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Soft Skills & Collaboration",
      skills: [
        "Squad Leadership",
        "Mentoring & Onboarding",
        "Knowledge Sharing",
        "Team Communication",
        "Cross-functional Collaboration",
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