/**
 * @param min
 * @param max
 * @returns A random number between min and max (both included)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param arr The input array
 * @param returnIndex If true, return the index of the random element instead of the element itself
 * @returns A random element (or it's index) from the array or 'null' if the array is empty
 */
export function randomChoice(arr: any[], returnIndex: boolean = false): any {
  if (arr.length === 0) {
    return null;
  }
  const selectedIndex = randomInt(0, arr.length - 1);
  return returnIndex ? selectedIndex : arr[selectedIndex];
}
