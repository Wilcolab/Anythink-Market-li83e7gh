/**
 * Chain Prompt: Creating a toKebabCase Function
 * 
 * This prompt demonstrates a multi-step chain-of-thought approach
 * where each step builds upon the previous one to guide Copilot
 * toward creating a robust toKebabCase function.
 */

const chainPrompt = `
# Step 1: Define the Problem
First, explain what kebab-case is:
- Kebab-case (also called kebab-case or hyphen-separated) converts strings where words are separated by hyphens and all letters are lowercase
- Examples: "Hello World" → "hello-world", "camelCase" → "camel-case", "snake_case" → "snake-case"

# Step 2: Identify the Transformation Rules
Based on the definition above, what are the key transformation rules needed?
- Convert all characters to lowercase
- Identify word boundaries (spaces, underscores, camelCase transitions)
- Replace word boundaries with hyphens
- Remove any non-alphanumeric characters except hyphens

# Step 3: Design the Algorithm
Using the rules from Step 2, create a step-by-step algorithm that:
- Takes a string as input
- Handles multiple types of word boundaries simultaneously
- Validates that the input is a string
- Returns the kebab-cased version

# Step 4: Implement the Function
Now write the JavaScript function called toKebabCase that:
- Incorporates the algorithm from Step 3
- Includes comments explaining each transformation step
- Handles edge cases like empty strings, strings with multiple consecutive hyphens, and strings with special characters
- Returns a properly formatted kebab-case string

# Step 5: Verify with Examples
Test the function with these examples to ensure correctness:
- toKebabCase("HelloWorld") should return "hello-world"
- toKebabCase("hello_world") should return "hello-world"  
- toKebabCase("hello-world") should return "hello-world"
- toKebabCase("HELLO WORLD") should return "hello-world"
- toKebabCase("") should return ""
- toKebabCase("alreadyKebab") should return "already-kebab"
`;

console.log(chainPrompt);

/**
 * This chain prompt structure works by:
 * 1. Starting with a clear problem definition
 * 2. Breaking down required rules and behaviors
 * 3. Creating a logical algorithm before coding
 * 4. Implementing based on the planned algorithm
 * 5. Validating the implementation with test cases
 * 
 * Each step depends on understanding the previous step,
 * creating a natural progression that leads to a robust solution.
 */
