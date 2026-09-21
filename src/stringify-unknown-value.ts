import type { Result } from "@little-nebulae/result";
import type { JSONType } from "zod";

import { fail, succeed } from "@little-nebulae/result";

import { InvalidJsonValueError } from "@/errors/invalid-json-value";

export function stringifyUnknownValue({
  value,
  space = 2,
}: {
  value: JSONType;
  space?: string | number;
}): Result<string, InvalidJsonValueError> {
  try {
    const stringifiedText = JSON.stringify(value, null, space);
    return succeed(stringifiedText);
  } catch (error) {
    const typeError = error as TypeError;
    return fail(
      new InvalidJsonValueError({
        message:
          "Failed to convert value to a JSON string because it's not serializable.",
        cause: typeError,
        meta: null,
      }),
    );
  }
}
