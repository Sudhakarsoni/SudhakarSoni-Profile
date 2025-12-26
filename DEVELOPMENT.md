# Development Guide

## 🚀 Getting Started

### Initial Setup

```bash
# Clone or navigate to project
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 📝 Making Changes

### 1. Update Portfolio Content

The easiest customization is editing `src/data/portfolio.ts`:

```typescript
// Add new project
projects: [
  {
    id: 6,
    title: "New Project",
    client: "Company Name",
    category: ["DevOps", "Kubernetes"],
    description: "Project description...",
    impact: "Impact achieved...",
    technologies: ["Tech1", "Tech2"],
    highlights: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]

// Update skills
skills: {
  "New Category": ["Skill1", "Skill2"]
}

// Add experience
experience: [
  {
    id: 3,
    company: "New Company",
    role: "Your Role",
    duration: "Start – End",
    description: "Role description...",
    responsibilities: [
      "Task 1",
      "Task 2"
    ]
  }
]
```

### 2. Modify Components

Example: Changing Hero section CTA text

```typescript
// src/components/Hero.tsx
<Button className="flex items-center gap-2" size="lg">
  <Download size={20} />
  Custom Resume Text  {/* Change this */}
</Button>
```

### 3. Style Customization

#### Change Colors

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        600: '#0284c7',  // Change primary color
        700: '#0369a1'
      }
    }
  }
}
```

#### Update Spacing

```typescript
// tailwind.config.ts
theme: {
  extend: {
    spacing: {
      // Add custom spacing
    }
  }
}
```

### 4. Add New Section

**Step 1**: Create component

```typescript
// src/components/Blog.tsx
"use client";

import { motion } from "framer-motion";

export const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Blog
        </motion.h2>
        
        {/* Blog content */}
      </div>
    </section>
  );
};
```

**Step 2**: Export from index

```typescript
// src/components/index.ts
export { Blog } from "./Blog";
```

**Step 3**: Add to page

```typescript
// src/app/page.tsx
import { Blog } from "@/components";

export default function Home() {
  return (
    <>
      {/* ... existing sections ... */}
      <Blog />
    </>
  );
}
```

**Step 4**: Add navigation link

```typescript
// src/components/Navbar.tsx
const navItems = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },  // Add this
  // ...
];
```

## 🎨 Common Customizations

### Change Font

```typescript
// tailwind.config.ts
theme: {
  fontFamily: {
    sans: ['Your Font', 'sans-serif']
  }
}
```

### Add Global Font

```css
/* src/app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

* {
  font-family: 'Your Font', sans-serif;
}
```

### Customize Button Styles

```typescript
// src/components/Button.tsx
const variants = {
  primary: "bg-gradient-to-r from-purple-600 to-pink-600", // Change
  secondary: "bg-gray-600",
  outline: "border-2 border-gray-300"
};
```

### Change Dark Mode Colors

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      gray: {
        950: '#1a1a1a' // Change dark background
      }
    }
  }
}
```

## 🔧 Development Tools

### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 📦 Adding Dependencies

```bash
# Add new package
npm install package-name

# Add development dependency
npm install --save-dev package-name

# Update all packages
npm update

# Check for vulnerabilities
npm audit
```

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Build for production
npm run build
```

## 🚀 Performance Tips

### 1. Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority={false}
/>
```

### 2. Lazy Loading

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <p>Loading...</p> }
);
```

### 3. Code Splitting

- Keep components modular
- Use dynamic imports
- Split large pages into sections

## 🐛 Debugging

### Browser DevTools

```javascript
// Debug theme
console.log(document.documentElement.classList)

// Debug animations
window.__FRAMER_MOTION_STABLE_DEVELOPMENT__ = true;
```

### Build Analysis

```bash
# Analyze bundle size
npm run build

# Use webpack-bundle-analyzer
npm install -D webpack-bundle-analyzer
```

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes
git add .
git commit -m "feat: add new section"

# Push to repository
git push origin feature/new-section

# Create pull request on GitHub
```

## 🌐 Environment Variables

Create `.env.local`:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

Use in code:

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📊 File Size Guidelines

Target sizes:
- JavaScript bundle: < 200KB
- CSS: < 50KB
- Images: < 500KB total

## 🔍 SEO Checklist

- [ ] Updated meta tags
- [ ] Added favicon
- [ ] Updated OpenGraph images
- [ ] Created sitemap
- [ ] Added robots.txt
- [ ] Mobile-friendly check
- [ ] Schema markup added

## 🚢 Deployment Checklist

- [ ] Run build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Update environment variables
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Run lighthouse audit
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate

## 💡 Pro Tips

1. **Use TypeScript** - Catch errors early
2. **Keep Components Small** - Easier to test and maintain
3. **Use Data Files** - Separate content from components
4. **Mobile First** - Design for mobile, scale up
5. **Performance First** - Monitor Core Web Vitals
6. **Accessibility** - Built in from start, not an afterthought

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

If working with a team:

1. Follow the component structure
2. Use TypeScript for type safety
3. Add comments for complex logic
4. Test before committing
5. Keep commits atomic and descriptive

## ❓ Troubleshooting

### Hot Reload Not Working
```bash
rm -rf .next
npm run dev
```

### Styles Not Updating
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run dev
```

### Build Errors
```bash
# Check types
npx tsc --noEmit

# Check linting
npm run lint
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

---

**Happy coding! Build something amazing! 🚀**
