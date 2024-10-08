window.mongoCommands = [
    { command: 'mongo', description: 'Start MongoDB interactive shell' },
    { command: 'show dbs', description: 'List all databases' },
    { command: 'use <database>', description: 'Switch to a specific database' },
    { command: 'db.createCollection("<name>")', description: 'Create a new collection' },
    { command: 'db.dropDatabase()', description: 'Delete the current database' },
    { command: 'db.<collection>.insert(<document>)', description: 'Insert a document into a collection' },
    { command: 'db.<collection>.find()', description: 'Query all documents in a collection' },
    { command: 'db.<collection>.find({<condition>})', description: 'Query documents with specific criteria' },
    { command: 'db.<collection>.update({<condition>}, {<update>})', description: 'Update documents in a collection' },
    { command: 'db.<collection>.remove({<condition>})', description: 'Delete documents from a collection' },
    { command: 'db.getCollectionNames()', description: 'List all collections in the current database' },
    { command: 'show users', description: 'List all users in the database' },
    { command: 'db.createUser({user: "<name>", pwd: "<password>", roles: ["<role>"]})', description: 'Create a new user with specific roles' },
    { command: 'db.dropUser("<name>")', description: 'Delete a user' },
    { command: 'db.stats()', description: 'Show database statistics' },
    { command: 'db.<collection>.drop()', description: 'Drop a collection' },
    { command: 'mongodump --db <database> --out <directory>', description: 'Backup the database' },
    { command: 'mongorestore <directory>', description: 'Restore a backup of the database' },
    { command: 'exit', description: 'Quit MongoDB shell' }
];
