import type { Result } from "@little-nebulae/result";
import type { $ZodIssue } from "zod/v4/core";

import { fail, succeed } from "@little-nebulae/result";
import { z } from "zod";

import type { JsonTextOf } from "@/types";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";
import { JsonStringifyError } from "@/errors/stringify";

export function jsonStringify<T>(
  value: T,
  space: string | number = DEFAULT_JSON_STRINGIFY_SPACE,
): Result<
  {
    value: JsonTextOf<T>;
    meta:
      | {
          lossless: true;
        }
      | {
          lossless: false;
          issues: $ZodIssue[];
        };
  },
  JsonStringifyError
> {
  const result = z.json().safeParse(value);

  if (result.success) {
    const text = JSON.stringify(result.data, null, space);
    return succeed({
      value: text as JsonTextOf<T>,
      meta: { lossless: true },
    });
  }

  const issues = result.error.issues;
  try {
    const text = JSON.stringify(value, null, space);
    return succeed({
      value: text as JsonTextOf<T>,
      meta: { lossless: false, issues },
    });
  } catch (error) {
    return fail(new JsonStringifyError({ cause: error as TypeError, issues }));
  }
}
