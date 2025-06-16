const formContainer = document.getElementById("formContainer");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

function showLogin() {
    formContainer.style.transform = "translateX(0%)";
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
}

function showSignup() {
    formContainer.style.transform = "translateX(-50%)";
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
}
