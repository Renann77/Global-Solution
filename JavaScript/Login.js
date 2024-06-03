document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    

    // Simulando uma verificação de login bem-sucedida
    if (username === 'admin' && password === 'admin') {
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        alert('Login bem-sucedido!');
        // Redirecionar para a página inicial ou dashboard
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Preencher os campos se o usuário escolheu "Lembre de mim" anteriormente
window.onload = function() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        document.getElementById('username').value = localStorage.getItem('username');
        document.getElementById('password').value = localStorage.getItem('password');
        document.getElementById('rememberMe').checked = true;
    }
};

