export function smallestDifference(a: number[], b: number[]) {
  let smallest = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let difference = Math.abs(a[i] - b[j]);
      if (i == 0) {
        smallest = difference;
      } else if (difference < smallest) {
        smallest = difference;
      }
    }
  }

  return smallest;
}
const a = [10, 5, 40];
const b = [50, 90, 80];

console.log(smallestDifference(a, b));
