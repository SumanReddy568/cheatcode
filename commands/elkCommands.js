window.elkCommands = [
    { command: 'curl -X GET "localhost:9200"', description: 'Check if Elasticsearch is running' },
    { command: 'curl -X POST "localhost:9200/index_name/_doc"', description: 'Index a document into Elasticsearch' },
    { command: 'curl -X GET "localhost:9200/index_name/_search"', description: 'Search for documents in an index' },
    { command: 'logstash -f <config-file.conf>', description: 'Run Logstash with a specific configuration file' },
    { command: 'kibana --dev', description: 'Start Kibana in development mode' }
];
    