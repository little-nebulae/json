import type { Result } from "@little-nebulae/result";
import type { ZodParseError } from "@little-nebulae/zod";
import type { JSONType } from "zod";

import { succeed } from "@little-nebulae/result";
import { wrapZodResult } from "@little-nebulae/zod";
import { z } from "zod";

import type { JsonTextOf } from "@/types";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";

export function jsonStringifyStrict<T>(
  value: T,
  space: string | number = DEFAULT_JSON_STRINGIFY_SPACE,
): Result<JsonTextOf<T>, ZodParseError<JSONType>> {
  const result = wrapZodResult(z.json().safeParse(value));

  if (!result.success) {
    return result;
  }

  const text = JSON.stringify(result.data, null, space);
  return succeed(text as JsonTextOf<T>);
}
