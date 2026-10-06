import {
  composeErrorMessage,
  DEFAULT_FAILURE_REASON,
  UnexpectedError,
} from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";

import type { EncodedValue } from "@/types/encoded";

import { decode } from "@/ops/decode";

export function attemptDecode<T = unknown>(value: EncodedValue) {
  return attempt({
    tryFn: () => decode<T>(value),
    catchFn: (error) => {
      const operation = "decode value";
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
