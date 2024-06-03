document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    // Recuperar as informações de registro do localStorage
    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');
  
    // Verificar se o nome de usuário e a senha correspondem aos registrados
    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
      alert('Login bem-sucedido!');
      // Redirecionar o usuário para a página de perfil, por exemplo
      window.location.href = 'Principal.html';
    } else {
      alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
    }
  
    // Limpar campos de login
    document.getElementById('loginForm').reset();
  });
  
