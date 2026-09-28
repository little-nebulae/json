import type { JsonValue } from "@/types/value";

export function stringifyJsonValue({
  value,
  space = 2,
}: {
  value: JsonValue;
  space?: string | number;
}) {
  return JSON.stringify(value, null, space);
}
