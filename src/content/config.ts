import { defineCollection, z } from 'astro:content';

const musicArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

const opinionArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    editor: z.string(),
    tags: z.array(z.string()),
    
  })
});

export const collections = {
  'music-articles': musicArticles,
  'opinion-articles': opinionArticles
};
