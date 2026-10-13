import type { Result } from "@little-nebulae/result";

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
          issues: z.core.$ZodIssue[];
        };
  },
  JsonStringifyError
> {
  const result = z.json().safeParse(value);
  try {
    const text = JSON.stringify(value, null, space);
    return succeed({
      value: text as JsonTextOf<T>,
      meta: result.success
        ? { lossless: true }
        : { lossless: false, issues: result.error.issues },
    });
  } catch (error) {
    return fail(new JsonStringifyError({ cause: error as TypeError }));
  }
}
