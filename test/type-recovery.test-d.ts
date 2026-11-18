import { expectTypeOf, test } from "vitest";

import { jsonParseTaggedText } from "@/parse/tagged-text";
import { jsonStringifyLosslessValue } from "@/stringify/lossless-value";

const originalValue = { hello: "Hello there!", bye: "Bye bye!" } as const;

test("jsonParseTaggedText should recover the original type passed to jsonStringifyLosslessValue", () => {
  const text = jsonStringifyLosslessValue({ value: originalValue });
  const parsedValue = jsonParseTaggedText({ text });
  expectTypeOf(parsedValue).toEqualTypeOf(originalValue);
});
