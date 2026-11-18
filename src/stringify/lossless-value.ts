import type { JsonValue } from "type-fest";

import type { JsonTextOf } from "@/types";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";

export function jsonStringifyLosslessValue<T extends JsonValue>({
  value,
  space = DEFAULT_JSON_STRINGIFY_SPACE,
}: {
  value: T;
  space?: string | number;
}) {
  const text = JSON.stringify(value, null, space);
  return text as JsonTextOf<T>;
}
