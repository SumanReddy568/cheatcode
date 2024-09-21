window.gitlabCiCommands = [
    { command: 'gitlab-runner --version', description: 'Show GitLab Runner version' },
    { command: 'gitlab-runner register', description: 'Register a new runner' },
    { command: 'gitlab-runner start', description: 'Start the GitLab Runner service' },
    { command: 'gitlab-runner run <executor>', description: 'Run jobs for a specific executor' },
    { command: 'gitlab-runner list', description: 'List all registered runners' },
    { command: 'gitlab-runner exec <executor> <job>', description: 'Execute a job locally with a specific executor' }
];
