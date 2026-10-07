import { expectTypeOf, test } from "vitest";

import { parse } from "@/ops/parse";
import { stringify } from "@/ops/stringify";

test("parse should recover the original type passed to stringify", () => {
  const originalValue = { hello: "Hello there!", bye: "Bye bye!" };
  const text = stringify(originalValue);
  const parsedValue = parse(text);

  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});
