import path from 'path';
import { z, defineCollection } from 'astro:content';
const glob = import.meta.glob('./**'); /* vite */

export const collectionNames = [...new Set(Object.keys(glob).map((filepath) => path.basename(path.dirname(filepath))))];


const schema = {
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    mdImages: z.array(image()).optional(),
    gallery: z.string().optional()
  })
};

function assignCollection(acc, name) {
  return Object.assign(acc, { [name]: defineCollection({ ...schema }) });
} 

export const collections = collectionNames.reduce(assignCollection, {});