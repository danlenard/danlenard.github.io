import { Code2, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title="About Me">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-4">
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
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <MapPin size={15} />
                </span>
                {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Code2 size={15} />
                </span>
                {profile.headline}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono text-xs text-accent">
                  $
                </span>
                React · Node.js · Python · AWS
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
