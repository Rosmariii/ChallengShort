import { smallestDifference } from "./firstChalleng";

test("La menor diferenica que exista comparando dos array de numeros", () => {
  expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).toBe(3);
  expect(smallestDifference([10, 5, 40], [50, 90, 80])).toBe(10);
});
