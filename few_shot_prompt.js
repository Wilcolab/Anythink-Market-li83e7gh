// Few-shot prompt template with example inputs and outputs.
// Returns a prompt string that includes the header, examples, and an optional task.

const fewShotPrompt = (task = '') => {
  const header = 'You are a helpful, concise assistant. Follow instructions exactly.';

  const example1 = `Example 1
Input: Convert the following to snake case: "HelloWorld"
Output: hello_world`;

  const example2 = `Example 2
Input: Normalize the string: "  Hello-World!! "
Output: hello_world`;

  return [header, example1, example2, task].filter(Boolean).join('\n\n');
};

module.exports = fewShotPrompt;
