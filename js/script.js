// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('shadow-sm');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('shadow-sm')) {
            header.classList.add('shadow-sm');
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Skill progress animation
    const skillProgresses = document.querySelectorAll('.skill-progress');
    skillProgresses.forEach(progress => {
        const percentage = progress.style.getPropertyValue('--percentage');
        progress.style.setProperty('--percentage', '0%');
        
        setTimeout(() => {
            progress.style.setProperty('--percentage', percentage);
        }, 100);
    });

    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Form validation and EmailJS submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const submitSpinner = document.getElementById('submitSpinner');
            const formMessage = document.getElementById('formMessage');
            
            // Clear previous errors
            clearErrors();
            hideMessage();
            
            // Basic form validation
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Valid email is required');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                showError(message, 'Message is required');
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Check if EmailJS is properly configured
            if (!window.EMAILJS_CONFIG || 
                window.EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
                window.EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
                window.EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE') {
                showMessage('EmailJS is not properly configured. Please check your configuration file.', 'error');
                return;
            }
            
            
            // Show loading state
            setLoadingState(true);
            
            try {
                // Prepare template parameters
                const templateParams = {
                    from_name: name.value.trim(),
                    from_email: email.value.trim(),
                    message: message.value.trim(),
                    to_name: 'Dave Crean'
                };
                
                
                // Send email using EmailJS
                const response = await emailjs.send(
                    window.EMAILJS_CONFIG.SERVICE_ID,
                    window.EMAILJS_CONFIG.TEMPLATE_ID,
                    templateParams,
                    window.EMAILJS_CONFIG.PUBLIC_KEY
                );
                
                // Success
                showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                showMessage('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
            } finally {
                // Hide loading state
                setLoadingState(false);
            }
        });
    }

    // Portfolio View All Projects functionality
    const viewAllButton = document.getElementById('view-all-projects');
    const hiddenProjects = document.querySelectorAll('[data-hidden-project]');
    let projectsVisible = false;

    if (viewAllButton && hiddenProjects.length > 0) {
        viewAllButton.addEventListener('click', function() {
            hiddenProjects.forEach(project => {
                project.classList.toggle('hidden');
            });
            
            // Update button text
            projectsVisible = !projectsVisible;
            viewAllButton.textContent = projectsVisible ? 'Show Less' : 'View All Projects';
        });
    }

    // Carousel Script
    const carouselSlides = document.getElementById('carousel-slides');
    if (carouselSlides) {
        const slides = Array.from(carouselSlides.children);
        const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');
        const indicatorsContainer = document.getElementById('carousel-indicators');
        let currentIndex = 0;
        const numSlides = slides.length;

        if (numSlides > 0) {
            if (indicatorsContainer) {
                slides.forEach((slide, index) => {
                    const button = document.createElement('button');
                    button.setAttribute('aria-label', `Go to slide ${index + 1}`);
                    button.classList.add('w-2.5', 'h-2.5', 'md:w-3', 'md:h-3', 'rounded-full', 'bg-primary', 'transition-all', 'duration-300', 'ease-in-out');
                    if (index === currentIndex) {
                        button.classList.add('bg-opacity-100', 'scale-125');
                        button.classList.remove('bg-opacity-50');
                    } else {
                        button.classList.add('bg-opacity-50');
                        button.classList.remove('bg-opacity-100', 'scale-125');
                    }
                    button.addEventListener('click', () => {
                        currentIndex = index;
                        updateCarousel();
                    });
                    indicatorsContainer.appendChild(button);
                });
            }

            const indicators = indicatorsContainer ? Array.from(indicatorsContainer.children) : [];

            function updateCarousel() {
                carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
                if (indicators.length > 0) {
                    indicators.forEach((indicator, index) => {
                        indicator.classList.toggle('bg-opacity-100', index === currentIndex);
                        indicator.classList.toggle('scale-125', index === currentIndex);
                        indicator.classList.toggle('bg-opacity-50', index !== currentIndex);
                    });
                }
            }

            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % numSlides;
                    updateCarousel();
                });
            }

            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + numSlides) % numSlides;
                    updateCarousel();
                });
            }
            updateCarousel(); // Initial setup
        }
    }
    // End Carousel Script
});

// Helper function to validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Helper function to show error messages
function showError(input, message) {
    const errorId = input.id + '-error';
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        input.classList.add('border-red-500');
    } else {
        // Create error element if it doesn't exist
        const errorDiv = document.createElement('div');
        errorDiv.id = errorId;
        errorDiv.className = 'text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
        input.classList.add('border-red-500');
    }
}

// Helper function to clear all errors
function clearErrors() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(element => element.remove());
    
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    inputs.forEach(input => input.classList.remove('border-red-500'));
}

// Helper function to show success/error messages
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `mt-4 p-4 rounded-xl text-center font-medium ${
            type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
        }`;
        formMessage.classList.remove('hidden');
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                hideMessage();
            }, 5000);
        }
    }
}

// Helper function to hide messages
function hideMessage() {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.classList.add('hidden');
    }
}

// Helper function to set loading state
function setLoadingState(isLoading) {
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    
    if (submitBtn && submitText && submitSpinner) {
        submitBtn.disabled = isLoading;
        if (isLoading) {
            submitText.classList.add('hidden');
            submitSpinner.classList.remove('hidden');
        } else {
            submitText.classList.remove('hidden');
            submitSpinner.classList.add('hidden');
        }
    }
}