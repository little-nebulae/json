import {
  composeErrorMessage,
  DEFAULT_FAILURE_REASON,
  UnexpectedError,
} from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";

import type { EncodableValue } from "@/types/encodable";

import { encode } from "@/ops/encode";

export function attemptEncode(value: EncodableValue) {
  return attempt({
    tryFn: () => encode(value),
    catchFn: (error) =>
      new UnexpectedError({
        message: composeErrorMessage({
          operation: "encode value",
          reason: DEFAULT_FAILURE_REASON,
        }),
        cause: error,
        meta: null,
      }),
  });
}
