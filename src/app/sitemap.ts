import { MetadataRoute } from "next"
import { site, produtos } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const produtoUrls = produtos.map((p) => ({
    url: `${site.url}/produtos/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...produtoUrls,
  ]
}
