export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Software & DevSecOps Engineer',
    org: 'Webeet',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    bullets: [
      'Built and maintained cloud infrastructure on AWS with Terraform.',
      'Managed and optimized CI/CD pipelines using GitHub Actions, Docker, and Kubernetes.',
      'Implemented and maintaiedn the observability stack (Prometheus, Grafana, Loki).',
      'Developed AI-first features, including LLM orchestration (RAG) and data visualization.',
      'Implemented full-stack features using SSR React, Fastify BFF endpoints, and PostgreSQL.',
    ],
    tags: [
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Prometheus',
      'Grafana',
      'RAG',
      'LLM',
      'React (SSR)',
      'Fastify',
      'PostgreSQL',
    ],
    type: 'work',
  },
  {
    title: 'Software Engineering Full Stack',
    org: 'Masterschool',
    location: 'Remote',
    period: 'Sep 2024 - Nov 2025',
    bullets: [
      'Completed a comprehensive 14-month, project-based full-stack development curriculum.',
      'Built end-to-end applications using Python (FastAPI), TypeScript (React), and cloud tech.',
      'Focused on software architecture, design patterns, and CI/CD best practices.',
      'Completed a capstone project (Playnext MVP) demonstrating LLM integration.',
    ],
    tags: [
      'Python',
      'FastAPI',
      'TypeScript',
      'React',
      'AWS',
      'Full Stack',
    ],
    type: 'education',
  },
];