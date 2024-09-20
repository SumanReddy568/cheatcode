const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for the saved theme
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);

// Update the switch based on the saved theme
themeToggleButton.checked = savedTheme === 'dark-mode' ? false : true;

// Event listener to toggle between light and dark mode
themeToggleButton.addEventListener('change', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    // Save the current theme to local storage
    localStorage.setItem('theme', newTheme);
});
