import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <a href="#home" className="font-display text-lg font-bold">
          SJ<span className="text-secondary">.</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-sm text-ink-muted hover:text-secondary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-secondary">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-secondary">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-ink-muted hover:text-secondary">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-ink-muted/60">
        © {new Date().getFullYear()} {profile.name}. Designed &amp; Developed by {profile.name}.
      </p>
    </footer>
  );
}
