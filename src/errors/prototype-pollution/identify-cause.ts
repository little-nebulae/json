export type DangerousProperty = "__proto__" | "constructor" | "prototype";

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
  return matches[1] as DangerousProperty;
}
