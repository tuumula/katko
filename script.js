window.onload = function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to fade in content on page load
    fadeInOnLoad();

    // Show "Back to Top" button when scrolling
    window.onscroll = function() {
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    document.getElementById('backToTopBtn').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};
