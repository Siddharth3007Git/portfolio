const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;
const SCREENSHOT_DIRS = ["screenshots", "screenshot", "assets/screenshots", "docs/screenshots", "images", "assets/images"];

export type RepoMeta = {
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
};

export type RepoScreenshot = {
  name: string;
  url: string;
};

/**
 * Fetches repo metadata (stars, language, last update) from the GitHub REST API.
 * Falls back to null on failure (rate limit, network, private repo) so the UI
 * can render gracefully without it.
 */
export async function getRepoMeta(repo: string): Promise<RepoMeta | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/Siddharth3007Git/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      language: data.language ?? null,
      updatedAt: data.updated_at ?? "",
    };
  } catch {
    return null;
  }
}

/**
 * Walks a handful of conventional screenshot directories in the repo and
 * returns any images it finds as raw.githubusercontent URLs. If the repo has
 * no such folder (or the API rate-limits us), it returns an empty array and
 * the project card falls back to the CSS-built banner only.
 */
export async function getRepoScreenshots(repo: string, branch = "main"): Promise<RepoScreenshot[]> {
  for (const dir of SCREENSHOT_DIRS) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/Siddharth3007Git/${repo}/contents/${dir}?ref=${branch}`,
        { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } }
      );
      if (!res.ok) continue;
      const data = await res.json();
      if (!Array.isArray(data)) continue;

      const images = data
        .filter((item: any) => item.type === "file" && IMAGE_EXT.test(item.name))
        .map((item: any) => ({ name: item.name, url: item.download_url as string }));

      if (images.length > 0) return images;
    } catch {
      // try next candidate directory
    }
  }
  return [];
}
