import type { SuperJSONResult } from "superjson";

import { deserialize } from "superjson";

import type { EncodedValue } from "@/types/encoded";

export function decode<T = unknown>(value: EncodedValue): T {
  const decoded = deserialize<T>(value as SuperJSONResult);
  return decoded;
}
