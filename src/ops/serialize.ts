import type { SuperJSONValue } from "superjson";

import { serialize } from "superjson";

export function jsonSerialize({ value }: { value: SuperJSONValue }) {
  const serializeResult = serialize(value);
  return serializeResult;
}
