import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06. Contact" title="Get In Touch">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <p className="leading-8 text-muted">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={profile.socials.email}
                className="inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
              >
                <Mail size={18} className="text-accent" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
              >
                <Phone size={18} className="text-accent" />
                {profile.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted">
              <MapPin size={18} className="text-accent" />
              {profile.location}
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
