const { getGreeting } = require("@gedai/mylibz");

function main() {
  const defaultGreeting = getGreeting();
  const userGreeting = getGreeting("Jack");

  console.log({ defaultGreeting, userGreeting });
  // { defaultGreeting: 'Hello, World!', userGreeting: 'Hello, Jack!' }
}

main();
