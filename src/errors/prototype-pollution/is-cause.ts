import { isError } from "@little-nebulae/error";

import type { PrototypePollutionErrorCause } from "@/errors/prototype-pollution/class";

export function isPrototypePollutionErrorCause(
  value: unknown,
): value is PrototypePollutionErrorCause {
  return isError(value) && value.message.includes("prototype pollution risk");
}
