import { z } from "zod";

import type { JsonStringifiableObject } from "@/types/stringifiable";

import { stringifyUnknownValue } from "@/ops/stringify-unknown-value";

export const JsonStringifiableObjectSchema = z
  .custom<JsonStringifiableObject>()
  .superRefine((value, context) => {
    if (typeof value !== "object" || value === null) {
      context.addIssue({
        code: "invalid_type",
        expected: "object",
        message:
          value === null ? "Value cannot be null." : "Value must be an object.",
      });
    }

    const result = stringifyUnknownValue({ value });
    if (!result.success) {
      context.addIssue({
        code: "custom",
        message: result.error.message,
      });
    }
  });
