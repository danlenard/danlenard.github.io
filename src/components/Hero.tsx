import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  const nameParts = profile.name.split(" ");
  const surname = nameParts.pop();
  const givenNames = nameParts.join(" ");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="animate-aurora absolute -top-48 left-[6%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,var(--gradient-from),transparent_65%)] opacity-25 blur-3xl motion-reduce:animate-none" />
        <div className="animate-aurora-slow absolute -top-24 right-[2%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--gradient-to),transparent_65%)] opacity-20 blur-3xl motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
            {givenNames} <span className="text-brand">{surname}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
            {profile.headline}
            <span className="mt-2 block text-lg font-normal text-muted sm:text-xl">
              Building with React, Node.js, Python &amp; AWS.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.tagline} Based in {profile.location}.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-accent-contrast shadow-[0_18px_40px_-18px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-20px_var(--glow)]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Mail size={19} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-surface relative overflow-hidden p-5 text-center"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-brand opacity-80" />
                <p className="text-brand font-display text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
