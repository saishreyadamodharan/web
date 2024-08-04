// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        if (username && password && role) {
            // Redirect based on role immediately
            window.location.href = `${role}.html`;
        } else {
            alert('Please fill in all fields.');
        }
    });
});
