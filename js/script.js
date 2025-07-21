// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(25, 118, 210, 0.95)'; // ฟ้าเข้มโปร่งแสง
        navbar.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
    } else {
        navbar.style.background = 'rgba(227, 242, 253, 0.95)'; // ฟ้า very light
        navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.1)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. I will get back to you soon.`);
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
