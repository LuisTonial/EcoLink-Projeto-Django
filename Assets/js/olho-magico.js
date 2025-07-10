const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("mousedown", function(){
    passwordInput.type = "text";
    togglePassword.src = "/assets/img/eye.svg";
})

togglePassword.addEventListener("mouseup", function(){
    passwordInput.type = "password";
    togglePassword.src = "/assets/img/eye-traco.svg";
})

togglePassword.addEventListener("mouseleave", function(){
    passwordInput.type = "password";
    togglePassword.src = "/assets/img/eye-traco.svg";
})
