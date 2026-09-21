import type { JSONType } from "zod";

import { z } from "zod";

export function isJsonValue(value: unknown): value is JSONType {
  return z.validate(z.json(), value);
}
