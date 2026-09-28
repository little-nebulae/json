import { z } from "zod";

import type { JsonStringifiable } from "@/types/stringifiable";

import { JsonStringifiableSchema } from "@/schemas/stringifiable";

export function isJsonStringifiable(
  value: unknown,
): value is JsonStringifiable {
  return z.validate(JsonStringifiableSchema, value);
}
