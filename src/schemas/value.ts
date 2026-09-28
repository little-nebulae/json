import { z } from "zod";

import type { JsonArray, JsonObject, JsonValue } from "@/types/value";

export const JsonObjectSchema = z.record(
  z.string(),
  z.json(),
) as z.ZodType<JsonObject>;

export const JsonArraySchema = z.array(z.json()) as z.ZodType<JsonArray>;

export const JsonValueSchema = z.json() as z.ZodType<JsonValue>;
