window.seleniumCommands = [
    { command: 'java -jar selenium-server-standalone.jar', description: 'Starts the Selenium server for WebDriver' },
    { command: 'java -Dwebdriver.chrome.driver=<path_to_chromedriver> -jar selenium-server-standalone.jar', description: 'Starts the Selenium server with ChromeDriver' },
    { command: 'java -Dwebdriver.gecko.driver=<path_to_geckodriver> -jar selenium-server-standalone.jar', description: 'Starts the Selenium server with GeckoDriver' },
    { command: 'java -Dwebdriver.edge.driver=<path_to_edgedriver> -jar selenium-server-standalone.jar', description: 'Starts the Selenium server with EdgeDriver' },
    { command: 'java -Dwebdriver.safari.driver=<path_to_safaridriver> -jar selenium-server-standalone.jar', description: 'Starts the Selenium server with SafariDriver' },
    { command: 'selenium-server -port <port>', description: 'Specifies the port for the Selenium server' },
    { command: 'selenium-server -host <host>', description: 'Specifies the host for the Selenium server' },
    { command: 'selenium-server -role hub', description: 'Starts the Selenium server as a hub for Selenium Grid' },
    { command: 'selenium-server -role node -hub <url>', description: 'Starts the Selenium server as a node connected to the specified hub URL' },
    { command: 'selenium-server -role node -nodeConfig <config.json>', description: 'Starts the Selenium server as a node with the specified configuration file' },
    { command: 'selenium-server -Dwebdriver.<browser>.driver=<path>', description: 'Specifies the path to the WebDriver executable for a specific browser' },
    { command: 'selenium-server -Dwebdriver.<browser>.binary=<path>', description: 'Specifies the path to the browser binary for a specific browser' },
    { command: 'selenium-server --log <file>', description: 'Logs server output to the specified file' },
    { command: 'selenium-server --debug', description: 'Enables debug logging' },
    { command: 'selenium-server --help', description: 'Displays help information and usage for Selenium commands' },
    { command: 'java -jar selenium-server-standalone.jar -role hub', description: 'Starts Selenium Grid Hub' },
    { command: 'java -jar selenium-server-standalone.jar -role node -hub <hub_url>', description: 'Starts a Selenium Grid Node connected to the specified hub' },
    { command: 'java -jar selenium-server-standalone.jar -role node -nodeConfig <node_config.json>', description: 'Starts a Selenium Grid Node with the specified configuration file' },
    { command: 'java -jar selenium-server-standalone.jar -role node -hub <hub_url> -nodeConfig <node_config.json>', description: 'Starts a Selenium Grid Node with the specified hub URL and configuration file' },
    { command: 'java -jar selenium-server-standalone.jar -role hub -port <port>', description: 'Starts Selenium Grid Hub on the specified port' },
    { command: 'java -jar selenium-server-standalone.jar -role node -hub <hub_url> -port <port>', description: 'Starts a Selenium Grid Node connected to the specified hub and port' },
    { command: 'open <url>', description: 'Opens the specified URL in the browser' },
    { command: 'click <locator>', description: 'Clicks on the element specified by the locator' },
    { command: 'type <locator> <value>', description: 'Types the specified value into the element identified by the locator' },
    { command: 'select <locator> <option>', description: 'Selects an option from a dropdown element identified by the locator' },
    { command: 'verifyText <locator> <text>', description: 'Verifies that the text of the element identified by the locator matches the specified text' },
    { command: 'assertText <locator> <text>', description: 'Asserts that the text of the element identified by the locator matches the specified text' },
    { command: 'waitForElementPresent <locator>', description: 'Waits until the element specified by the locator is present' },
    { command: 'storeText <locator> <variable>', description: 'Stores the text of the element identified by the locator into a variable' },
    { command: 'runScript <script>', description: 'Runs the specified JavaScript code' },
    { command: 'pause <milliseconds>', description: 'Pauses execution for the specified number of milliseconds' },
    { command: 'open', description: 'Opens a new browser window or tab' },
    { command: 'pause', description: 'Pauses test execution for a specified time' },
    { command: 'executeScript <script>', description: 'Executes JavaScript in the browser' },
    { command: 'assert', description: 'Asserts a condition in the test' },
    { command: 'verify', description: 'Verifies a condition in the test' },
    { command: 'store', description: 'Stores a value in a variable' },
    { command: 'echo <message>', description: 'Prints a message to the log' },
    { command: 'repeat <times>', description: 'Repeats the current test steps a specified number of times' },
    { command: 'addCookie <name> <value>', description: 'Adds a cookie with the specified name and value' },
    { command: 'deleteCookie <name>', description: 'Deletes the cookie with the specified name' },
    { command: 'run', description: 'Runs the current test case' },
    { command: 'stop', description: 'Stops the execution of the current test case' },
];