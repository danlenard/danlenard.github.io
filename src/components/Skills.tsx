import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  const mainGroups = skillGroups.filter((group) => !group.minor);
  const minorGroups = skillGroups.filter((group) => group.minor);

  return (
    <Section id="skills" eyebrow="02. Skills" title="Technical Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mainGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="card-surface h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_var(--glow)]">
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {minorGroups.map((group) => (
        <Reveal key={group.title} delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-dashed border-border/60 bg-surface/40 px-4 py-3">
            <span className="font-mono text-xs font-semibold text-muted">
              {group.title}:
            </span>
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/60 bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
