// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to fade in content on page's load
function fadeInOnLoad() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('visible');  // Add 'visible' class to trigger fade-in
        }, 100);
    });
}

// Lazy load and reveal elements on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Add class when element is in view
            observer.unobserve(entry.target);  // Unobserve once animation triggered
        }
    });
});

// Attach observer to all elements you want to animate
document.querySelectorAll('.fade-in').forEach(fadeElement => {
    observer.observe(fadeElement);
});

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

// Call fade-in function on page load
window.addEventListener('load', fadeInOnLoad);

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
