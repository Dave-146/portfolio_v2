# Dave Crean Portfolio

Professional UX/UI Designer Portfolio - Creating intuitive and beautiful digital experiences that solve real problems.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development mode (watches for changes)
npm run dev
```

### Production Build
```bash
# Build optimized CSS for production
npm run build
```

## 📁 Project Structure

```
portfolio_v2/
├── css/
│   ├── input.css          # Tailwind directives and custom styles
│   └── style.css          # Generated CSS (don't edit directly)
├── components/
│   ├── navbar.js          # Navigation component
│   └── footer.js          # Footer component
├── images/                # All project images and assets
├── js/
│   └── script.js          # Main JavaScript functionality
├── projects/              # Individual project pages
├── index.html             # Main portfolio page
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Development Workflow

1. **Start Development**: Run `npm run dev` to start the Tailwind CSS watcher
2. **Make Changes**: Edit your HTML files and `css/input.css`
3. **Auto-rebuild**: CSS will automatically rebuild when you save changes
4. **Production**: Run `npm run build` before deploying

## 🎨 Customization

### Colors
Primary brand color: `#41c1ba` (teal)
- Defined in `tailwind.config.js`
- Used throughout the site for consistency

### Fonts
- **Headings**: Comfortaa (cursive)
- **Body**: Montserrat (sans-serif)

### Custom Components
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component with hover effects
- `.nav-link` - Navigation link with underline animation

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: Default
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

## 🚀 Deployment

This site is configured for GitHub Pages with custom domain `https://www.davidcrean.com/`.

### Before Deploying
1. Run `npm run build` to generate optimized CSS
2. Commit all changes including the generated `css/style.css`
3. Push to GitHub

## 🔧 Performance Optimizations

- ✅ Local Tailwind CSS build (no CDN dependency)
- ✅ Minified CSS for production
- ✅ Optimized images with lazy loading
- ✅ Custom domain configuration
- ✅ Proper meta tags for social sharing

## 📞 Contact

Dave Crean - UX/UI Designer
- Portfolio: https://www.davidcrean.com/
- Email: [Your email here]