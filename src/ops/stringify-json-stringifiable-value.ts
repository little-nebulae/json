import type { JsonStringifiable } from "@/types/stringifiable";

export function stringifyJsonStringifiableValue({
  value,
  space = 2,
}: {
  value: JsonStringifiable;
  space?: string | number;
}) {
  return JSON.stringify(value, null, space);
}
