window.jenkinsCommands = [
    { command: 'java -jar jenkins.war', description: 'Start Jenkins server' },
    { command: 'curl -X POST http://<jenkins-url>/job/<job-name>/build', description: 'Trigger a build for a job' },
    { command: 'curl http://<jenkins-url>/job/<job-name>/lastBuild/api/json', description: 'Get information about the last build' },
    { command: 'curl -X DELETE http://<jenkins-url>/job/<job-name>/builds/<build-number>', description: 'Delete a specific build' },
    { command: 'curl http://<jenkins-url>/queue/api/json', description: 'List all queued jobs' },
    { command: 'curl -X POST http://<jenkins-url>/user/<username>/descriptorByName/jenkins.security.ApiTokenProperty/generateNewToken', description: 'Generate a new API token' },
    { command: 'curl -X POST http://<jenkins-url>/createItem?name=<job-name> --data-binary @<config-file.xml> -H "Content-Type: application/xml"', description: 'Create a new job from XML configuration' },
    { command: 'curl -X POST http://<jenkins-url>/job/<job-name>/disable', description: 'Disable a specific job' },
    { command: 'curl -X POST http://<jenkins-url>/job/<job-name>/enable', description: 'Enable a specific job' },
    { command: 'curl http://<jenkins-url>/systemInfo', description: 'Get system information' },
    { command: 'curl http://<jenkins-url>/whoAmI', description: 'Get information about the currently authenticated user' }
];
