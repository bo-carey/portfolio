import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine(items => new Set(items).size === items.length, {
      message: 'tags must be unique'
    })
    .optional()
});

// const projectSchema = z.object({
//   title: z.string(),
//   description: z.string(),
//   heroImage: z.string().optional(),
//   badge: z.string().optional(),
//   link: z.string().url(), // Link to the project
//   repository: z.string().url(), // Link to the GitHub repository
//   technologies: z.array(z.string()).optional(), // Technologies used in the project
//   status: z.enum(['active', 'completed', 'archived']).optional(), // Project status
//   tags: z
//     .array(z.string())
//     .refine(items => new Set(items).size === items.length, {
//       message: 'tags must be unique'
//     })
//     .optional()
// });

export type BlogSchema = z.infer<typeof blogSchema>;
// export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({
  schema: blogSchema
});
// const projectCollection = defineCollection({
//   loader: glob({
//     pattern: '**/*.md',
//     base: 'src/content/projects'
//   }),
//   schema: projectSchema
// });

export const collections = {
  blog: blogCollection
  // projects: projectCollection
};
