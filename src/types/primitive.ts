import type { z } from "zod";

import type { JsonPrimitiveSchema } from "@/schemas/primitive";

export type JsonPrimitive = z.infer<typeof JsonPrimitiveSchema>;
