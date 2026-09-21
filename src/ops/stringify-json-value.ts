import type { JSONType } from "zod";

export function stringifyJsonValue({
  value,
  space = 2,
}: {
  value: JSONType;
  space?: string | number;
}) {
  return JSON.stringify(value, null, space);
}
