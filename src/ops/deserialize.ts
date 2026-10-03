import type { SuperJSONResult } from "superjson";

import { deserialize } from "superjson";

export function jsonDeserialize<T = unknown>({
  json,
  meta,
  inPlace = false,
}: SuperJSONResult & {
  inPlace?: boolean;
}) {
  const payload = meta ? { json, meta } : { json };
  const originalValue = deserialize<T>(payload, { inPlace });
  return originalValue;
}
