import type { StringifyOptions } from "@/ops/stringify/types";
import type { StringifiableValue } from "@/types/stringifiable";

import { DEFAULT_STRINGIFY_SPACE } from "@/ops/stringify/constants";

export function stringify(
  value: StringifiableValue,
  { replacer, space = DEFAULT_STRINGIFY_SPACE }: StringifyOptions = {
    space: DEFAULT_STRINGIFY_SPACE,
  },
) {
  return JSON.stringify(value, replacer, space);
}
