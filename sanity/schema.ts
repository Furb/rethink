import { type SchemaTypeDefinition } from "sanity";
import { ydelser } from "./schemas/ydelser";
import { kategori } from "./schemas/kategori";
import { cases } from "./schemas/cases";
import { projekter } from "./schemas/projekter";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ydelser, kategori, cases, projekter],
};
