import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { produceResult } from "@little-nebulae/result";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";
import { JsonStringifyError } from "@/errors/stringify";

export function jsonStringify({
  value,
  space = DEFAULT_JSON_STRINGIFY_SPACE,
}: {
  value: unknown;
  space?: string | number;
}) {
  return produceResult({
    tryFn: () => JSON.stringify(value, null, space),
    catchFn: (error) => {
      if (error instanceof TypeError) {
        return new JsonStringifyError({ cause: error, meta: null });
      }
      return new UnexpectedError({
        message: composeErrorMessage({
          operation: "convert value to JSON string",
        }),
        cause: error,
        meta: null,
      });
    },
  });
}
