/**
 * @returns The current time as an epoch
 */
export function now() {
  return new Date().getTime();
}

/**
 * The async alternative to setTimeout
 * @param durationMs The number of milliseconds to wait
 * @returns A promise that resolves once the 'durationMs' have passed
 */
export function wait(durationMs: number) {
  return new Promise((resolve) => setTimeout(resolve, durationMs));
}
