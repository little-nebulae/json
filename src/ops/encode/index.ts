import { serialize } from "superjson";

import type { EncodableValue } from "@/types/encodable";
import type { EncodedValue } from "@/types/encoded";

export function encode(value: EncodableValue): EncodedValue {
  const encoded = serialize(value);
  return encoded as EncodedValue;
}
