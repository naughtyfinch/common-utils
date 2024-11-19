import { now, wait } from "..";

test("should return the current epoch time", () => {
  const currentTime = now();
  const actualTime = new Date().getTime();
  expect(typeof currentTime).toBe("number");
  // Using 100ms as the tolerance between getting times
  expect(actualTime - currentTime).toBeLessThan(100);
});

test("should wait for a specific duration", async () => {
  const durationMs = 100;
  const startTime = now();
  await wait(durationMs);
  const endTime = now();
  expect(endTime - startTime).toBeGreaterThanOrEqual(durationMs);
});
