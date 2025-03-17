export function stringCalculator(numbers) {
    if (!numbers) return 0;
    if (!numbers.includes(",") && !numbers.includes("\n")) return parseInt(numbers, 10);
  }