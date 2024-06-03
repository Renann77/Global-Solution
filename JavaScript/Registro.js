document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const registerUsername = document.getElementById('registerUsername').value;
  const registerEmail = document.getElementById('registerEmail').value;
  const registerPhone = document.getElementById('registerPhone').value;
  const registerPassword = document.getElementById('registerPassword').value;

  // Armazenar as informações de registro em localStorage
  localStorage.setItem('registeredUsername', registerUsername);
  localStorage.setItem('registeredEmail', registerEmail);
  localStorage.setItem('registeredPhone', registerPhone);
  localStorage.setItem('registeredPassword', registerPassword);

  alert('Registro bem-sucedido!');

    window.location.href = 'Login.html';
  // Limpar campos de registro
  document.getElementById('registerForm').reset();


});
