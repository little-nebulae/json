import type { EncodableValue } from "@/types/encodable";

import { encode } from "@/ops/encode";
import { stringify } from "@/ops/stringify";

export function serialize<T extends EncodableValue>(
  value: T,
  space?: string | number,
) {
  const encodedValue = encode(value);
  return stringify(encodedValue, space);
}
