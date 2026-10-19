import { Folder } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04. Projects" title="Selected Projects">
      <p className="-mt-6 mb-10 text-sm text-muted">
        Work projects I&apos;ve contributed to — names generalized for confidentiality.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_var(--glow)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Folder size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                {project.description}
              </p>
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
