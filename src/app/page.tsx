import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfileCard } from '../components/ProfileCard';
import { ProjectCard } from '../components/ProjectCard';
import { CvCard } from '../components/CvCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { cvArticles } from '../data/cv';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">

      <Header />

      <div className="flex-1">
        <section className="container-grid pt-10 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 lg:gap-8">
            <div className="card hero-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  width={88}
                  height={88}
                  className="rounded-full border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-900/40"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold">{profile.name}</h1>
                  <p className="text-neutral-600 dark:text-neutral-300">{profile.role}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">{profile.summary}</p>
              <ProfileCard />
            </div>

            <aside className="space-y-4 lg:w-80">

  {/* === NEW DOWNLOAD BUTTON CARD === */}
  <div className="card p-5 md:p-6">
    <Link
      href={profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-dark/50"
    >
      {/* Inline SVG for Download Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
        Download Resume (PDF)
    </Link>
  </div>
  <div className="card p-5 md:p-6">
              <h2 className="section-title">Get in Touch</h2>

              {/* The Contact Me Button (you added this) */}
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-dark/50"
              >
                Contact Me
              </a>

              {/* A nice divider line */}
              <hr className="my-4 border-neutral-200/60 dark:border-neutral-800/60" />

              {/* Your links, with 'Email' filtered out */}
              <ul className="space-y-2 text-sm">
                {profile.links
                  .filter((link) => link.label !== 'Email') // Filters out the redundant Email
                  .map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-brand hover:underline"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
  {/* === END NEW BUTTON CARD === */}

  <div className="card p-5 md:p-6">
    <h2 className="section-title">Skills</h2>
              {/* This 'div' is now a container for the categories */}
              <div className="mt-3 space-y-4"> 
                
                {/* 1. The OUTER loop for categories */}
                {profile.skills.map((category) => (
                  <div key={category.title}>
                    
                    {/* Render the category title */}
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      {category.title}
                    </h3>

                    {/* 2. The INNER loop for skills in that category */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="badge">{skill}</span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="container-grid pt-10 sm:pt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Projects</h2>
            <Link href="/projects" className="text-brand hover:underline text-sm">View all</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.title} project={p} />)
            )}
          </div>
        </section>

        <section id="cv" className="container-grid pt-10 sm:pt-14 pb-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Experience</h2>
            <Link href="/resume" className="text-brand hover:underline text-sm">View full CV</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cvArticles.slice(0, 4).map((item) => (
              <CvCard key={`${item.title}-${item.org ?? ''}`} item={item} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}