window.nightwatchCommands = [
    { command: 'nightwatch', description: 'Runs all Nightwatch.js tests in the current directory and its subdirectories' },
    { command: 'nightwatch <file>', description: 'Runs tests in the specified file' },
    { command: 'nightwatch <directory>', description: 'Runs tests in the specified directory' },
    { command: 'nightwatch --env <environment>', description: 'Runs tests using the specified environment configuration' },
    { command: 'nightwatch --test <file>', description: 'Runs a specific test file' },
    { command: 'nightwatch --reporter <reporter>', description: 'Specifies a reporter to use for output (e.g., html, json, junit)' },
    { command: 'nightwatch --config <config_file>', description: 'Specifies a custom configuration file' },
    { command: 'nightwatch --testworkers <num>', description: 'Specifies the number of test workers to use' },
    { command: 'nightwatch --parallel', description: 'Runs tests in parallel' },
    { command: 'nightwatch --selenium-port <port>', description: 'Specifies the port for the Selenium server' },
    { command: 'nightwatch --selenium-host <host>', description: 'Specifies the host for the Selenium server' },
    { command: 'nightwatch --verbose', description: 'Displays detailed information about the test execution' },
    { command: 'nightwatch --silent', description: 'Suppresses all output except test results' },
    { command: 'nightwatch --help', description: 'Displays help information and usage for Nightwatch.js commands' }
];
