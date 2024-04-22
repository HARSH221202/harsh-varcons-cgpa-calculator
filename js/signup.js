// signup.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        // Save user data to local storage
        const userData = {
            username: username,
            emailOrPhone: email, // changed from 'email' to 'emailOrPhone'
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Signup successful! You can now login.');
        // Redirect to login page or perform any other action
    });
});
