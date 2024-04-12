import { defineType } from "sanity";
import type { Rule } from "sanity";

export const kategori = defineType({
  name: "kategori",
  title: "Kategori",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Kategori",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Titlen er påkrævet"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule: Rule) => Rule.required().error("Slug er påkrævet"),
    },
  ],
});
