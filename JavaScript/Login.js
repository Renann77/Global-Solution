document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("loginBtn");

  // Adiciona um ouvinte de evento para o botão de login
  loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Evita o envio do formulário

      // Obtém os valores de entrada do usuário
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      // Verifica se o usuário deseja lembrar das credenciais
      if (rememberMe) {
          // Armazena os dados no localStorage
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", rememberMe);
      } else {
          // Se não, limpa os dados do localStorage
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.removeItem("rememberMe");
      }

      // Redireciona para a página de início ou faz outra ação, conforme necessário
       window.location.href = "Principal.html";
      // ou
      // Alguma outra ação após o login
  });
});