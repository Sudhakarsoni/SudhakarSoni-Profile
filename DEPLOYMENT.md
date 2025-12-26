# Deployment Guide

## 🚀 Deployment Options

This Next.js portfolio can be deployed on multiple platforms. Choose the best option for your needs.

---

## 1. Vercel (Recommended for Next.js)

### Why Vercel?
- ✅ Built for Next.js
- ✅ Automatic deployments
- ✅ Free tier available
- ✅ Custom domains
- ✅ Analytics included

### Steps

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Connect Repository**
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Next.js

3. **Deploy**
   ```bash
   # Push to git
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   - Vercel automatically deploys

4. **Add Custom Domain**
   - Project Settings → Domains
   - Add your domain
   - Update DNS records

### Environment Variables
```bash
# In Vercel Dashboard
Settings → Environment Variables
# Add any env vars needed
```

---

## 2. Netlify

### Steps

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub

2. **Create Site**
   - New site from Git
   - Select repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   - Connect → Automatic deploys on push

### Custom Domain
- Domain settings → Add custom domain
- Update DNS records

---

## 3. GitHub Pages

### Setup

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/portfolio', // if in subdirectory
   };
   export default nextConfig;
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy"
   git push origin main
   ```

### Configure GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 4. AWS (Amplify / S3 + CloudFront)

### Option A: AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize**
   ```bash
   amplify init
   ```

3. **Deploy**
   ```bash
   amplify add hosting
   amplify publish
   ```

### Option B: S3 + CloudFront

1. **Build**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - AWS Console → S3
   - Create bucket
   - Enable static website hosting
   - Upload files from `.next`

3. **CloudFront Distribution**
   - Create distribution
   - Set origin to S3 bucket
   - Add custom domain

---

## 5. Docker + Self-Hosted

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
```

### Build & Run

```bash
# Build image
docker build -t sudhakar-portfolio .

# Run container
docker run -p 3000:3000 sudhakar-portfolio

# Push to Docker Hub
docker tag sudhakar-portfolio username/sudhakar-portfolio
docker push username/sudhakar-portfolio
```

### Docker Compose

```yaml
version: '3.8'

services:
  portfolio:
    image: sudhakar-portfolio
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

---

## 6. Railway

1. **Sign Up**
   - [railway.app](https://railway.app)

2. **Connect GitHub**
   - Select repository
   - Auto-detects Next.js

3. **Deploy**
   - Set environment to production
   - Automatic deployments on push

4. **Custom Domain**
   - Settings → Custom Domain
   - Update DNS

---

## 7. Fly.io

### Steps

1. **Install Fly CLI**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign Up**
   ```bash
   flyctl auth signup
   ```

3. **Launch**
   ```bash
   flyctl launch
   ```

4. **Deploy**
   ```bash
   flyctl deploy
   ```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint`
- [ ] Check TypeScript: `npx tsc --noEmit`
- [ ] Test build locally: `npm run build`
- [ ] Test start: `npm start`

### Content
- [ ] Update personal info
- [ ] Verify all links work
- [ ] Check resume is updated
- [ ] Proofread all content
- [ ] Check email is correct

### SEO & Meta
- [ ] Update meta title
- [ ] Update meta description
- [ ] Check Open Graph tags
- [ ] Verify favicon
- [ ] Create sitemap.xml

### Performance
- [ ] Run Lighthouse audit
- [ ] Check bundle size
- [ ] Test on mobile
- [ ] Check image optimization
- [ ] Monitor Core Web Vitals

### Security
- [ ] Remove sensitive data
- [ ] Check .env variables
- [ ] Verify no API keys exposed
- [ ] Enable HTTPS
- [ ] Set security headers

---

## Post-Deployment

### Monitor Performance
```bash
# Check Web Vitals
# Use Google PageSpeed Insights
# Use Vercel Analytics
```

### Update DNS

If using custom domain:

```
For Vercel:
Type: CNAME
Name: www
Value: cname.vercel-dns.com

For Netlify:
Type: CNAME
Name: subdomain
Value: your-site.netlify.app
```

### SSL Certificate
- Automatic with Vercel
- Automatic with Netlify
- Use Let's Encrypt for self-hosted

### Setup Analytics

Add to your deployment:
```typescript
// src/app/layout.tsx
// For Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

---

## Continuous Integration/Deployment

### GitHub Actions Example

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Check types
        run: npx tsc --noEmit
      
      - name: Build
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Troubleshooting Deployment

### Build Fails
```bash
# Check for errors
npm run build

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Styles Missing
- Ensure Tailwind config is correct
- Check CSS import in layout
- Verify PostCSS config

### Images Not Loading
- Check image paths are correct
- Use public folder for static images
- Verify image optimization settings

### Performance Issues
- Check bundle size
- Enable code splitting
- Optimize images
- Use CDN for assets

### Domain Issues
- Verify DNS records
- Check SSL certificate
- Clear DNS cache
- Wait for propagation (up to 48 hours)

---

## Cost Considerations

| Platform | Cost | Limits |
|----------|------|--------|
| Vercel | Free | 100GB bandwidth/month |
| Netlify | Free | 300 minutes/month |
| GitHub Pages | Free | 1GB per repo |
| AWS | Free tier | Limited |
| Railway | $5+ | Pay-as-you-go |
| Fly.io | $0.15/app | Pay-as-you-go |
| Self-hosted | Varies | Full control |

---

## Security Best Practices

1. **Environment Variables**
   - Never commit .env files
   - Use platform-specific env vars
   - Rotate secrets regularly

2. **HTTPS**
   - Always enable SSL
   - Use HSTS headers
   - Update certificates

3. **Headers**
   ```javascript
   // next.config.js
   async headers() {
     return [{
       source: '/:path*',
       headers: [
         { key: 'X-Content-Type-Options', value: 'nosniff' },
         { key: 'X-Frame-Options', value: 'DENY' },
       ]
     }]
   }
   ```

4. **Content Security Policy**
   - Restrict external scripts
   - Use CSP headers
   - Monitor violations

---

## Monitoring & Analytics

### Google Analytics
```bash
npm install gtag.js
```

### Vercel Analytics
- Automatic with Vercel
- Real-time insights
- Web Vitals

### Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

---

## Updating Deployed Site

### After Making Changes

1. **Local Testing**
   ```bash
   npm run dev
   npm run build
   npm start
   ```

2. **Push to Git**
   ```bash
   git add .
   git commit -m "Update: describe changes"
   git push origin main
   ```

3. **Deployment**
   - Automatic on push to main
   - Vercel/Netlify handle build & deploy
   - DNS propagates changes

4. **Verify Live**
   - Check live site
   - Clear browser cache
   - Test on mobile

---

## FAQ

**Q: How do I update content after deployment?**
A: Edit `src/data/portfolio.ts`, commit, push. Auto-deploys within minutes.

**Q: Can I use a custom domain?**
A: Yes. All platforms support custom domains. Update DNS records.

**Q: How do I track visitors?**
A: Use Google Analytics, Vercel Analytics, or Mixpanel.

**Q: Can I add a blog?**
A: Yes. Add new components and extend data structure.

**Q: How do I get better performance?**
A: Optimize images, use CDN, enable caching, monitor Core Web Vitals.

---

**Choose Vercel for easiest deployment of this Next.js portfolio. ✨**
