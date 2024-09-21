window.chefCommands = [
    { command: 'chef-client --version', description: 'Show Chef Client version' },
    { command: 'chef-client', description: 'Run the Chef client to apply recipes' },
    { command: 'knife cookbook list', description: 'List all cookbooks' },
    { command: 'knife node list', description: 'List all nodes' },
    { command: 'knife ssh "name:<node-name>" "sudo chef-client"', description: 'Run Chef client on a specific node' },
    { command: 'knife bootstrap <host>', description: 'Bootstrap a new node with Chef' }
];
