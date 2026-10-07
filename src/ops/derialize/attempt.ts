import type {
  StackOverflowedError,
  UnexpectedError,
} from "@little-nebulae/error";
import type { Result } from "@little-nebulae/result";
import type { GetTagMetadata } from "type-fest";

import type { ForbiddenEncodedPathSegmentError } from "@/errors/forbidden-encoded-path-segment/class";
import type { InvalidEncodedPathError } from "@/errors/invalid-encoded-path/class";
import type { InvalidJsonTextError } from "@/errors/invalid-json-text";
import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf, EncodedValueOfTagName } from "@/types/encoded";
import type {
  StringifiedValueOf,
  StringifiedValueOfTagName,
} from "@/types/stringified";

import { attemptDecode } from "@/ops/decode/attempt";
import { attemptParse } from "@/ops/parse/attempt";

export function attemptDeserialize<
  T extends StringifiedValueOf<EncodedValueOf<EncodableValue>>,
>(
  text: T,
  inPlace?: boolean,
): Result<
  GetTagMetadata<
    GetTagMetadata<T, StringifiedValueOfTagName>,
    EncodedValueOfTagName
  >,
  | InvalidJsonTextError
  | ForbiddenEncodedPathSegmentError
  | InvalidEncodedPathError
  | StackOverflowedError
  | UnexpectedError<
      unknown,
      {
        inPlace: boolean | undefined;
      }
    >
> {
  const parseResult = attemptParse(text);
  if (!parseResult.success) {
    return parseResult;
  }
  return attemptDecode(parseResult.data, inPlace);
}
