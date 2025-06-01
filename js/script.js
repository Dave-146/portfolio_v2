// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Custom smooth scroll function
    function smoothScrollTo(targetPosition, duration = 800) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeInOutQuad = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            
            window.scrollTo(0, startPosition + (distance * easeInOutQuad(progress)));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Handle navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').slice(1);
            
            // Handle home link
            if (!targetId) {
                smoothScrollTo(0);
                return;
            }

            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                // Calculate target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                // Perform smooth scroll
                smoothScrollTo(targetPosition);
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

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

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
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
            
            if (isValid) {
                // Here you would typically send the form data to your server
                console.log('Form is valid, ready to submit');
                // Reset form
                contactForm.reset();
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
    }
}

// Image hover effect for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const img = card.querySelector('img[data-static-src]');
    if (img) {
      const staticSrc = img.dataset.staticSrc;
      const animatedSrc = img.dataset.animatedSrc;

      card.addEventListener('mouseenter', () => {
        if (animatedSrc) {
          img.src = animatedSrc;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (staticSrc) {
          img.src = staticSrc;
        }
      });
    }
  });
});