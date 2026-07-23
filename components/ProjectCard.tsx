import { Github, Star, GitFork } from "lucide-react";
import ProjectBanner from "@/components/ProjectBanner";
import { getRepoMeta, getRepoScreenshots } from "@/lib/github";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default async function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [meta, screenshots] = await Promise.all([
    getRepoMeta(project.repo),
    getRepoScreenshots(project.repo),
  ]);

  return (
    <article className="glass group overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1.5">
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProjectBanner theme={project.theme} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-base/60 px-3 py-1 font-mono text-xs text-secondary backdrop-blur-sm">
          0{index + 1}
        </span>
        {meta && (
          <div className="absolute right-5 top-5 flex gap-3 rounded-full bg-base/60 px-3 py-1 font-mono text-xs text-ink-muted backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <Star size={12} className="text-secondary" /> {meta.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} className="text-secondary" /> {meta.forks}
            </span>
          </div>
        )}
        <h3 className="absolute bottom-5 left-6 font-display text-2xl font-bold text-ink">
          {project.title}
        </h3>
      </div>

      <div className="p-7">
        <p className="text-sm italic text-secondary">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.overview}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
              {f}
            </li>
          ))}
        </ul>

        {screenshots.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-muted/70">
              From the repository
            </p>
            <div className="grid grid-cols-3 gap-2">
              {screenshots.slice(0, 6).map((shot) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={shot.url}
                  src={shot.url}
                  alt={shot.name}
                  loading="lazy"
                  className="h-20 w-full rounded-lg border border-white/10 object-cover"
                />
              ))}
            </div>
          </div>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-ink transition-all hover:-translate-y-0.5 hover:border-secondary/60 hover:text-secondary"
        >
          <Github size={16} /> View on GitHub
        </a>
      </div>
    </article>
  );
}
