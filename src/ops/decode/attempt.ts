import {
  composeErrorMessage,
  DEFAULT_FAILURE_REASON,
  isStackOverflowError,
  StackOverflowedError,
  UnexpectedError,
} from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";

import type { EncodedValue } from "@/types/encoded";

import { InvalidEncodedPathError } from "@/errors/invalid-encoded-path/class";
import { isInvalidEncodedPathErrorCause } from "@/errors/invalid-encoded-path/is-cause";
import { decode } from "@/ops/decode";

export function attemptDecode<T = unknown>(
  value: EncodedValue,
  options: {
    inPlace?: boolean;
  } = {
    inPlace: false,
  },
) {
  return attempt({
    tryFn: () => decode<T>(value, options),
    catchFn: (error) => {
      const operation = "decode value";
      if (isInvalidEncodedPathErrorCause(error)) {
        return new InvalidEncodedPathError({ cause: error });
      }
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
        meta: options,
      });
    },
  });
}
