export function stringCalculator(numbers) {
    if (!numbers.trim()) return 0;

    let delimiter = /,|\n/; 
    
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.slice(customDelimiterMatch[0].length);
    }

    let numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }