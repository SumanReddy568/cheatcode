window.cypressCommands = [
    { command: 'cypress open', description: 'Opens the Cypress Test Runner in interactive mode' },
    { command: 'cypress run', description: 'Runs all tests in headless mode' },
    { command: 'cypress run --spec <file>', description: 'Runs tests from the specified file' },
    { command: 'cypress run --browser <browser>', description: 'Specifies the browser to use for running tests (e.g., chrome, firefox)' },
    { command: 'cypress run --record', description: 'Records the test results to the Cypress Dashboard' },
    { command: 'cypress run --key <key>', description: 'Specifies the record key for recording tests to the Cypress Dashboard' },
    { command: 'cypress run --headless', description: 'Runs tests in headless mode' },
    { command: 'cypress run --no-video', description: 'Disables video recording of the tests' },
    { command: 'cypress run --config <key>=<value>', description: 'Overrides configuration settings for the test run' },
    { command: 'cypress run --env <key>=<value>', description: 'Sets environment variables for the test run' },
    { command: 'cypress run --group <name>', description: 'Groups test runs with the specified name' },
    { command: 'cypress run --parallel', description: 'Runs tests in parallel on multiple machines or processes' },
    { command: 'cypress run --record --key <key>', description: 'Runs tests and records results to the Cypress Dashboard using the specified key' },
    { command: 'cypress open --config <key>=<value>', description: 'Opens the Cypress Test Runner with specific configuration settings' },
    { command: 'cypress open --env <key>=<value>', description: 'Opens the Cypress Test Runner with environment variables' },
    { command: 'cypress run --config-file <file>', description: 'Specifies a configuration file to use' },
    { command: 'cypress open --config-file <file>', description: 'Opens the Cypress Test Runner with the specified configuration file' },
    { command: 'cypress help', description: 'Displays help information and usage for Cypress commands' },
    { command: 'cypress run --record --parallel', description: 'Runs tests in parallel and records results to the Cypress Dashboard' },
    { command: 'cypress run --record --key <key> --parallel', description: 'Runs tests in parallel and records results to the Cypress Dashboard using the specified key' },
    { command: 'cypress open --browser <browser>', description: 'Opens the Cypress Test Runner in the specified browser' }
];
