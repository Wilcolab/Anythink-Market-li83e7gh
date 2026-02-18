function toCamelCase(str) {
    return str
        .toLowerCase() // Convert the string to lowercase
        .replace(/[_\s-]+(.)/g, (_, char) => char.toUpperCase()) // Handle delimiters
        .replace(/^[A-Z]/, char => char.toLowerCase()); // Ensure the first character is lowercase
}

// Examples
console.log(toCamelCase("first name")); // Output: firstName
console.log(toCamelCase("user_id")); // Output: userId
console.log(toCamelCase("SCREEN_NAME")); // Output: screenName
console.log(toCamelCase("mobile-number")); // Output: mobileNumber

/**
 * Converts a given string to camelCase.
 * 
 * This function transforms a string into camelCase format by:
 * - Converting the entire string to lowercase.
 * - Replacing delimiters (spaces, underscores, or hyphens) with the next character in uppercase.
 * - Ensuring the first character of the resulting string is lowercase.
 * 
 * @param {string} str - The input string to be converted.
 * @returns {string} - The camelCase formatted string.
 * 
 * @example
 * toCamelCase("first name"); // Returns "firstName"
 * toCamelCase("user_id"); // Returns "userId"
 * toCamelCase("SCREEN_NAME"); // Returns "screenName"
 * toCamelCase("mobile-number"); // Returns "mobileNumber"
 */

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    return input
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
        .toLowerCase()
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .join('.');
}

// Examples
console.log(toDotCase('first name')); // first.name
console.log(toDotCase('user_id')); // user.id
console.log(toDotCase('SCREEN_NAME')); // screen.name
console.log(toDotCase('mobile-number')); // mobile.number
console.log(toDotCase('multiple separators_here-and there')); // multiple.separators.here.and.there

/**
 * Converts a given string to dot.case.
 * 
 * This function transforms a string into dot.case format by:
 * - Adding spaces between camelCase words.
 * - Converting the entire string to lowercase.
 * - Splitting the string by spaces, hyphens, or underscores.
 * - Joining the resulting segments with dots.
 * 
 * @param {string} input - The input string to be converted.
 * @throws {Error} - Throws an error if the input is not a string.
 * @returns {string} - The dot.case formatted string.
 * 
 * @example
 * toDotCase('first name'); // Returns "first.name"
 * toDotCase('user_id'); // Returns "user.id"
 * toDotCase('SCREEN_NAME'); // Returns "screen.name"
 * toDotCase('mobile-number'); // Returns "mobile.number"
 * toDotCase('multiple separators_here-and there'); // Returns "multiple.separators.here.and.there"
 */


