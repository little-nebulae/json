import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { produceResult } from "@little-nebulae/result";

import { JsonParseError } from "@/errors/parse";

export function jsonParse<T = unknown>({ text }: { text: string }) {
  return produceResult({
    tryFn: () => JSON.parse(text) as T,
    catchFn: (error) => {
      if (error instanceof SyntaxError) {
        return new JsonParseError({ cause: error, meta: null });
      }
      return new UnexpectedError({
        message: composeErrorMessage({
          operation: "parse JSON text",
        }),
        cause: error,
        meta: null,
      });
    },
  });
}
