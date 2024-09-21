window.prometheusCommands = [
    { command: 'prometheus --config.file=prometheus.yml', description: 'Start Prometheus server with a configuration file' },
    { command: 'curl http://<prometheus-ip>:9090/api/v1/query?query=<metric>', description: 'Query metrics from Prometheus' },
    { command: 'curl http://<prometheus-ip>:9090/metrics', description: 'List all available metrics' }
];
