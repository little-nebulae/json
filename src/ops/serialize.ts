import type { Result } from "@little-nebulae/result";
import type { SuperJSONResult, SuperJSONValue } from "superjson";

import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { fail, succeed } from "@little-nebulae/result";
import { serialize } from "superjson";

export function jsonSerialize({ value }: { value: SuperJSONValue }) {
  return serialize(value);
}

export function tryJsonSerialize({
  value,
}: {
  value: SuperJSONValue;
}): Result<SuperJSONResult, UnexpectedError> {
  try {
    const serializeResult = serialize(value);
    return succeed(serializeResult);
  } catch (error) {
    return fail(
      new UnexpectedError({
        message: composeErrorMessage({
          operation: "serialize JavaScript value into a JSON-compatible object",
          reason: "some unexpected error",
        }),
        cause: error,
        meta: null,
      }),
    );
  }
}
