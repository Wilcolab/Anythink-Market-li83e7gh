function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    return input
        .toLowerCase()
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word; // Keep the first word lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of subsequent words
        })
        .join('');
}

// Examples
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber
console.log(toCamelCase('multiple separators_here-and there')); // multipleSeparatorsHereAndThere

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