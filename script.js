document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }
        
        // In a real app, you would send this to a server
        console.log('Login attempt with:', { email, password });
        
        // Simulate login (for demo purposes only)
        alert('Login functionality would be implemented here. This is just a UI demo.');
    });
    
    // Create account button functionality
    const createAccountBtn = document.querySelector('.create-account-btn');
    createAccountBtn.addEventListener('click', function() {
        alert('Create account functionality would be implemented here. This is just a UI demo.');
    });
});