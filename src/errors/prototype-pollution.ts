import { BaseError } from "@little-nebulae/error";

export const PROTOTYPE_POLLUTION_ERROR_CODE = "PROTOTYPE_POLLUTION_ERROR";
export type PrototypePollutionErrorCode = typeof PROTOTYPE_POLLUTION_ERROR_CODE;

type DangerousProperty = "__proto__" | "constructor" | "prototype";

export class PrototypePollutionError extends BaseError<
  PrototypePollutionErrorCode,
  Error,
  null
> {
  readonly name = "PrototypePollutionError";
  readonly code = PROTOTYPE_POLLUTION_ERROR_CODE;
  readonly property: DangerousProperty;

  constructor({
    message,
    cause,
    property,
  }: {
    message?: string;
    cause: Error;
    property: DangerousProperty;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
    this.property = property;
  }
}
