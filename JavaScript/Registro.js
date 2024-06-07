document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("registerForm");

  
  registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); 

      
      const username = document.getElementById("registerUsername").value;
      const email = document.getElementById("registerEmail").value;
      const phone = document.getElementById("registerPhone").value;
      const password = document.getElementById("registerPassword").value;

      
      const userData = {
          username: username,
          email: email,
          phone: phone,
          password: password
      };

      
      const userDataJSON = JSON.stringify(userData);

      
      localStorage.setItem("userData", userDataJSON);

      
       window.location.href = "Login.html";
      
  });
});