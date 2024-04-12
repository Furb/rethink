import type { Rule } from "sanity";

export const ydelser = {
  name: "ydelser",
  title: "Ydelser",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Titlen er påkrævet"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule: Rule) => Rule.required().error("Slug er påkrævet"),
    },
    {
      name: "excerpt",
      title: "Experpt",
      type: "text",
    },

    {
      name: "image",
      title: "Main Billede",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
    },

    {
      name: "undertitle",
      title: "Under Titel",
      type: "string",
    },

    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alt",
            },
          ],
        },
      ],
    },
  ],
};
