import { stringCalculator } from "./utils";

test("returns 0 for empty string", () => {
  expect(stringCalculator("")).toBe(0);
});