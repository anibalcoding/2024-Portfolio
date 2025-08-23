# Deployment Guide

This guide covers various deployment options for your portfolio website.

## 🚀 Quick Start

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Static files will be generated in the `out/` directory**

3. **Deploy the `out/` directory to your hosting platform**

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is the platform created by the creators of Next.js and offers the best integration.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

**Benefits:**
- Zero configuration
- Automatic deployments from Git
- Global CDN
- Free tier available

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --dir=out

# Deploy to production
netlify deploy --dir=out --prod
```

**Benefits:**
- Easy form handling
- Git integration
- Free tier available

### 3. GitHub Pages

1. **Update `next.config.js`**
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     basePath: '/your-repo-name',
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   # Copy contents of 'out' directory to your GitHub Pages branch
   ```

### 4. AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront for CDN**

### 5. Traditional Web Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the contents of the `out/` directory to your web server**

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Performance Optimization

### Before Deployment

1. **Optimize images**
   - Use WebP format when possible
   - Compress images appropriately
   - Use Next.js Image component for optimization

2. **Check bundle size**
   ```bash
   npm run build
   # Check the build output for bundle analysis
   ```

3. **Test performance**
   - Use Lighthouse in Chrome DevTools
   - Test on various devices and connections

### After Deployment

1. **Monitor Core Web Vitals**
2. **Set up analytics**
3. **Configure error tracking**

## 🚨 Common Issues

### 1. Images Not Loading

- Ensure images are in the `public/imgs/` directory
- Check image paths in components
- Verify image file permissions

### 2. Build Errors

- Check TypeScript errors: `npm run type-check`
- Verify all dependencies are installed
- Check for syntax errors in components

### 3. Routing Issues

- Ensure `trailingSlash: true` in `next.config.js`
- Check that all internal links use proper paths

## 📊 Analytics Setup

### Google Analytics

1. **Create a Google Analytics account**
2. **Add tracking code to `app/layout.tsx`**

```tsx
// Add this to the head section
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

## 🔒 Security Considerations

1. **HTTPS only**
2. **Security headers**
3. **Content Security Policy**
4. **Regular dependency updates**

## 📈 Monitoring

1. **Performance monitoring**
2. **Error tracking (Sentry, LogRocket)**
3. **Uptime monitoring**
4. **User analytics**

## 🆘 Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Check the [Framer Motion docs](https://www.framer.com/motion/)
4. Open an issue in the repository

---

**Happy Deploying! 🎉**
