class Portfolio {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 3;
        this.particles = [];
        this.mouseTrail = [];
        this.isScrolling = false;
        this.observers = [];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initParticles();
        this.initTypingAnimation();
        this.initThemeToggle();
        this.initProgressBar();
        this.initSectionIndicators();
        this.initFloatingButtons();
        this.initCurrentYear();
        this.initScrollAnimations();
        this.initCarousel();
        this.initModal();
        this.initContactForm();
        this.initCursorTrail();
        this.initLazyLoading();
        this.initSmoothScrolling();
        this.initSkillBars();
        this.initCounters();
        this.initTimeline();
        this.initParallax();
        this.initTextColorAnimation();
    }

    setupEventListeners() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('DOMContentLoaded', this.handleDOMLoaded.bind(this));
    }

    // Feature 1: Smooth Scrolling Navigation
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 70;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Feature 2: Typing Animation for Name/Title
    initTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        const texts = ['John Doe', 'a Developer', 'a Designer', 'a Creator'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeText = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        };

        typeText();
    }

    // Feature 3: Parallax Scrolling Effects
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Feature 4: Interactive Skill Bars with Animations
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBars = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const targetWidth = skillBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        skillBar.style.width = targetWidth + '%';
                    }, 500);
                    
                    observer.unobserve(skillBar);
                }
            });
        };

        const skillObserver = new IntersectionObserver(animateSkillBars, {
            threshold: 0.5
        });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // Feature 5: Project Carousel/Slider
    initCarousel() {
        const slides = document.querySelectorAll('.project-slide');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indicators = document.querySelectorAll('.indicator-dot');

        const showSlide = (n) => {
            slides[this.currentSlide].classList.remove('active');
            indicators[this.currentSlide].classList.remove('active');
            
            this.currentSlide = (n + this.totalSlides) % this.totalSlides;
            
            slides[this.currentSlide].classList.add('active');
            indicators[this.currentSlide].classList.add('active');
        };

        prevBtn.addEventListener('click', () => {
            showSlide(this.currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(this.currentSlide + 1);
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto-play carousel
        setInterval(() => {
            showSlide(this.currentSlide + 1);
        }, 5000);
    }

    // Feature 6: Modal Popups for Project Details
    initModal() {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        const closeModal = document.querySelector('.modal-close');
        const openModalBtns = document.querySelectorAll('.open-modal');

        const projectDetails = [
            {
                title: 'E-Commerce Platform',
                description: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance and user experience.',
                features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard', 'Responsive Design'],
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
                github: '#',
                demo: '#'
            },
            {
                title: 'Task Management App',
                description: 'A collaborative task management application designed for teams to organize projects, assign tasks, track progress, and communicate effectively. Features real-time updates and intuitive user interface.',
                features: ['Real-time Collaboration', 'Task Assignment', 'Progress Tracking', 'File Sharing', 'Team Chat', 'Calendar Integration'],
                technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
                github: '#',
                demo: '#'
            },
            {
                title: 'Analytics Dashboard',
                description: 'A powerful business intelligence dashboard providing real-time data visualization, custom reports, and actionable insights. Designed for enterprise-level data analysis and decision making.',
                features: ['Real-time Data Visualization', 'Custom Reports', 'Data Export', 'User Permissions', 'API Integration', 'Mobile Responsive'],
                technologies: ['Angular', 'D3.js', 'Python', 'PostgreSQL', 'REST API'],
                github: '#',
                demo: '#'
            }
        ];

        openModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectIndex = btn.getAttribute('data-project');
                const project = projectDetails[projectIndex];
                
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    
                    <h3>Key Features</h3>
                    <ul class="project-features">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <div class="project-tech-modal">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    
                    <div class="project-links">
                        <a href="${project.github}" class="btn btn-primary" target="_blank">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="${project.demo}" class="btn btn-secondary" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                `;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Feature 7: Contact Form with Validation
    initContactForm() {
        const form = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const showError = (inputId, message) => {
            const errorElement = document.getElementById(`${inputId}-error`);
            errorElement.textContent = message;
            document.getElementById(inputId).style.borderColor = '#ef4444';
        };

        const clearError = (inputId) => {
            const errorElement = document.getElementById(`${inputId}-error`);
            errorElement.textContent = '';
            document.getElementById(inputId).style.borderColor = 'var(--border-color)';
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let hasErrors = false;

            // Clear previous errors
            ['name', 'email', 'subject', 'message'].forEach(field => {
                clearError(field);
            });

            // Validate name
            if (nameInput.value.trim().length < 2) {
                showError('name', 'Name must be at least 2 characters long');
                hasErrors = true;
            }

            // Validate email
            if (!validateEmail(emailInput.value)) {
                showError('email', 'Please enter a valid email address');
                hasErrors = true;
            }

            // Validate subject
            if (subjectInput.value.trim().length < 5) {
                showError('subject', 'Subject must be at least 5 characters long');
                hasErrors = true;
            }

            // Validate message
            if (messageInput.value.trim().length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                hasErrors = true;
            }

            if (!hasErrors) {
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Thank you for your message! I\'ll get back to you soon.');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });

        // Real-time validation
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            input.addEventListener('blur', () => {
                const inputId = input.id;
                const value = input.value.trim();

                switch(inputId) {
                    case 'name':
                        if (value.length >= 2) clearError(inputId);
                        break;
                    case 'email':
                        if (validateEmail(value)) clearError(inputId);
                        break;
                    case 'subject':
                        if (value.length >= 5) clearError(inputId);
                        break;
                    case 'message':
                        if (value.length >= 10) clearError(inputId);
                        break;
                }
            });
        });
    }

    // Feature 8: Dark/Light Theme Toggle
    initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            themeToggle.innerHTML = newTheme === 'dark' 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        });
    }

    // Feature 9: Animated Counters for Statistics
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-count');
                    const increment = target / 100;
                    let current = 0;

                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        };

        const counterObserver = new IntersectionObserver(animateCounter, {
            threshold: 0.7
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Feature 10: Particle Background Animation
    initParticles() {
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = getComputedStyle(document.documentElement)
                    .getPropertyValue('--primary-color');
                ctx.fill();
                ctx.restore();
            }
        }

        // Create particles
        for (let i = 0; i < 50; i++) {
            this.particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }

    // Feature 11: Interactive Timeline for Experience
    initTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const animateTimeline = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const timelineObserver = new IntersectionObserver(animateTimeline, {
            threshold: 0.5
        });

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }

    // Feature 12: Scroll-triggered Animations
    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in');
        
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const scrollObserver = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    }

    // Feature 13: Dynamic Text Color Changing
    initTextColorAnimation() {
        const animatedTexts = document.querySelectorAll('.animate-text');
        
        animatedTexts.forEach(text => {
            text.style.backgroundImage = 'linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--primary-color))';
            text.style.backgroundSize = '200% 200%';
            text.style.webkitBackgroundClip = 'text';
            text.style.backgroundClip = 'text';
            text.style.webkitTextFillColor = 'transparent';
            text.style.animation = 'colorShift 3s ease-in-out infinite';
        });
    }

    // Feature 14: Floating Action Buttons
    initFloatingButtons() {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        const contactFab = document.getElementById('contact-fab');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
                contactFab.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
                contactFab.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        contactFab.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Feature 15: Image Lazy Loading
    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const loadImages = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        };

        const imageObserver = new IntersectionObserver(loadImages, {
            rootMargin: '50px'
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Feature 16: Auto-updating Copyright Year
    initCurrentYear() {
        const yearElement = document.getElementById('current-year');
        yearElement.textContent = new Date().getFullYear();
    }

    // Feature 17: Mouse Cursor Trail Effects
    initCursorTrail() {
        const trail = document.getElementById('cursor-trail');
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            trail.style.opacity = '0.7';
        });

        document.addEventListener('mouseleave', () => {
            trail.style.opacity = '0';
        });

        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            trail.style.left = trailX - 10 + 'px';
            trail.style.top = trailY - 10 + 'px';
            
            requestAnimationFrame(animateTrail);
        };

        animateTrail();
    }

    // Feature 18: Section Visibility Indicators
    initSectionIndicators() {
        const sections = document.querySelectorAll('.section');
        const indicators = document.querySelectorAll('.indicator');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveSection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    // Update indicators
                    indicators.forEach(indicator => {
                        indicator.classList.remove('active');
                        if (indicator.dataset.section === sectionId) {
                            indicator.classList.add('active');
                        }
                    });

                    // Update nav links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        const sectionObserver = new IntersectionObserver(updateActiveSection, {
            threshold: 0.4
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Add click handlers for indicators
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const targetSection = document.getElementById(indicator.dataset.section);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Feature 19: Dynamic Progress Indicators
    initProgressBar() {
        const progressBar = document.getElementById('progress-bar');

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Feature 20: Interactive Navigation Menu
    initInteractiveMenu() {
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Event Handlers
    handleScroll() {
        if (!this.isScrolling) {
            this.isScrolling = true;
            requestAnimationFrame(() => {
                this.isScrolling = false;
            });
        }
    }

    handleResize() {
        // Handle any resize-specific logic
        const canvas = document.getElementById('particles-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    handleDOMLoaded() {
        // Initialize any DOM-dependent features
        this.initInteractiveMenu();
        
        // Add loading animation
        document.body.classList.add('loaded');
        
        // Preload critical resources
        this.preloadResources();
    }

    preloadResources() {
        // Preload any critical resources for better performance
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Initialize the portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Add some global utility functions
window.debounce = function(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.throttle = function(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', navigationTiming.loadEventEnd - navigationTiming.loadEventStart, 'ms');
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
