import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/karte", priority: 0.9, freq: "weekly" },
    { path: "/reservierung", priority: 0.9, freq: "monthly" },
    { path: "/oeffnungszeiten", priority: 0.7, freq: "monthly" },
    { path: "/kontakt", priority: 0.7, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
