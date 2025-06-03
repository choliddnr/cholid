import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const project = defineCollection({
  // Load Markdown and MDX files in the `src/content/project/` directory.
  loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
});

const profile = defineCollection({
  // Load Markdown and MDX files in the `src/content/profile/` directory.
  loader: glob({ base: "./src/content/profile", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
});

export const collections = { project, profile };
