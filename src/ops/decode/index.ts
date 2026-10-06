import type { SuperJSONResult } from "superjson";

import { deserialize } from "superjson";

import type { EncodedValue } from "@/types/encoded";

export function decode<T = unknown>(
  value: EncodedValue,
  options: {
    inPlace?: boolean;
  } = {
    inPlace: false,
  },
): T {
  const decoded = deserialize<T>(value as SuperJSONResult, options);
  return decoded;
}
