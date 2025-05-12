const navbar = `
<header class="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 overflow-visible" id="navbar">
    <div class="nav-wrapper w-full">
        <div class="nav-container bg-white bg-opacity-95 transition-all duration-500 rounded-none w-screen">
            <div class="flex items-center justify-between px-8 py-4 max-w-[2000px] mx-auto">
                <a href="https://dave-146.github.io/portfolio_v2/" class="flex items-center">
                    <img src="https://dave-146.github.io/portfolio_v2/images/logo.svg" alt="Dave Crean Design" class="h-12 w-auto">
                </a>
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="/#work" class="text-gray-800 hover:text-primary transition-colors">Work</a>
                    <a href="/#about" class="text-gray-800 hover:text-primary transition-colors">About</a>
                    <a href="/#process" class="text-gray-800 hover:text-primary transition-colors">Process</a>
                    <a href="/#contact" class="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors">Let's Talk</a>
                </nav>
                <button class="md:hidden menu-button relative w-8 h-8" id="mobileMenuButton" aria-label="Toggle mobile menu">
                    <div class="menu-icon">
                        <div class="menu-icon-line menu-icon-line-top"></div>
                        <div class="menu-icon-line menu-icon-line-middle"></div>
                        <div class="menu-icon-line menu-icon-line-bottom"></div>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="fixed inset-0 bg-white transform translate-y-full transition-transform duration-500 ease-in-out">
        <div class="h-full flex flex-col justify-center items-center">
            <nav class="flex flex-col space-y-8 text-center">
                <a href="/#work" class="mobile-menu-link text-3xl font-heading text-gray-800 hover:text-primary transition-all transform translate-y-8 opacity-0">Work</a>
                <a href="/#about" class="mobile-menu-link text-3xl font-heading text-gray-800 hover:text-primary transition-all transform translate-y-8 opacity-0">About</a>
                <a href="/#process" class="mobile-menu-link text-3xl font-heading text-gray-800 hover:text-primary transition-all transform translate-y-8 opacity-0">Process</a>
                <a href="/#contact" class="mobile-menu-link text-3xl font-heading text-primary hover:text-primary/80 transition-all transform translate-y-8 opacity-0">Let's Talk</a>
            </nav>
        </div>
    </div>
</header>

<style>
/* Base navbar styles */
.nav-wrapper {
    transition: 
        padding 0.3s ease-out,
        margin-top 0.3s ease-out;
    position: relative;
    overflow: visible;
    padding: 0;
    margin-top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background: transparent;
    box-shadow: none;
}

.nav-container {
    transform-origin: center;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    border: none !important;
    transition: 
        width 0.3s ease-out,
        max-width 0.3s ease-out,
        border-radius 0.3s ease-out,
        background 0.3s ease-out;
    position: relative;
    width: 100%;
    max-width: 100%;
    transform: none;
    background: rgba(255, 255, 255, 0.95);
}

/* Scrolled state styles */
.nav-scrolled .nav-wrapper {
    padding: 0 2rem;
    background: transparent;
    box-shadow: none;
    margin-top: 20px;
}

.nav-scrolled .nav-container {
    border-radius: 9999px;
    width: calc(100% - 4rem);
    max-width: 64rem;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1) !important; /* Added !important */
    box-shadow: 0 8px 32px 0 rgba(60, 60, 90, 0.18), 0 1.5px 6px 0 rgba(60, 60, 90, 0.10) !important; /* Added shadow */
    -webkit-box-shadow: 0 8px 32px 0 rgba(60, 60, 90, 0.18), 0 1.5px 6px 0 rgba(60, 60, 90, 0.10) !important; /* Added shadow for Safari */
    border: none !important; /* Added !important */
}

.nav-scrolled .rounded-button {
    border-radius: 9999px !important;
    transition: border-radius 0.3s;
}
    

/* Mobile menu styles */
.menu-button {
    cursor: pointer;
}

.menu-icon {
    position: relative;
    width: 100%;
    height: 100%;
}

.menu-icon-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.5s ease;
}

.menu-icon-line-top {
    top: 30%;
}

.menu-icon-line-middle {
    top: 50%;
    transform: translateY(-50%);
}

.menu-icon-line-bottom {
    bottom: 30%;
}

/* Animated X state */
.menu-open .menu-icon-line-top {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.menu-open .menu-icon-line-middle {
    opacity: 0;
}

.menu-open .menu-icon-line-bottom {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
}

/* Mobile menu animation states */
#mobileMenu.menu-is-shown {
    transform: translateY(0);
}

#mobileMenu.menu-is-shown .mobile-menu-link {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.6s ease, opacity 0.6s ease;
}

#mobileMenu.menu-is-shown .mobile-menu-link:nth-child(1) { transition-delay: 0.1s; }
#mobileMenu.menu-is-shown .mobile-menu-link:nth-child(2) { transition-delay: 0.2s; }
#mobileMenu.menu-is-shown .mobile-menu-link:nth-child(3) { transition-delay: 0.3s; }
#mobileMenu.menu-is-shown .mobile-menu-link:nth-child(4) { transition-delay: 0.4s; }

#navbar {
  border-bottom-width: 0 !important;
  border-bottom-style: none !important; /* Explicitly set style to none */
  box-shadow: none !important; /* In case a shadow is mimicking a line */
}
</style>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Insert the navbar at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbarElement = document.getElementById('navbar');
    
    function toggleMobileMenu() {
        mobileMenuButton.classList.toggle('menu-open');
        if (mobileMenu) {
            mobileMenu.classList.toggle('menu-is-shown');
        }
        document.body.classList.toggle('overflow-hidden');
    }
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        
        // Handle mobile menu links
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        Array.from(mobileMenuLinks).forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu();
            });
        });

        // Close menu when pressing escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuButton.classList.contains('menu-open')) {
                toggleMobileMenu();
            }
        });
    }

    // Scroll-based navbar transformation
    let lastScroll = 0;
    const scrollThreshold = 100; // Increased from 50 to 100

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > scrollThreshold) {
            navbarElement.classList.add('nav-scrolled');
        } else {
            navbarElement.classList.remove('nav-scrolled');
        }
        
        lastScroll = currentScroll;
    });

    const logoImg = document.querySelector('#navbar img');
    if (logoImg) {
        logoImg.src = 'images/logo.svg'; // Path relative to the <base> href
    }
}); 