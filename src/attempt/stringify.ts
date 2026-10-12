import type { UnexpectedError } from "@little-nebulae/error";
import type { Result } from "@little-nebulae/result";
import type { JSONType } from "zod";

import { succeed } from "@little-nebulae/result";
import * as zod from "@little-nebulae/zod";
import { z } from "zod";

import type { JsonTextOf } from "@/types/text-of";

export function attemptStringify<T>(
  {
    value,
    space = 2,
  }: {
    value: T;
    space?: string | number;
  },
  options?: zod.ParseOptions,
): Result<
  JsonTextOf<T>,
  | zod.InvalidDataError<JSONType>
  | zod.UnsupportedAsyncSchemaError
  | UnexpectedError<unknown, zod.ParseOptions>
> {
  const zodParseResult = zod.attemptParse({ schema: z.json(), value }, options);
  if (!zodParseResult.success) {
    return zodParseResult;
  }
  const validValue = zodParseResult.data;

  const text = JSON.stringify(validValue, null, space);
  return succeed(text as JsonTextOf<T>);
}
