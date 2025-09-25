// CrewChat.ai Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Animate demo chat messages
    const chatMessages = document.querySelectorAll('.chat-message');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const messageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    chatMessages.forEach(message => {
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        message.style.transition = 'all 0.6s ease';
        messageObserver.observe(message);
    });

    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card, .use-case-card, .testimonial-card');

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });

    // Add some interactivity to the hero demo chat
    const demoBubbles = document.querySelectorAll('.demo-chat .message-bubble');
    demoBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Typewriter effect for the hero title
    const heroTitle = document.querySelector('#typewriter-text');
    const heroDownload = document.querySelector('#hero-download');
    const scrollIndicator = document.querySelector('#scroll-indicator');

    if (heroTitle && heroDownload && scrollIndicator) {
        const text = "The group chat built on\n80+ years of happiness research";
        heroTitle.innerHTML = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                const char = text.charAt(i);
                if (char === '\n') {
                    heroTitle.innerHTML += '<br>';
                } else {
                    heroTitle.innerHTML += char;
                }
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Typewriter finished, show download section and scroll indicator
                setTimeout(() => {
                    heroDownload.style.opacity = '1';
                    heroDownload.style.transform = 'translateY(0)';
                    // Show scroll indicator slightly after download section
                    setTimeout(() => {
                        scrollIndicator.style.opacity = '1';
                    }, 300);
                }, 500); // Wait 500ms after typewriter finishes
            }
        }

        // Start typewriter effect immediately on page load
        setTimeout(typeWriter, 800);

        // Add click handler for hero scroll indicator
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.demo-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add click handlers for all scroll indicators
    const demoScroll = document.querySelector('.demo-scroll');
    const featuresScroll = document.querySelector('.features-scroll');
    const useCasesScroll = document.querySelector('.use-cases-scroll');
    const testimonialsScroll = document.querySelector('.testimonials-scroll');

    if (demoScroll) {
        demoScroll.addEventListener('click', () => {
            document.querySelector('.features').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (featuresScroll) {
        featuresScroll.addEventListener('click', () => {
            document.querySelector('.use-cases').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (useCasesScroll) {
        useCasesScroll.addEventListener('click', () => {
            document.querySelector('.testimonials').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (testimonialsScroll) {
        testimonialsScroll.addEventListener('click', () => {
            document.querySelector('.download').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Add some parallax effect to the hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});