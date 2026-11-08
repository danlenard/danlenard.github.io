import { Folder } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04. Projects"
      title="Projects I've worked on"
    >
      <p className="-mt-6 mb-10 text-sm text-muted">
        Work projects I&apos;ve contributed to — names generalized for
        confidentiality.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_var(--glow)]">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Folder size={22} />
                </span>
                {project.featured && (
                  <span className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <div className="mt-2 flex-1 space-y-3">
                <p className="text-sm leading-7 text-muted">
                  {project.description}
                </p>
                {project.contribution && (
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
                      My contribution
                    </p>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {project.contribution}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border/60 bg-surface px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
