// scripts.js

// Function to check if user is logged in
function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html';
    }
}

// Function to check if user is registered
function checkRegistrationStatus() {
    const registered = localStorage.getItem('registered');
    if (!registered) {
        window.location.href = 'register.html';
    }
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'index.html';
    } else {
        alert('Please enter both username and password.');
    }
}

// Function to handle registration
function handleRegistration(event) {
    event.preventDefault();

    const username = document.getElementById('reg_username').value;
    const password = document.getElementById('reg_password').value;
    const confirmPassword = document.getElementById('reg_confirm_password').value;

    if (username && password && password === confirmPassword) {
        localStorage.setItem('registered', true);
        window.location.href = 'login.html';
    } else {
        alert('Please fill out all fields correctly.');
    }
}

// Function to handle password recovery
function handlePasswordRecovery(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (email) {
        alert('Password recovery instructions sent to ' + email);
        window.location.href = 'login.html';
    } else {
        alert('Please enter your email address.');
    }
}

// Function to handle role selection and redirection
function handleRoleSelection(event) {
    event.preventDefault();
    
    const role = document.getElementById('role').value;
    if (role === 'admin') {
        window.location.href = 'login.html?role=admin';
    } else if (role === 'trainer') {
        window.location.href = 'login.html?role=trainer';
    } else if (role === 'member') {
        window.location.href = 'login.html?role=member';
    }
}

// Add event listeners for forms
document.addEventListener('DOMContentLoaded', () => {
    const roleForm = document.getElementById('roleForm');
    if (roleForm) {
        roleForm.addEventListener('submit', handleRoleSelection);
    }

    const loginForm = document.querySelector('form[action="login.php"]');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registrationForm = document.querySelector('form[action="register.php"]');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }

    const recoveryForm = document.querySelector('form[action="recover.php"]');
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', handlePasswordRecovery);
    }
});
