import { experiences } from "@/data/experience";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03. Experience" title="Where I've Worked">
      <div className="relative space-y-12 pl-8">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent/60 via-border to-transparent"
        />
        {experiences.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 0.05}>
            <article className="relative">
              <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--glow)]" />
              <p className="font-mono text-sm text-accent">{job.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
                {job.role}
                {job.current && (
                  <span className="ml-3 inline-block rounded-full border border-accent/20 bg-accent-soft px-2.5 py-0.5 align-middle text-xs font-medium text-accent">
                    Current
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 leading-7 text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
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
