const core = require('@actions/core');

function run() {
  try {
    const name = core.getInput('username');
    console.log(`Hello, ${name}! 👋`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
