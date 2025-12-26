# Sudhakar Soni - Premium Portfolio Website

A modern, production-grade personal portfolio website showcasing DevOps expertise and professional achievements.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3+-38B2AC?logo=tailwind-css)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd portfolio-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Features

- ✨ **Smooth Animations** - Framer Motion for elegant scroll reveals
- 🌓 **Dark/Light Mode** - Automatic theme switching with persistence
- 📱 **Fully Responsive** - Mobile-first design for all devices
- ♿ **Accessible** - WCAG 2.1 compliant
- 🎯 **SEO Optimized** - Meta tags and Open Graph support
- 🚀 **Performance** - Optimized builds and lazy loading
- 🎨 **Modern UI** - SaaS-style design with Tailwind CSS

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── providers.tsx   # Theme providers
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects grid
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/
│   └── portfolio.ts    # Portfolio content
└── lib/
    └── utils.ts        # Utility functions
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to customize:
- Personal information
- Experience history
- Skills and expertise
- Projects and case studies
- Education and certifications

### Customize Colors

Modify `tailwind.config.ts` to change the color scheme.

### Add New Sections

1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Import in `src/app/page.tsx`

## 🔨 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

- **next** - React framework
- **react** - UI library
- **framer-motion** - Animations
- **next-themes** - Dark mode
- **lucide-react** - Icons
- **tailwindcss** - Styling
- **typescript** - Type safety

## 🌐 Sections

1. **Hero** - Welcome with CTA buttons
2. **About** - Professional summary
3. **Skills** - Categorized expertise
4. **Experience** - Career timeline
5. **Projects** - Showcase with filters
6. **Contact** - Contact form and info
7. **Footer** - Links and social

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📄 Documentation

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed documentation.

## ✅ Performance

- **Lighthouse Score**: 90+
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimal
- **Image Optimization**: Automatic
- **Code Splitting**: Smart

## 🔒 Best Practices

- ✓ TypeScript for type safety
- ✓ Component composition
- ✓ Responsive design
- ✓ Accessibility (a11y)
- ✓ SEO optimization
- ✓ Error boundaries
- ✓ Clean code architecture

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14+ | Framework |
| React | 18+ | UI Library |
| TypeScript | 5.3+ | Type Safety |
| Tailwind CSS | 3.3+ | Styling |
| Framer Motion | 10.16+ | Animations |
| Lucide Icons | 0.292+ | Icons |

## 📞 Contact

- **Email**: Sudhakarsoni57@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/sudhakar-soni
- **Location**: Bangalore, India

## 📄 License

© 2025 Sudhakar Soni. All rights reserved.

---

**Built with ❤️ using Next.js & Framer Motion**
