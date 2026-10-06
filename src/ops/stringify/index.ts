import type { StringifyOptions } from "@/ops/stringify/types";
import type { StringifiableValue } from "@/types/stringifiable";
import type { StringifiedValueOf } from "@/types/stringified";

import { DEFAULT_STRINGIFY_SPACE } from "@/ops/stringify/constants";

export function stringify<T extends StringifiableValue>(
  value: T,
  { replacer, space = DEFAULT_STRINGIFY_SPACE }: StringifyOptions = {
    space: DEFAULT_STRINGIFY_SPACE,
  },
): StringifiedValueOf<T> {
  return JSON.stringify(value, replacer, space) as StringifiedValueOf<T>;
}
