import type { Jsonifiable } from "type-fest";

import { DEFAULT_JSON_STRINGIFY_SPACE } from "@/constants";

export function jsonStringifyLossyValue({
  value,
  space = DEFAULT_JSON_STRINGIFY_SPACE,
}: {
  value: Jsonifiable;
  space?: string | number;
}) {
  const text = JSON.stringify(value, null, space);
  return text;
}
