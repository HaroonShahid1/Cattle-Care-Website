function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPassword = document.querySelector('.show-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassword.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPassword.textContent = 'Show';
    }
}

function validateLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    alert("LOGIN SUCCESFUL");
}