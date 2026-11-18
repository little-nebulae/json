import type { GetTagMetadata, JsonValue } from "type-fest";

import type { JsonTextOf, JsonTextOfTagName } from "@/types";

import { jsonParse } from "@/parse";

export function jsonParseTaggedText<T extends JsonTextOf<JsonValue>>({
  text,
}: {
  text: T;
}) {
  return jsonParse<GetTagMetadata<T, JsonTextOfTagName>>({ text });
}
