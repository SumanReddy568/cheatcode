window.grafanaCommands = [
    { command: 'grafana-cli -v', description: 'Show Grafana CLI version' },
    { command: 'grafana-server web', description: 'Start Grafana server' },
    { command: 'grafana-cli plugins install <plugin-id>', description: 'Install a Grafana plugin' },
    { command: 'grafana-cli admin reset-admin-password <new-password>', description: 'Reset Grafana admin password' }
];
