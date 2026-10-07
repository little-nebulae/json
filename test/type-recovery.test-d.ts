import { expectTypeOf, test } from "vitest";

import { deserialize } from "@/ops/derialize";
import { parse } from "@/ops/parse";
import { serialize } from "@/ops/serialize";
import { stringify } from "@/ops/stringify";

test("parse should recover the original type passed to stringify", () => {
  const originalValue = { hello: "Hello there!", bye: "Bye bye!" };
  const text = stringify(originalValue);
  const parsedValue = parse(text);

  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});

test("deserialize should recover the original type passed to serialize", () => {
  const originalValue = {
    hello: "Hello there!",
    bye: "Bye bye!",
    today: new Date(),
  };
  const text = serialize(originalValue);
  const deserializedValue = deserialize(text);

  expectTypeOf(deserializedValue).toEqualTypeOf(originalValue);
});
