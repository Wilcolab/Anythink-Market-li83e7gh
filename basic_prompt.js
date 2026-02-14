// Basic prompt template used for quick zero-shot tasks.
// Exported as a function so callers can inject a task description.

const basicPrompt = (task = '') => {
  const header = 'You are a helpful, concise assistant. Follow instructions exactly and respond clearly.';
  const guidance = 'When producing code, prefer minimal, runnable examples and no extraneous explanation.';
  return [header, guidance, task].filter(Boolean).join('\n\n');
};

module.exports = basicPrompt;
