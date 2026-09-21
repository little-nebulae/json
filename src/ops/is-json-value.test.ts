import { describe, expect, test } from "vitest";

import { isJsonValue } from "@/ops/is-json-value";

// Success cases
describe("isJsonValue function should return true when", () => {
  const hello = "Hello there!";
  const integer = -10;
  const yes = true;
  const nothing = null;
  const list = [hello, integer, yes, nothing, { hello }];
  const object = {
    [integer]: hello,
    prop: list,
  };

  test("the input value is a string", () => {
    expect(isJsonValue(hello)).toBe(true);
  });

  test("the input value is a number", () => {
    expect(isJsonValue(integer)).toBe(true);
  });

  test("the input value is a boolean", () => {
    expect(isJsonValue(yes)).toBe(true);
  });

  test("the input value is null", () => {
    expect(isJsonValue(nothing)).toBe(true);
  });

  test("the input value is an array of JSON values", () => {
    expect(isJsonValue(list)).toBe(true);
  });

  test("the input value is an object of JSON values", () => {
    expect(isJsonValue(object)).toBe(true);
  });
});
