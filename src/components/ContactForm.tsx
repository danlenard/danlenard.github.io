"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!FORM_ID) {
      setStatus("error");
      setErrorMessage(
        "The contact form is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ID in your environment.",
      );
      return;
    }
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Request failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email me directly instead.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-foreground transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Hello Dan..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-accent-contrast shadow-[0_18px_40px_-18px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-accent">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-danger">{errorMessage}</p>
      )}
    </form>
  );
}
