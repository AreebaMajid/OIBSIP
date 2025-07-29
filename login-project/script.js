function login(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Dummy check - replace with real backend logic
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      errorMessage.textContent = "";
      // Redirect or do more actions here
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  }
  
  function togglePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  }
  