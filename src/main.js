document.addEventListener("DOMContentLoaded", function() {
    
    // --- Mobile menu toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Hero Slideshow Script ---
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        slides[currentSlide].classList.add('active'); // Activate the first slide immediately
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // --- Shrinking header script ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    if (contactForm && submitButton) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalButtonHTML = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';

            const formData = new FormData(contactForm);
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbnXxnMALDSWYwPpcPKiKKlPSzEWkBpaGYTdYqX0ctF0IiUTF0gn8DNC6srclotfUg/exec";

            fetch(SCRIPT_URL, { method: 'POST', body: formData })
                .then(response => response.json())
                .then(res => {
                    if (res.result === 'success') {
                        contactForm.reset();
                        submitButton.innerHTML = 'Message Sent!';
                        setTimeout(() => {
                            submitButton.disabled = false;
                            submitButton.innerHTML = originalButtonHTML;
                        }, 3000);
                    } else {
                        throw new Error(res.message || 'Unknown error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again.');
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHTML;
                });
        });
    }
});
