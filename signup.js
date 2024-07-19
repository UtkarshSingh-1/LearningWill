document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordCriteria = {
        length: /^(?=.{8,12}$)/,
        uppercase: /^(?=.*[A-Z])/,
        digit: /^(?=.*\d)/,
        specialChar: /^(?=.*[!@#$%^&*])/
    };

    let errorMessage = 'Password must:\n';

    if (!passwordCriteria.length.test(password)) {
        errorMessage += '- Be 8-12 characters long\n';
    }

    if (!passwordCriteria.uppercase.test(password)) {
        errorMessage += '- Include at least one uppercase letter\n';
    }

    if (!passwordCriteria.digit.test(password)) {
        errorMessage += '- Include at least one number\n';
    }

    if (!passwordCriteria.specialChar.test(password)) {
        errorMessage += '- Include at least one special character (!@#$%^&*)\n';
    }

    if (password !== confirmPassword) {
        errorMessage += '- Passwords do not match';
    }

    if (errorMessage !== 'Password must:\n') {
        alert(errorMessage);
        return;
    }

    // If validation passes, show success message and redirect to login page
    alert('Registered successfully!');
    window.location.href = 'login.html';
});
