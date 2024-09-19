const techList = document.getElementById('tech-list');
const commandsDisplay = document.getElementById('commands-display');

// Toast notification element
let toast = document.createElement('div');
toast.classList.add('toast');
document.body.appendChild(toast);

// Define technologies and their corresponding command files
const technologies = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    git: 'Git'
};

// Load default (first) technology on page load
window.onload = () => {
    populateTechList();
    const defaultTech = Object.keys(technologies)[0];
    loadCommands(defaultTech);  // Load commands for the first technology
};

// Populate technology list in the sidebar
function populateTechList() {
    techList.innerHTML = '';  // Clear existing items
    Object.keys(technologies).forEach(tech => {
        const listItem = document.createElement('li');
        listItem.textContent = technologies[tech];
        listItem.setAttribute('data-tech', tech);
        techList.appendChild(listItem);
    });
}

// Handle technology click event
techList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedTech = e.target.getAttribute('data-tech');
        loadCommands(selectedTech);
    }
});

// Dynamically load commands for the selected technology
function loadCommands(tech) {
    commandsDisplay.innerHTML = ''; // Clear previous commands

    const script = document.createElement('script');
    script.src = `commands/${tech}Commands.js`;  // Load the corresponding commands file
    script.onload = () => {
        displayCommands(window[`${tech}Commands`]);  // Access the loaded commands
    };
    document.body.appendChild(script);
}

// Function to display commands
function displayCommands(commands) {
    commands.forEach(cmd => {
        const commandBlock = document.createElement('div');
        commandBlock.classList.add('command-block', 'fade-in');

        const preTag = document.createElement('pre');
        preTag.textContent = `${cmd.command}\n${cmd.description}`;
        
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');
        copyButton.textContent = 'Copy';

        // Copy command functionality
        copyButton.addEventListener('click', () => {
            copyToClipboard(cmd.command);
        });

        commandBlock.appendChild(preTag);
        commandBlock.appendChild(copyButton);
        commandsDisplay.appendChild(commandBlock);
    });
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    showToast('Copied to clipboard!');  // Trigger the toast notification
}

// Function to show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);  // Hide the toast after 3 seconds
}
