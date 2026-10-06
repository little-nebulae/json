import type { StringifiableValue } from "@/types/stringifiable";

export function stringify(
  value: StringifiableValue,
  {
    replacer,
    space = 2,
  }: {
    replacer?: (this: any, key: string, value: any) => any;
    space?: string | number;
  },
) {
  return JSON.stringify(value, replacer, space);
}
