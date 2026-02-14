"use strict";

function assertString(value, name) {
  if (typeof value !== "string") {
    throw new TypeError(`${name} must be a string`);
  }
}

function splitWords(value) {
  const withBoundaries = value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-.\s]+/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .trim();

  if (withBoundaries.length === 0) {
    return [];
  }

  return withBoundaries.split(/\s+/g);
}

/**
 * Convert a string to camelCase.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The camelCased string.
 * @throws {TypeError} When input is not a string.
 * @example
 * toCamelCase("hello world"); // "helloWorld"
 * @example
 * toCamelCase("user_id"); // "userId"
 */
function toCamelCase(input) {
  assertString(input, "input");
  const words = splitWords(input);

  if (words.length === 0) {
    return "";
  }

  const [first, ...rest] = words;
  const firstLower = first.toLowerCase();
  const restCased = rest.map((word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return [firstLower, ...restCased].join("");
}

/**
 * Convert a string to dot.case.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The dot.cased string.
 * @throws {TypeError} When input is not a string.
 * @example
 * toDotCase("hello world"); // "hello.world"
 * @example
 * toDotCase("SCREEN_NAME"); // "screen.name"
 */
function toDotCase(input) {
  assertString(input, "input");
  const words = splitWords(input);

  if (words.length === 0) {
    return "";
  }

  return words.map((word) => word.toLowerCase()).join(".");
}

module.exports = {
  toCamelCase,
  toDotCase,
};
