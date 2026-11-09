import { Code2, Layers, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

const quickFacts = [
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Current Role", value: profile.currentRole, icon: Code2 },
  { label: "Focus", value: profile.focus, icon: Layers },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title="About Me">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface p-6">
            <h3 className="font-display font-semibold tracking-tight text-foreground">
              Quick Facts
            </h3>
            <ul className="mt-5 space-y-5 text-sm text-muted">
              {quickFacts.map(({ label, value, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                      {label}
                    </p>
                    <p className="mt-0.5 leading-6 text-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
