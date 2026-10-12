import { unwrap } from "@little-nebulae/result";
import { expectTypeOf, test } from "vitest";

import { attemptParse } from "@/attempt/parse";
import { attemptStringify } from "@/attempt/stringify";

test("attemptParse should recover the original type passed to attemptStringify", () => {
  const originalValue = { hello: "Hello there!", bye: "Bye bye!" };
  const text = unwrap(attemptStringify(originalValue));
  const parsedValue = unwrap(attemptParse(text));

  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});
