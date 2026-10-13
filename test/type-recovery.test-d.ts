import { unwrap } from "@little-nebulae/result";
import { expectTypeOf, test } from "vitest";

import { jsonParseTaggedText } from "@/parse/tagged-text";
import { jsonStringify } from "@/stringify";
import { jsonStringifyStrict } from "@/stringify/strict";

const originalValue = { hello: "Hello there!", bye: "Bye bye!" };

test("jsonParseTaggedText should recover the original type passed to jsonStringifyStrict", () => {
  const text = unwrap(jsonStringifyStrict(originalValue));
  const parsedValue = unwrap(jsonParseTaggedText(text));
  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});

test("jsonParseTaggedText should recover the original type passed to jsonStringify", () => {
  const { value: text } = unwrap(jsonStringify(originalValue));
  const parsedValue = unwrap(jsonParseTaggedText(text));
  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});
