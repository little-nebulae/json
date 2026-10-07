import type { SuperJSONResult } from "superjson";
import type { GetTagMetadata } from "type-fest";

import { deserialize } from "superjson";

import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf, EncodedValueOfTagName } from "@/types/encoded";

export function decode<T extends EncodedValueOf<EncodableValue>>(
  value: T,
  inPlace: boolean = false,
): GetTagMetadata<T, EncodedValueOfTagName> {
  const decoded = deserialize<T>(value as SuperJSONResult, { inPlace });
  return decoded;
}
