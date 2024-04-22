// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailOrPhone = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.emailOrPhone === emailOrPhone && userData.password === password) {
            alert('Login successful!');
            window.location.href = 'cgpa.html'; // Redirect to cgpa.html after successful login
        } else {
            alert('Invalid email/phone or password. Please try again.');
        }
    });
});
