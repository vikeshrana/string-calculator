export function stringCalculator(numbers) {
    if (!numbers) return 0;
    
    if (!numbers.includes(",") && !numbers.includes("\n")) return parseInt(numbers, 10);

    let numArray = numbers.split(',').map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }