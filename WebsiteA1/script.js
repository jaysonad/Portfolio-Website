document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Color-changing welcome message
    const message = document.getElementById("welcome-message");
    if (message) { // Prevent errors if the element doesn't exist
        let colors = ["#FF6F61", "#61AFF6", "#6FFF6A", "#FF61E6"];
        let i = 0;

        setInterval(() => {
            message.style.color = colors[i];
            i = (i + 1) % colors.length;
        }, 3000);
    }

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once faded in
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Contact form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.querySelector('[name="name"]').value;
            const email = document.querySelector('[name="email"]').value;
            const message = document.querySelector('[name="message"]').value;

            const backendUrl = 'http://localhost:5000/contact'; // Change to production URL when deployed

            try {
                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                });

                const result = await response.json();
                alert(result.message); // Success message
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to submit the form. Please try again.');
            }
        });
    }
});
