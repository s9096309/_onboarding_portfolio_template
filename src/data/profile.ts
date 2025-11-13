export type LinkItem = {
  label: string;
  href: string;
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
};

export const profile: Profile = {
  name: "Kevin Hoffmann",
  role: "Software / DevOps Engineer",
  location: "Frankfurt am Main, Germany",
  email: "k-hoff-mann@web.de",
  summary: `I’m a Software Engineer who loves building things that actually work; scalable, secure systems that make everyday life a little easier. My focus is on bridging application development with the cloud side of things, where code meets real-world reliability.

Before tech, I spent several years in education and social work, helping people learn, grow, and solve problems. That experience taught me how to listen, communicate, and see things from a user’s perspective; skills I now apply every day in software development.

I made the switch through a 14-month, project-based training program, where I learned by doing: - Building full-stack apps with Python (FastAPI) and TypeScript (React, Node.js), and diving into cloud infrastructure with AWS, Docker, and Terraform.

These days, I’m working at webeet, where I started out building a full-stack TypeScript app and now focus on DevSecOps - automating infrastructure with Terraform, tightening up CI/CD pipelines, and learning how to design for scale and security. As Squad Lead, I also get to mentor teammates and keep the team organized and moving forward.

I care about clean, maintainable code, collaboration, and constant learning. If you’re into cloud-native development, DevOps, or just love talking about how to make systems better - let’s connect!`,
  lookingFor: "SWE / DevOps roles in Germany (remote or hybrid)",
  avatar: "/images/profile_picture.jpeg",
  resumeUrl: "/CV_Software_Eng.pdf",
  
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