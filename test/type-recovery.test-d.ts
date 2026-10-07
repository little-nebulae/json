import { expectTypeOf, test } from "vitest";

import { decode } from "@/ops/decode";
import { deserialize } from "@/ops/derialize";
import { encode } from "@/ops/encode";
import { parse } from "@/ops/parse";
import { serialize } from "@/ops/serialize";
import { stringify } from "@/ops/stringify";

test("parse should recover the original type passed to stringify", () => {
  const originalValue = { hello: "Hello there!", bye: "Bye bye!" };
  const text = stringify(originalValue);
  const parsedValue = parse(text);

  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});

test("decode should recover the original type passed to encode", () => {
  const originalValue = {
    hello: "Hello there!",
    bye: "Bye bye!",
    today: new Date(),
  };
  const encodedValue = encode(originalValue);
  const decodedValue = decode(encodedValue);

  expectTypeOf(decodedValue).toEqualTypeOf(originalValue);
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
