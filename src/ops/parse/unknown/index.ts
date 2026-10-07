export function parseUnknown<T = unknown>(text: string): T {
  return JSON.parse(text);
}
