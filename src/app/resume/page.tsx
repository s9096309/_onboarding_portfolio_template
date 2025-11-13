import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { profile } from '../../data/profile';
import { PrintButton } from '../../components/PrintButton';
import { cvArticles } from '../../data/cv';

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="container-grid py-10 sm:py-14 flex-1">
        <div className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="section-title">Resume</h1>
            <PrintButton />
          </div>
          <div className="mt-6 space-y-4 text-sm leading-6">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{profile.role}</p>
            
            {/* Email and Location */}
            <p>
              <a className="text-brand hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
              <span className="mx-2">·</span>
              <span>{profile.location}</span>
            </p>

            {/* MOVED LINKS SECTION (Email is filtered out) */}
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {profile.links
                .filter((link) => link.label !== 'Email')
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

            <hr className="border-neutral-200/60 dark:border-neutral-800/60" />
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">{profile.summary}</p>
            
            {/* Skills Section */}
            <div>
              <p className="font-medium">Skills</p>
              <div className="mt-2 space-y-4">
                {profile.skills.map((category) => (
                  <div key={category.title}>
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Projects Section */}
            <div>
              <p className="font-medium">Experience & Projects</p>
              <div className="mt-2 space-y-5">
                {cvArticles.map((a) => (
                  <article key={`${a.title}-${a.org ?? ''}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-semibold">{a.title}</h2>
                      {a.period && <span className="text-xs text-neutral-500 dark:text-neutral-400">{a.period}</span>}
                    </div>
                    {(a.org || a.location) && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">{[a.org, a.location].filter(Boolean).join(' · ')}</p>
                    )}
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {a.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {a.tags && a.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {a.tags.map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
            
            {/* The Links section at the bottom is now gone */}

          </div>
          <div className="mt-8 text-sm">
            <Link className="text-brand hover:underline" href="/">Back to home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}