import type { Result } from "@little-nebulae/result";

import { fail, succeed } from "@little-nebulae/result";

import type { JsonValue } from "@/types/value";

import { InvalidJsonStringError } from "@/errors/invalid-json-string";

export function parseJsonString(
  text: string,
): Result<JsonValue, InvalidJsonStringError> {
  try {
    const parsedValue = JSON.parse(text);
    return succeed(parsedValue as JsonValue);
  } catch (error) {
    const syntaxError = error as SyntaxError;
    return fail(
      new InvalidJsonStringError({
        message: "Failed to parse string because it's not valid JSON.",
        cause: syntaxError,
        meta: null,
      }),
    );
  }
}
