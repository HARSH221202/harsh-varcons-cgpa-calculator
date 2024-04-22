// auth.js

// Function to check if the user is logged in
function isLoggedIn() {
    // You can implement your own logic to check if the user is logged in
    // For example, you could check if there's a token stored in local storage
    // If the user is logged in, return true; otherwise, return false
    return localStorage.getItem('userData') !== null;
}

// Function to redirect to the login page if the user is not logged in
function redirectToLogin() {
    // Redirect the user to the login page
    window.location.href = 'login.html';
}

// Function to redirect to the CGPA page after successful login
function redirectToCGPA() {
    // Redirect the user to the CGPA page
    window.location.href = 'cgpa.html';
}

// Function to check if the current page requires authentication
function requiresAuthentication() {
    // Check if the current page is the CGPA page
    return window.location.pathname.includes('cgpa.html');
}

// Function to handle page load
function onPageLoad() {
    // If the current page requires authentication and the user is not logged in
    if (requiresAuthentication() && !isLoggedIn()) {
        // Redirect the user to the login page
        redirectToLogin();
    }
}

// Call the onPageLoad function when the page is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoad);
