import type { StringifiableValue } from "@/types/stringifiable";

import { DEFAULT_STRINGIFY_SPACE } from "@/ops/stringify/constants";

export function stringify(
  value: StringifiableValue,
  {
    replacer,
    space = DEFAULT_STRINGIFY_SPACE,
  }: {
    replacer?: (this: any, key: string, value: any) => any;
    space?: string | number;
  } = { space: DEFAULT_STRINGIFY_SPACE },
) {
  return JSON.stringify(value, replacer, space);
}
