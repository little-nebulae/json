import type { GetTagMetadata, JsonValue } from "type-fest";

import type { JsonTextOf, JsonTextOfTagName } from "@/types";

export function jsonParseTaggedText<T extends JsonTextOf<JsonValue>>({
  text,
}: {
  text: T;
}) {
  return JSON.parse(text) as GetTagMetadata<T, JsonTextOfTagName>;
}
