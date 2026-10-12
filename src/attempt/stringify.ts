import type { Result } from "@little-nebulae/result";
import type { InvalidDataError } from "@little-nebulae/zod";
import type { JSONType } from "zod";

import { succeed } from "@little-nebulae/result";
import { wrapZodResult } from "@little-nebulae/zod";
import { z } from "zod";

import type { JsonTextOf } from "@/types/text-of";

export function attemptStringify<T>(
  value: T,
  space: string | number = 2,
): Result<JsonTextOf<T>, InvalidDataError<JSONType>> {
  const result = wrapZodResult(z.json().safeParse(value));
  if (!result.success) {
    return result;
  }

  const text = JSON.stringify(result.data, null, space);
  return succeed(text as JsonTextOf<T>);
}
