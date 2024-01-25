import { nonConstructible } from "./secondChalleng";

test("devuelve la cantidad mínima de cambio no construible", () => {
  expect(nonConstructible([1, 2, 5])).toBe(4);
  expect(nonConstructible([5, 7, 1, 1, 2, 3, 22])).toBe(20);
  expect(nonConstructible([])).toBe(1);
  expect(nonConstructible([2, 3, 4])).toBe(1);
});
