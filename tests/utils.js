const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const snakeCase = (input) => {
  if (input == null) return '';
  const str = String(input).trim();
  if (!str) return '';

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .replace(/[-]+/g, '_')
    .replace(/[^A-Za-z0-9_]+/g, '_')
    .toLowerCase()
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
};

  const toCamelCase = (input) => {
    if (input == null) return '';
    const str = String(input).trim();
    if (!str) return '';

    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const first = parts[0].toLowerCase();
    const rest = parts.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());
    return [first, ...rest].join('');
  };

module.exports = { sleep, snakeCase, toCamelCase };

