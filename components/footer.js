const footer = `
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
        <div class="flex flex-col items-center text-center mb-12">
            <a href="/" class="flex items-center justify-center">
                <img src="/images/logo-white.svg" alt="Dave Crean Design" class="h-20 w-auto">
            </a>
            <p class="text-gray-400 mt-4 max-w-md text-center">Creating intuitive and beautiful digital experiences that solve real problems.</p>
        </div>
        <div class="flex justify-center space-x-6 mb-12">
            <a href="https://linkedin.com/in/davecrean" class="text-gray-400 hover:text-white transition-colors">
                <i class="ri-linkedin-line text-2xl"></i>
            </a>
           
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p class="text-gray-400">© 2025 Dave Crean Design</p>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
}); 