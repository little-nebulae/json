import type { StringifiableValue } from "@/types/stringifiable";
import type { StringifiedValueOf } from "@/types/stringified";

export function stringify<T extends StringifiableValue>(
  value: T,
  space: string | number = 2,
): StringifiedValueOf<T> {
  return JSON.stringify(value, null, space) as StringifiedValueOf<T>;
}
