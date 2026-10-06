import type { StringifiableValue } from "@/types/stringifiable";

export function stringify(value: StringifiableValue) {
  return JSON.stringify(value);
}
