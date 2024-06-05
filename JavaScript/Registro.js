document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("registerForm");

  // Adiciona um ouvinte de evento para o formulário de registro
  registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio do formulário

      // Obtém os valores do formulário
      const username = document.getElementById("registerUsername").value;
      const email = document.getElementById("registerEmail").value;
      const phone = document.getElementById("registerPhone").value;
      const password = document.getElementById("registerPassword").value;

      // Cria um objeto com os dados do usuário
      const userData = {
          username: username,
          email: email,
          phone: phone,
          password: password
      };

      // Converte o objeto em uma string JSON
      const userDataJSON = JSON.stringify(userData);

      // Armazena os dados no localStorage
      localStorage.setItem("userData", userDataJSON);

      // Redireciona para a página de login ou faz outra ação, conforme necessário
       window.location.href = "Login.html";
      // ou
      // Alguma outra ação após o registro
  });
});