document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const message = document.getElementById("welcome-message");
        let colors = ["#FF6F61", "#61AFF6", "#6FFF6A", "#FF61E6"];
        let i = 0;
    
        setInterval(() => {
            message.style.color = colors[i];
            i = (i + 1) % colors.length;
        }, 3000);
    });
    
    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer
::contentReference[oaicite:0]{index=0};))
