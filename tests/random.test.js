import { randomChoice, randomInt } from "..";

test("should return a random number in range", () => {
  let minIncluded = false;
  let maxIncluded = false;
  const min = 0;
  const max = 10;
  // Run 10000 iterations since we are dealing with randomness
  for (let i = 0; i < 10000; i++) {
    const randomNum = randomInt(min, max);
    if (randomNum === min) {
      minIncluded = true;
    }
    if (randomNum === max) {
      maxIncluded = true;
    }
    expect(randomNum).toBeGreaterThanOrEqual(min);
    expect(randomNum).toBeLessThanOrEqual(max);
  }
  expect(minIncluded).toBeTruthy();
  expect(maxIncluded).toBeTruthy();
});

test("should return null for an empty array", () => {
  const inputArr = [];
  const selectedElement = randomChoice(inputArr);
  expect(selectedElement).toBeNull();
});

test("should return a random element from an array", () => {
  const inputArr = [1, 2, 3, 4, 5];
  // Run 10000 iterations since we are dealing with randomness
  for (let i = 0; i < 10000; i++) {
    const selectedElement = randomChoice(inputArr);
    expect(inputArr.includes(selectedElement)).toBeTruthy();
  }
});

test("should return a random index from an array", () => {
  const inputArr = [10, 20, 30, 40, 50];
  // Run 10000 iterations since we are dealing with randomness
  for (let i = 0; i < 10000; i++) {
    const selectedIndex = randomChoice(inputArr, true);
    expect(selectedIndex).toBeGreaterThanOrEqual(0);
    expect(selectedIndex).toBeLessThanOrEqual(4);
  }
});
