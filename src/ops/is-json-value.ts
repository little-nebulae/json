import { z } from "zod";

import type { JsonValue } from "@/types/value";

import { JsonValueSchema } from "@/schemas/value";

export function isJsonValue(value: unknown): value is JsonValue {
  return z.validate(JsonValueSchema, value);
}
