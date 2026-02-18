function toKebabCase(input) {
    return input
        .toLowerCase() // Convert the string to lowercase
        .replace(/[\s_]+/g, '-'); // Replace spaces and underscores with hyphens
}

module.exports = toKebabCase;