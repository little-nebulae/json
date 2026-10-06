import { expectTypeOf, test } from "vitest";

import { parse } from "@/ops/parse";
import { stringify } from "@/ops/stringify";

test("parse should recover the original type passed to stringify", () => {
  const value = { hello: "Hello there!", bye: "Bye bye!" };
  const text = stringify(value);
  const parsedValue = parse(text);

  expectTypeOf(parsedValue).toEqualTypeOf(value);
});
