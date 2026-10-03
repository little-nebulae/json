import { expect, test } from "vitest";

import { identifyPrototypePollutionErrorCause } from "@/errors/prototype-pollution/identify-cause";

// Success cases
test("identifyPrototypePollutionErrorCause function should find the dangerous property in the right error", () => {
  const dangerousProperty = "__proto__";
  const error = new Error(
    `Detected property ${dangerousProperty}. This is a prototype pollution risk, please remove it from your object.`,
  );

  expect(identifyPrototypePollutionErrorCause({ error })).toBe(
    dangerousProperty,
  );
});
