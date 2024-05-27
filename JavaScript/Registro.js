document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');

    // Validate form fields
    let isValid = true;

    if (fullName.value.trim() === '') {
      fullName.classList.add('is-invalid');
      isValid = false;
    } else {
      fullName.classList.remove('is-invalid');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    if (phone.value.trim() === '') {
      phone.classList.add('is-invalid');
      isValid = false;
    } else {
      phone.classList.remove('is-invalid');
    }

    if (password.value.trim() === '') {
      password.classList.add('is-invalid');
      isValid = false;
    } else {
      password.classList.remove('is-invalid');
    }

    // If form is valid, submit it
    if (isValid) {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, usando AJAX.
      // document.getElementById('registerForm').submit();
    }
  });