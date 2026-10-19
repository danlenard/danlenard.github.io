import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05. Certifications"
      title="Certifications"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <article className="card-surface flex h-full gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_var(--glow)]">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Award size={22} />
              </span>
              <div>
                <h3 className="font-display font-semibold tracking-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-accent">
                  {cert.period}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {cert.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
