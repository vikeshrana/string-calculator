import { stringCalculator } from "./utils";

test("returns 0 for empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

test("returns sum for single number", () => {
  expect(stringCalculator("1")).toBe(1);
});