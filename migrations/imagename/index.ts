import { defineMigration, at, setIfMissing, unset } from "sanity/migrate";

const from = "image";
const to = "mainImage";

export default defineMigration({
  title: "imagename",
  documentTypes: ["cases"],

  migrate: {
    document(doc, context) {
      return [at(to, setIfMissing(doc[from])), at(from, unset())];
    },
  },
});
