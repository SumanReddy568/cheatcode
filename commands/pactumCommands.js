window.pactumCommands = [
    { command: 'pactum', description: 'Runs Pactum.js tests' },
    { command: 'pactum <file>', description: 'Runs tests in the specified file' },
    { command: 'pactum --reporter <reporter>', description: 'Specifies a reporter to use for output (e.g., json, html)' },
    { command: 'pactum --config <config_file>', description: 'Specifies a custom configuration file' },
    { command: 'pactum --timeout <milliseconds>', description: 'Sets the timeout for API requests in milliseconds' },
    { command: 'pactum --watch', description: 'Runs tests in watch mode, re-running tests when files change' },
    { command: 'pactum --verbose', description: 'Displays detailed information about the test execution' },
    { command: 'pactum --silent', description: 'Suppresses all output except test results' },
    { command: 'pactum --help', description: 'Displays help information and usage for Pactum.js commands' }
];
