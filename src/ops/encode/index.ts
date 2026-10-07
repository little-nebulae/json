import { serialize } from "superjson";

import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf } from "@/types/encoded";

export function encode<T extends EncodableValue>(value: T): EncodedValueOf<T> {
  const encoded = serialize(value);
  return encoded as EncodedValueOf<T>;
}
