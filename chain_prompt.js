"use strict";

// Chain prompt used to generate this function:
// 1) Define kebab-case and list examples to clarify intent.
// 2) Identify transformation rules (lowercase, word boundaries, separators).
// 3) Implement `toKebabCase` with validation and edge-case handling.
// 4) Verify with a few example calls.

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
 * Convert a string to kebab-case.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-cased string.
 * @throws {TypeError} When input is not a string.
 * @example
 * toKebabCase("HelloWorld"); // "hello-world"
 */
function toKebabCase(input) {
  assertString(input, "input");
  const words = splitWords(input);

  if (words.length === 0) {
    return "";
  }

  return words.map((word) => word.toLowerCase()).join("-");
}

module.exports = {
  toKebabCase,
};
