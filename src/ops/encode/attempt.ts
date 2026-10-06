import {
  composeErrorMessage,
  DEFAULT_FAILURE_REASON,
  isStackOverflowError,
  StackOverflowedError,
  UnexpectedError,
} from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";

import type { EncodableValue } from "@/types/encodable";

import { encode } from "@/ops/encode";

export function attemptEncode(value: EncodableValue) {
  return attempt({
    tryFn: () => encode(value),
    catchFn: (error) => {
      const operation = "encode value";
      if (isStackOverflowError(error)) {
        return new StackOverflowedError({
          message: composeErrorMessage({
            operation,
            reason: "too deeply nested input",
          }),
          cause: error,
          meta: null,
        });
      }
      return new UnexpectedError({
        message: composeErrorMessage({
          operation,
          reason: DEFAULT_FAILURE_REASON,
        }),
        cause: error,
        meta: null,
      });
    },
  });
}
