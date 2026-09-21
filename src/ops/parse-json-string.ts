import type { Result } from "@little-nebulae/result";
import type { JSONType } from "zod";

import { fail, succeed } from "@little-nebulae/result";

import { InvalidJsonStringError } from "@/errors/invalid-json-string";

export function parseJsonString(
  text: string,
): Result<JSONType, InvalidJsonStringError> {
  try {
    const parsedValue = JSON.parse(text);
    return succeed(parsedValue as JSONType);
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
