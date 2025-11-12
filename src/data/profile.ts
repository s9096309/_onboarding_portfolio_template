// =======================================================================
//  COPY THIS ENTIRE BLOCK INTO src/data/profile.ts
// =======================================================================

export type LinkItem = {
  label: string;
  href: string;
};

// NEW: Define a type for our skill categories
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
  skills: SkillCategory[]; // UPDATED: This is now an array of SkillCategory
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Kevin Hoffmann",
  role: "Software / DevOps Engineer",
  summary:
    "I'm a Software Engineer focused on bridging application development with cloud reliability. My background in education and social work gives me a unique, user-focused perspective on problem-solving. At webeet, I now focus on DevSecOps: Automating infrastructure with Terraform, optimizing CI/CD pipelines, and designing for scale and security.",
  location: "Frankfurt am Main, Germany",
  email: "k-hoff-mann@web.de",
  lookingFor: "SWE / DevOps roles in Germany (remote or hybrid)",
  avatar: "/images/profile_picture.jpeg",
  resumeUrl: "/CV Software Engineer2___.pdf",
  
  // UPDATED: This 'skills' array now has a new structure
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
        "Fastify",
        "REST APIs",
        "JWT Authentication",
        "Zod Validation",
        "Flask",
        "FastAPI",
        "SQLAlchemy",
      ],
    },
    {
      title: "Databases & Data",
      skills: ["PostgreSQL", "SQLite", "Alembic", "SQL"],
    },
    {
      title: "Testing & QA",
      skills: [
        "Vitest",
        "Jest",
        "Pytest",
        "TDD / BDD",
        "Integration Testing",
        "E2E Testing",
        "CI/CD Pipelines",
        "Unit Testing",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Amazon Web Services",
        "Docker",
        "Kubernetes",
        "Git / GitHub",
        "GitHub Actions",
        "VS Code",
        "Linux",
        "Shell / CLI Tools",
        "Kafka",
        "Terraform",
        "Loki",
        "Prometheus",
        "Grafana",
        "Elastic Stack",
        "HashiCorp Vault",
        "AWS Secrets Manager",
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
  links: [
    { label: "GitHub", href: "https://github.com/s9096309" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinhoffmann1" },
    { label: "Email", href: "mailto:k-hoff-mann@web.de" },
  ],
};