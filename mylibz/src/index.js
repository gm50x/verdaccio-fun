function getGreeting(name) {
  return `Hello, ${name || "World"}!`;
}

module.exports = { getGreeting };
