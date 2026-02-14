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
