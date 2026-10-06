import type { Tagged } from "type-fest";

import { BaseError } from "@little-nebulae/error";

export const PROTOTYPE_POLLUTION_ERROR_CODE = "PROTOTYPE_POLLUTION_ERROR";
export type PrototypePollutionErrorCode = typeof PROTOTYPE_POLLUTION_ERROR_CODE;

export type PrototypePollutionErrorCauseTagName =
  "PrototypePollutionErrorCause";
export type PrototypePollutionErrorCause = Tagged<
  Error,
  PrototypePollutionErrorCauseTagName
>;

export class PrototypePollutionError extends BaseError<
  PrototypePollutionErrorCode,
  PrototypePollutionErrorCause,
  null
> {
  readonly name = "PrototypePollutionError";
  readonly code = PROTOTYPE_POLLUTION_ERROR_CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: PrototypePollutionErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
