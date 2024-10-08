// Seleciona os ícones de alternância de tema
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Alterna entre o modo claro e o modo escuro
const toggleTheme = () => {
    document.documentElement.classList.toggle('light'); // Alterna a classe 'light' no <html>

    // Salva a preferência do usuário no localStorage
    if (document.documentElement.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
};

// Verifica o tema salvo no localStorage e aplica o tema ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
} else {
    document.documentElement.classList.remove('light');
}

// Adiciona o evento de clique nos ícones para alternar o tema
sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);