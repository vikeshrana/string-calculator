export function stringCalculator(numbers) {
    if (!numbers.trim()) return 0;

    let delimiter = /,|\n/; 

    numbers = numbers.replace(/\\n/g, "\n"); // Convert "\\n" from HTML input to actual newlines ("\n")
    
    let customDelimiterMatch = numbers.match(/^\/\/([^\n]+)\n/); // Check for custom delimiter format
    console.log('customDelimiterMatch',customDelimiterMatch[0].length);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]); // Use custom delimiter
        numbers = numbers.slice(customDelimiterMatch[0].length); // Remove delimiter declaration from input
    }

    let numArray = numbers.split(delimiter).map(num => parseInt(num, 10)); // Split input and convert to numbers

    // handle negative numbers
    let negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }