// register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Gather user input
        const username = document.getElementById('reg_username').value;
        const password = document.getElementById('reg_password').value;
        const confirmPassword = document.getElementById('reg_confirm_password').value;

        if (password === confirmPassword) {
            // Example of form validation
            // In a real application, this should be validated and submitted to the server
            alert('Registration successful!');
            window.location.href = 'login.html';
        } else {
            alert('Passwords do not match.');
        }
    });
});
