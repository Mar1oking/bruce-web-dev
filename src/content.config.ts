import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      summary: z.string(),
      problem: z.string(),
      solution: z.string(),
      result: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      images: z.array(image()),
      date: z.coerce.date(),
      featured: z.boolean(),
    }),
});

export const collections = { work };
