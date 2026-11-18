import type { Jsonifiable } from "type-fest";

import type { JsonTextOf } from "@/types";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";

export function jsonStringifyLossyValue<T extends Jsonifiable>({
  value,
  space = DEFAULT_JSON_STRINGIFY_SPACE,
}: {
  value: T;
  space?: string | number;
}) {
  const text = JSON.stringify(value, null, space);
  return text as JsonTextOf<T>;
}
