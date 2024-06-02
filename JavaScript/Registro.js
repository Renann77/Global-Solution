function validarFormulario() {
var telefone = document.getElementById("telefone").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;

  // Expressão regular para validar números de telefone
var regexTelefone = /^\d{10}$/;

  // Expressão regular para validar endereços de e-mail
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Expressão regular para validar senhas
var regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

if (!regexTelefone.test(telefone)) {
    alert("Número de telefone inválido.");
    return false;
}

if (!regexEmail.test(email)) {
    alert("Endereço de e-mail inválido.");
    return false;
}

if (!regexSenha.test(senha)) {
    alert("Senha inválida. Deve conter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra minúscula e uma letra maiúscula.");
    return false;
}

return true;
}