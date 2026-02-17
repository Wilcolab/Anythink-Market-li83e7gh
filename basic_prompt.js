/**
 * Converts a string to camelCase.
 * @param {string} str - The input string to convert.
 * @returns {string} - The camelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Example usage:
console.log(toCamelCase("move two steps")); // Output: "moveTwoSteps"
console.log(toCamelCase("HELLO WORLD"));    // Output: "helloWorld"
console.log(toCamelCase("convert to camel case")); // Output: "convertToCamelCase"