window.puppetCommands = [
    { command: 'puppet --version', description: 'Show Puppet version' },
    { command: 'puppet apply <manifest.pp>', description: 'Apply a Puppet manifest' },
    { command: 'puppet agent --test', description: 'Run Puppet agent in test mode' },
    { command: 'puppet module list', description: 'List installed Puppet modules' },
    { command: 'puppet resource <type> <name>', description: 'Show the current state of a resource' },
    { command: 'puppet cert list', description: 'List Puppet certificates' }
];
