window.ansibleCommands = [
    { command: 'ansible --version', description: 'Displays the version of Ansible installed' },
    { command: 'ansible all -m ping', description: 'Pings all hosts in the inventory to verify connectivity' },
    { command: 'ansible-playbook <playbook.yml>', description: 'Runs an Ansible playbook' },
    { command: 'ansible <host-pattern> -m <module>', description: 'Runs an Ansible module on specified hosts' },
    { command: 'ansible <host-pattern> -a <command>', description: 'Executes a shell command on specified hosts' },
    { command: 'ansible-playbook <playbook.yml> --check', description: 'Runs a playbook in dry-run mode (without making changes)' },
    { command: 'ansible-playbook <playbook.yml> --diff', description: 'Shows the changes made to files during execution' },
    { command: 'ansible-inventory --list', description: 'Displays the inventory file in JSON format' },
    { command: 'ansible-vault create <file>', description: 'Creates a new encrypted file with Ansible Vault' },
    { command: 'ansible-vault edit <file>', description: 'Edits an encrypted file' },
    { command: 'ansible-vault encrypt <file>', description: 'Encrypts an existing file with Ansible Vault' },
    { command: 'ansible-vault decrypt <file>', description: 'Decrypts an encrypted file' },
    { command: 'ansible-vault rekey <file>', description: 'Changes the password of an encrypted file' },
    { command: 'ansible-playbook <playbook.yml> --tags <tag>', description: 'Runs only tasks with the specified tag' },
    { command: 'ansible-playbook <playbook.yml> --limit <host-pattern>', description: 'Limits playbook execution to specific hosts' },
    { command: 'ansible-doc -l', description: 'Lists all available Ansible modules' },
    { command: 'ansible-doc <module>', description: 'Displays documentation for a specific module' },
    { command: 'ansible-galaxy install <role>', description: 'Installs a role from Ansible Galaxy' },
    { command: 'ansible-galaxy init <role-name>', description: 'Creates a new role directory structure' }
];