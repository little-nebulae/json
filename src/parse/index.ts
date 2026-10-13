import { attempt } from "@little-nebulae/result";

import { JsonParseError } from "@/errors/parse";

export function jsonParse<T = unknown>(text: string) {
  return attempt({
    tryFn: () => JSON.parse(text) as T,
    catchFn: (error) => new JsonParseError({ cause: error as SyntaxError }),
  });
}
