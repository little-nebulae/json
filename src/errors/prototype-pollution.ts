import { BaseError } from "@little-nebulae/error";

export const PROTOTYPE_POLLUTION_ERROR_CODE = "PROTOTYPE_POLLUTION_ERROR";
export type PrototypePollutionErrorCode = typeof PROTOTYPE_POLLUTION_ERROR_CODE;

export type DangerousProperty = "__proto__" | "constructor" | "prototype";

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

export const PROTOTYPE_POLLUTION_ERROR_CAUSE_MESSAGE_REG_EXP =
  /Detected property (__proto__|constructor|prototype)\. This is a prototype pollution risk/;

export function identifyPrototypePollutionErrorCause({
  error,
}: {
  error: Error;
}) {
  const matches = PROTOTYPE_POLLUTION_ERROR_CAUSE_MESSAGE_REG_EXP.exec(
    error.message,
  );
  if (matches === null) {
    return matches;
  }
  return matches[0] as DangerousProperty;
}
