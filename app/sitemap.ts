import type { MetadataRoute } from "next";
import { seo, projects } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/#about", "/#experience", "/#projects", "/#skills", "/#contact"].map(
    (path) => ({
      url: `${seo.siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.6,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${seo.siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
