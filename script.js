function toggleTheme() {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
}

document.getElementById('sun-icon').addEventListener('click', toggleTheme);
document.getElementById('moon-icon').addEventListener('click', toggleTheme);