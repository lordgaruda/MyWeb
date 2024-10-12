// Function to handle redirection
function redirectTo(url) {
  window.location.href = url;
}

// Theme Toggle Functionality
const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');

// Function to set the theme
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    themeLabel.textContent = 'Dark Mode';
    themeSwitch.checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    themeLabel.textContent = 'Light Mode';
    themeSwitch.checked = false;
  }
}

// Event Listener for the toggle switch
themeSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    setTheme(true);
    localStorage.setItem('theme', 'dark');
  } else {
    setTheme(false);
    localStorage.setItem('theme', 'light');
  }
});

// On page load, set the theme based on saved preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  } else {
    setTheme(false);
  }
});
