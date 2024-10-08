window.rubyCommands = [
    { command: 'ruby -v', description: 'Displays the version of the installed Ruby interpreter' },
    { command: 'irb', description: 'Starts an interactive Ruby shell (Interactive Ruby)' },
    { command: 'ruby file_name.rb', description: 'Executes a Ruby script file' },
    { command: 'gem list', description: 'Lists all installed gems' },
    { command: 'gem install gem_name', description: 'Installs a new gem' },
    { command: 'gem update gem_name', description: 'Updates a specific gem' },
    { command: 'gem uninstall gem_name', description: 'Uninstalls a gem' },
    { command: 'bundle install', description: 'Installs the gems specified in the Gemfile' },
    { command: 'bundle update', description: 'Updates the gems specified in the Gemfile' },
    { command: 'rake', description: 'Runs a Rake task (task runner for Ruby)' },
    { command: 'rails -v', description: 'Displays the version of Rails' },
    { command: 'rails new app_name', description: 'Creates a new Rails application' },
    { command: 'rails server', description: 'Starts the Rails server' },
    { command: 'rails generate model ModelName', description: 'Generates a new Rails model' },
    { command: 'rails generate controller ControllerName', description: 'Generates a new Rails controller' },
    { command: 'rails db:migrate', description: 'Runs database migrations' },
    { command: 'rails console', description: 'Starts a Rails console for interacting with the Rails application' },
    { command: 'ruby -e "code"', description: 'Executes Ruby code provided in the command line' },
    { command: 'ruby -Ilib file_name.rb', description: 'Executes a Ruby script with additional load paths' },
    { command: 'ruby -r library file_name.rb', description: 'Executes a Ruby script with a required library' },
    { command: 'puts "message"', description: 'Prints a message to the console' },
    { command: 'def method_name; ... end', description: 'Defines a method' },
    { command: 'class ClassName; ... end', description: 'Defines a class' },
    { command: 'module ModuleName; ... end', description: 'Defines a module' },
    { command: 'include ModuleName', description: 'Includes a module in a class or module' },
    { command: 'extend ModuleName', description: 'Extends a module in a class or object' },
    { command: 'attr_accessor :attribute_name', description: 'Creates getter and setter methods for an attribute' },
    { command: 'attr_reader :attribute_name', description: 'Creates a getter method for an attribute' },
    { command: 'attr_writer :attribute_name', description: 'Creates a setter method for an attribute' },
    { command: 'super', description: 'Calls a method in the superclass' },
    { command: 'self', description: 'Refers to the current object or class' },
    { command: 'yield', description: 'Transfers control from a method to a block' },
    { command: 'begin ... rescue ... end', description: 'Handles exceptions' },
    { command: 'raise "error message"', description: 'Raises an exception' },
    { command: 'File.open("file.txt", "r") { |file| ... }', description: 'Opens a file for reading' },
    { command: 'File.read("file.txt")', description: 'Reads the content of a file into a string' },
    { command: 'File.write("file.txt", "content")', description: 'Writes content to a file' },
    { command: 'Dir.entries("directory_path")', description: 'Lists the entries in a directory' },
    { command: 'Array.new', description: 'Creates a new array' },
    { command: 'Hash.new', description: 'Creates a new hash' },
    { command: 'each do |item| ... end', description: 'Iterates over elements of an array or hash' },
    { command: 'select { |item| ... }', description: 'Filters elements of an array or hash' },
    { command: 'map { |item| ... }', description: 'Transforms elements of an array or hash' },
    { command: 'reject { |item| ... }', description: 'Excludes elements from an array or hash' }
];
