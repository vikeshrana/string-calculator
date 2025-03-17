export function stringCalculator(numbers) {
    console.log(!numbers);
    if (!numbers.trim()) return 0;

    if (!numbers.includes(",") && !numbers.includes("\n")) return parseInt(numbers, 10);

    let delimiter = /,|\n/; 
    let numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }