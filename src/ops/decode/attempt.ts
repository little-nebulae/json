import {
  composeErrorMessage,
  DEFAULT_FAILURE_REASON,
  isStackOverflowError,
  StackOverflowedError,
  UnexpectedError,
} from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";

import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf } from "@/types/encoded";

import { ForbiddenEncodedPathSegmentError } from "@/errors/forbidden-encoded-path-segment/class";
import { isForbiddenEncodedPathSegmentErrorCause } from "@/errors/forbidden-encoded-path-segment/is-cause";
import { InvalidEncodedPathError } from "@/errors/invalid-encoded-path/class";
import { isInvalidEncodedPathErrorCause } from "@/errors/invalid-encoded-path/is-cause";
import { decode } from "@/ops/decode";

export function attemptDecode<T extends EncodedValueOf<EncodableValue>>(
  value: T,
  inPlace?: boolean,
) {
  return attempt({
    tryFn: () => decode<T>(value, inPlace),
    catchFn: (error) => {
      const operation = "decode value";
      if (isForbiddenEncodedPathSegmentErrorCause(error)) {
        return new ForbiddenEncodedPathSegmentError({ cause: error });
      }
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
        meta: { inPlace },
      });
    },
  });
}
