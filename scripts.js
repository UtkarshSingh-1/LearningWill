function goToLogin() {
    window.location.href = "services.html"; 
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
});
