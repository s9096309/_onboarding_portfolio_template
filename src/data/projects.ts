export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Layered AI (Webeet.io)",
    description:
      "Built and maintain the cloud infrastructure (AWS, Terraform) and observability stack (Loki, Prometheus, Grafana) for an AI-powered real estate platform. I also develop backend-for-frontend (BFF) endpoints and implement LLM orchestration (RAG) for data visualization.",
    tags: [
      "AWS",
      "Terraform",
      "Loki",
      "Prometheus",
      "Grafana",
      "RAG",
      "LLM",
      "FastAPI",
      "React (SSR)",
      "TypeScript",
    ],
    image: "/images/project-placeholder.svg", // TODO: Add a real image
    // No 'link' or 'repo' as this is a private company project
  },
  {
    title: "Playnext MVP (LLM Recommendation Engine)",
    description:
      "Developed an intelligent game recommendation engine using Google Gemini for context-aware suggestions. I designed and integrated a FastAPI backend with PostgreSQL and a React frontend. My focus was on real-world LLM integration, including prompt engineering, API optimization, and caching.",
    tags: [
      "Python",
      "FastAPI",
      "Google Gemini",
      "LLM",
      "React",
      "PostgreSQL",
      "Prompt Engineering",
    ],
    image: "/images/playnext-logo.png",
    link: "http://ec2-3-74-44-41.eu-central-1.compute.amazonaws.com/static/index.html",
    repo: "https://github.com/s9096309/playnext_mvp",
  },
  {
    title: "Layered (Platform Foundations)",
    description:
      "A full-stack, event-driven platform built with a microservices architecture. Responsible for the authentication service (Fastify, JWT), user management (Kafka, Zod), and the React/Remix web client. Built and integrated end-to-end testing infrastructure (Playwright, Jest).",
    tags: [
      "TypeScript",
      "React",
      "Remix",
      "Fastify",
      "Node.js",
      "Microservices",
      "Kafka",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Playwright",
      "Jest",
    ],
    image: "/images/project-placeholder.svg", // TODO: Add a real image
    repo: "https://github.com/s9096309/layered-web-client",
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack social media demo app with Fastify backend and React frontend. Implemented Reels, Tagged, and Highlights modules using TDD and Zod schemas, plus component and API tests.",
    tags: ["React", "Fastify", "TypeScript", "Zod", "Tailwind CSS", "Vitest"],
    image: "/images/project-placeholder.svg", // TODO: Add a real image
    link: "https://insta-clone-react-frontend.vercel.app",
    repo: "https://github.com/s9096309/insta-clone-react-frontend",
  },
];