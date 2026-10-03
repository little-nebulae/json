import type { Result } from "@little-nebulae/result";
import type { SuperJSONResult, SuperJSONValue } from "superjson";

import {
  composeErrorMessage,
  isError,
  UnexpectedError,
} from "@little-nebulae/error";
import { fail, succeed } from "@little-nebulae/result";
import { serialize } from "superjson";

import { PrototypePollutionError } from "@/errors/prototype-pollution/class";
import { identifyPrototypePollutionErrorCause } from "@/errors/prototype-pollution/identify-cause";

export function jsonSerialize({ value }: { value: SuperJSONValue }) {
  return serialize(value);
}

export function tryJsonSerialize({
  value,
}: {
  value: SuperJSONValue;
}): Result<SuperJSONResult, PrototypePollutionError | UnexpectedError> {
  try {
    const serializeResult = serialize(value);
    return succeed(serializeResult);
  } catch (error) {
    if (isError(error)) {
      const dangerousProperty = identifyPrototypePollutionErrorCause({ error });
      if (dangerousProperty) {
        return fail(
          new PrototypePollutionError({
            cause: error,
            property: dangerousProperty,
          }),
        );
      }
    }

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
