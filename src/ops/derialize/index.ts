import type { EncodableValue } from "@/types/encodable";
import type { EncodedValueOf } from "@/types/encoded";
import type { StringifiedValueOf } from "@/types/stringified";

import { decode } from "@/ops/decode";
import { parse } from "@/ops/parse";

export function deserialize<
  T extends StringifiedValueOf<EncodedValueOf<EncodableValue>>,
>(text: T, inPlace?: boolean) {
  const parsedValue = parse(text);
  return decode(parsedValue, inPlace);
}
