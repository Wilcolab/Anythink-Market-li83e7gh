/**
 * Refined Chain Prompt for toKebabCase Function
 * 
 * Use Ctrl+I (Windows/Linux) or Cmd+I (Mac) to invoke Copilot inline chat
 * and paste the prompt below to generate the function.
 */

const refinedPrompt = `
# Create a toKebabCase Function - Chain of Thought Approach

## Step 1: Define the Problem
Kebab-case is a string formatting convention where:
- All letters are lowercase
- Words are separated by hyphens (-)
- Common word boundaries include spaces, underscores, and camelCase transitions
- Examples: "helloWorld" → "hello-world", "hello_world" → "hello-world", "Hello World" → "hello-world"

## Step 2: Identify Transformation Rules
What rules must the function implement?
1. Convert entire string to lowercase
2. Detect word boundaries (spaces, underscores, capital letters following lowercase letters)
3. Replace word boundaries with single hyphens
4. Remove consecutive hyphens
5. Trim leading and trailing hyphens

## Step 3: Design the Algorithm
Create a clear algorithm:
1. Input validation: ensure the input is a string; return empty string if input is not a string
2. Replace underscores and spaces with markers to identify word boundaries
3. Insert hyphens before capital letters that follow lowercase letters
4. Convert to lowercase
5. Clean up: remove consecutive hyphens, trim edges
6. Return the result

## Step 4: Implement the Function with Comments and Edge Cases
Write a JavaScript function named toKebabCase that:
- Takes a string parameter
- Follows the algorithm from Step 3
- Includes explanatory comments for each major transformation
- Handles edge cases: empty strings, null values, strings already in kebab-case, special characters
- Returns a clean kebab-cased string

## Step 5: Create Test Cases
Generate an array of test cases with inputs and expected outputs to verify the function works correctly:
- Normal camelCase: "helloWorld"
- Snake case: "hello_world"
- Spaces: "hello world"
- Already kebab: "hello-world"
- Mixed: "HelloWorld_Test Case"
- All caps: "HELLO"
- Empty: ""
- Single word: "hello"

## Generate the Code
Now write the complete implementation with the function definition and a set of test cases below it.
`;

console.log(refinedPrompt);

/**
 * Converts a string to camelCase format.
 * 
 * @param {string} input - The input string to convert (may contain spaces, hyphens, underscores, or mixed case)
 * @returns {string} The converted camelCase string
 * @throws {TypeError} If input is not a string and cannot be coerced to one
 * 
 * @example
 * toCamelCase("hello world")        // "helloWorld"
 * toCamelCase("hello-world")        // "helloWorld"
 * toCamelCase("hello_world")        // "helloWorld"
 * toCamelCase("HelloWorld")         // "helloWorld"
 * toCamelCase("HELLO WORLD")        // "helloWorld"
 * toCamelCase("")                   // ""
 * toCamelCase("hello")              // "hello"
 */
function toCamelCase(input) {
  if (input == null) return '';
  const str = String(input).trim();
  if (!str) return '';

  // First, handle camelCase by inserting a separator before uppercase letters that follow lowercase letters
  let normalized = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  
  // Split on word boundaries (spaces, hyphens, underscores)
  const parts = normalized.split(/[\s\-_]+/).filter(Boolean);
  if (parts.length === 0) return '';

  // First word lowercase, subsequent words capitalized
  const first = parts[0].toLowerCase();
  const rest = parts.slice(1).map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return first + rest.join('');
}

/**
 * Converts a string to dot.case format.
 * 
 * @param {string} input - The input string to convert (may contain spaces, hyphens, underscores, or mixed case)
 * @returns {string} The converted dot.case string (all lowercase with dots separating words)
 * @throws {TypeError} If input is not a string and cannot be coerced to one
 * 
 * @example
 * toDotCase("hello world")          // "hello.world"
 * toDotCase("helloWorld")           // "hello.world"
 * toDotCase("hello_world")          // "hello.world"
 * toDotCase("hello-world")          // "hello.world"
 * toDotCase("HelloWorld")           // "hello.world"
 * toDotCase("HELLO WORLD")          // "hello.world"
 * toDotCase("")                     // ""
 * toDotCase("hello")                // "hello"
 */
function toDotCase(input) {
  if (input == null) return '';
  const str = String(input).trim();
  if (!str) return '';

  // Handle camelCase by inserting dots before uppercase letters
  let converted = str.replace(/([a-z0-9])([A-Z])/g, '$1.$2');
  
  // Replace all spaces, hyphens, and underscores with dots
  converted = converted.replace(/[\s\-_]+/g, '.');
  
  // Convert to lowercase
  converted = converted.toLowerCase();
  
  // Remove consecutive dots and trim leading/trailing dots
  converted = converted.replace(/\.+/g, '.').replace(/^\.+|\.+$/g, '');
  
  return converted;
}

// Test cases to verify the implementations
const testCases = [
  // toCamelCase tests
  { fn: 'toCamelCase', input: 'hello world', expected: 'helloWorld' },
  { fn: 'toCamelCase', input: 'hello-world', expected: 'helloWorld' },
  { fn: 'toCamelCase', input: 'hello_world', expected: 'helloWorld' },
  { fn: 'toCamelCase', input: 'HelloWorld', expected: 'helloWorld' },
  { fn: 'toCamelCase', input: 'HELLO WORLD', expected: 'helloWorld' },
  { fn: 'toCamelCase', input: '', expected: '' },
  { fn: 'toCamelCase', input: 'hello', expected: 'hello' },
  
  // toDotCase tests
  { fn: 'toDotCase', input: 'hello world', expected: 'hello.world' },
  { fn: 'toDotCase', input: 'helloWorld', expected: 'hello.world' },
  { fn: 'toDotCase', input: 'hello_world', expected: 'hello.world' },
  { fn: 'toDotCase', input: 'hello-world', expected: 'hello.world' },
  { fn: 'toDotCase', input: 'HelloWorld', expected: 'hello.world' },
  { fn: 'toDotCase', input: 'HELLO WORLD', expected: 'hello.world' },
  { fn: 'toDotCase', input: '', expected: '' },
  { fn: 'toDotCase', input: 'hello', expected: 'hello' },
];

// Run tests
testCases.forEach(({ fn, input, expected }) => {
  const result = fn === 'toCamelCase' ? toCamelCase(input) : toDotCase(input);
  const status = result === expected ? '✓' : '✗';
  console.log(`${status} ${fn}("${input}") => "${result}" (expected: "${expected}")`);
});

module.exports = { toCamelCase, toDotCase };
