const navbar = `
<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm" id="navbar">
    <div class="container mx-auto px-6 py-0 flex items-center justify-between">
        <a href="/" class="flex items-center">
            <img src="/images/logo.svg" alt="Dave Crean Design" class="h-16 w-auto">
        </a>
        <nav class="hidden md:flex items-center space-x-8">
            <a href="/#work" class="text-gray-800 hover:text-primary transition-colors">Work</a>
            <a href="/#about" class="text-gray-800 hover:text-primary transition-colors">About</a>
            <a href="/#process" class="text-gray-800 hover:text-primary transition-colors">Process</a>
            <a href="/#contact" class="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors">Let's Talk</a>
        </nav>
        <button class="md:hidden text-gray-800" id="mobileMenuButton" aria-label="Toggle mobile menu">
            <i class="ri-menu-line text-2xl"></i>
        </button>
    </div>
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out">
        <div class="p-6">
            <button class="absolute top-4 right-4" id="closeMobileMenu" aria-label="Close mobile menu">
                <i class="ri-close-line text-2xl"></i>
            </button>
            <nav class="flex flex-col space-y-6 mt-12">
                <a href="/#work" class="text-gray-800 hover:text-primary transition-colors">Work</a>
                <a href="/#about" class="text-gray-800 hover:text-primary transition-colors">About</a>
                <a href="/#process" class="text-gray-800 hover:text-primary transition-colors">Process</a>
                <a href="/#contact" class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors">Let's Talk</a>
            </nav>
        </div>
    </div>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Insert the navbar at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('translate-x-full');
        document.body.classList.toggle('overflow-hidden');
    }
    
    if (mobileMenuButton && closeMobileMenu && mobileMenu) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        closeMobileMenu.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && !mobileMenu.classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        });

        // Close menu when pressing escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        });

        // Handle mobile menu links
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        Array.from(mobileMenuLinks).forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu();
            });
        });
    }
}); 