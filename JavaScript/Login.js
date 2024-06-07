document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("loginBtn");

  
  loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); 

      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      
      if (rememberMe) {
          
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", rememberMe);
      } else {
         
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.removeItem("rememberMe");
      }

      
       window.location.href = "Principal.html";
     
  });
});