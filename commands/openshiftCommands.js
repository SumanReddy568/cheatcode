window.openshiftCommands = [
    { command: 'oc version', description: 'Show OpenShift CLI version' },
    { command: 'oc login <url>', description: 'Log in to OpenShift cluster' },
    { command: 'oc get pods', description: 'List all pods in the current namespace' },
    { command: 'oc new-app <image>', description: 'Create a new application from an image' },
    { command: 'oc apply -f <file>.yaml', description: 'Apply configuration from a YAML file' },
    { command: 'oc logs <pod>', description: 'View logs from a pod' },
    { command: 'oc exec -it <pod> -- /bin/bash', description: 'Access a pod’s shell' }
];
