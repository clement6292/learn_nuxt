import { defineCollection, defineContentConfig ,z} from "@nuxt/content";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: 'blog/**/*.md',
            schema:z.object({
                title: z.string(),
                description: z.string(),
                image: z.object({
                    src: z.string(),
                }),
                auteur: z.array(
                    z.object({
                        name: z.string(),
                        to: z.string(),
                        avatar:z.object({
                            src: z.string()
                        })
                    })
                )
            })
        })
    },
});