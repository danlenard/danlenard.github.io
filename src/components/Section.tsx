import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-start gap-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="h-px w-24 bg-brand" />
        </div>
        {children}
      </div>
    </section>
  );
}
