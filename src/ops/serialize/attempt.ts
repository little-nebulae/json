import type {
  StackOverflowedError,
  UnexpectedError,
} from "@little-nebulae/error";
import type { Result } from "@little-nebulae/result";

import type { InvalidJsonValueError } from "@/errors/invalid-json-value";
import type { PrototypePollutionError } from "@/errors/prototype-pollution/class";
import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf } from "@/types/encoded";
import type { StringifiedValueOf } from "@/types/stringified";

import { attemptEncode } from "@/ops/encode/attempt";
import { attemptStringify } from "@/ops/stringify/attempt";

export function attemptSerialize<T extends EncodableValue>(
  value: T,
  space?: string | number,
): Result<
  StringifiedValueOf<EncodedValueOf<T>>,
  | PrototypePollutionError
  | StackOverflowedError
  | InvalidJsonValueError
  | UnexpectedError
> {
  const encodeResult = attemptEncode(value);
  if (!encodeResult.success) {
    return encodeResult;
  }
  return attemptStringify(encodeResult.data, space);
}
