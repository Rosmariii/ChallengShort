export function nonConstructible(coins: number[]) {
  const order = coins.sort((a, b) => a - b);

  const lastNum = order[order.length - 1];

  const newArray = order.slice(0, -1);

  const sum = newArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (sum < lastNum) {
    return sum + 1;
  } else {
    return 1;
  }
}
