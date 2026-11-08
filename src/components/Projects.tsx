import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import Section from "./Section";

type DetailBlockProps = {
  label: string;
  children: string;
};

function DetailBlock({ label, children }: DetailBlockProps) {
  return (
    <div>
      <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
        {label}
      </p>
      <p className="mt-1 text-sm leading-7 text-muted">{children}</p>
    </div>
  );
}

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
      <div className="grid gap-6">
        {projects.map((project, i) => {
          const hasProjectInfo = Boolean(project.users || project.role);
          const hasDetails = Boolean(
            project.contribution ||
            project.engineeringDecision ||
            project.engineeringFocus,
          );

          return (
            <Reveal key={project.name} delay={i * 0.05}>
              <article className="card-surface flex flex-col p-6 transition-colors duration-300 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_var(--glow)] sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${
                      project.featured
                        ? "border-accent/20 bg-accent-soft text-accent"
                        : "border-border/60 bg-surface text-muted"
                    }`}
                  >
                    {project.featured
                      ? "Featured project"
                      : "Professional project"}
                  </span>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
                    Professional work
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {hasProjectInfo && (
                  <dl className="mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2">
                    {project.users && (
                      <div>
                        <dt className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
                          Users
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {project.users}
                        </dd>
                      </div>
                    )}
                    {project.role && (
                      <div>
                        <dt className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
                          Role
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {project.role}
                        </dd>
                      </div>
                    )}
                  </dl>
                )}

                {hasDetails && (
                  <div className="mt-5 space-y-4 border-t border-border/60 pt-5">
                    {project.contribution && (
                      <DetailBlock label="My contribution">
                        {project.contribution}
                      </DetailBlock>
                    )}
                    {project.engineeringFocus && (
                      <DetailBlock label="Key engineering focus">
                        {project.engineeringFocus}
                      </DetailBlock>
                    )}
                    {project.engineeringDecision && (
                      <DetailBlock label="Key engineering decision">
                        {project.engineeringDecision}
                      </DetailBlock>
                    )}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-5">
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
          );
        })}
      </div>
    </Section>
  );
}
