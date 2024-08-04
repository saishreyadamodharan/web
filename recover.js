document.getElementById('recover-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('new-password').value;
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        users[username].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('recover-output').innerText = 'Password reset successful!';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    } else {
        document.getElementById('recover-output').innerText = 'Username does not exist.';
    }
});
