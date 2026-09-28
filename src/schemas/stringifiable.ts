import { z } from "zod";

import type {
  JsonStringifiableArray,
  JsonStringifiableObject,
} from "@/types/stringifiable";

import { stringifyUnknownValue } from "@/ops/stringify-unknown-value";

export const JsonStringifiableObjectSchema = z
  .custom<JsonStringifiableObject>()
  .superRefine((value, context) => {
    if (typeof value !== "object" || value === null) {
      context.addIssue({
        code: "invalid_type",
        expected: "object",
        message:
          value === null
            ? "Value cannot be null."
            : `Value must be an object. But got ${typeof value} instead.`,
      });
      return;
    }

    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype || proto !== null) {
      context.addIssue({
        code: "custom",
        message: "Value must be a plain object.",
      });
      return;
    }

    const result = stringifyUnknownValue({ value });
    if (!result.success) {
      context.addIssue({
        code: "custom",
        message: result.error.message,
      });
    }
  });

export const JsonStringifiableArraySchema = z
  .custom<JsonStringifiableArray>()
  .superRefine((value, context) => {
    if (!Array.isArray(value)) {
      context.addIssue({
        code: "invalid_type",
        expected: "array",
        message: `Value must be an array. But got ${typeof value} instead.`,
      });
      return;
    }

    const result = stringifyUnknownValue({ value });
    if (!result.success) {
      context.addIssue({
        code: "custom",
        message: result.error.message,
      });
    }
  });
