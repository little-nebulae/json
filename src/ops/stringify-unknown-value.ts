import type { Result } from "@little-nebulae/result";

import { fail, succeed } from "@little-nebulae/result";

import { InvalidJsonValueError } from "@/errors/invalid-json-value";

export const STRINGIFY_UNKNOWN_VALUE_ERROR_MESSAGE =
  "Failed to convert value to a JSON string because it's not serializable.";

export function stringifyUnknownValue({
  value,
  space = 2,
}: {
  value: unknown;
  space?: string | number;
}): Result<string, InvalidJsonValueError> {
  try {
    const stringifiedText = JSON.stringify(value, null, space);
    return succeed(stringifiedText);
  } catch (error) {
    const typeError = error as TypeError;
    return fail(
      new InvalidJsonValueError({
        message: STRINGIFY_UNKNOWN_VALUE_ERROR_MESSAGE,
        cause: typeError,
        meta: null,
      }),
    );
  }
}
