# Deployment Guide - The Dating Suite

## Quick Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - The Dating Suite MVP"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React/Vite settings
   - Click "Deploy"

3. **Custom Domain Setup**
   - In Vercel dashboard → Project Settings → Domains
   - Add `thedatingsuite.com`
   - Follow DNS configuration instructions
   - Point your GoDaddy DNS to Vercel

### Option 2: Direct Upload

1. **Build the project**
   ```bash
   pnpm run build
   ```

2. **Upload dist folder**
   - Drag and drop the `dist` folder to Vercel
   - Or use Vercel CLI: `vercel --prod`

## Environment Variables

No environment variables required for the current MVP.

## Build Settings

- **Framework Preset**: Vite
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

## Performance Optimizations

- Images are optimized via Unsplash CDN
- Tailwind CSS is purged for production
- Vite handles code splitting automatically

## Domain Configuration

### GoDaddy DNS Settings
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

## Monitoring

- Vercel provides built-in analytics
- Monitor Core Web Vitals in Vercel dashboard
- Set up custom domain SSL (automatic with Vercel)

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version (requires v18+)
2. **Images not loading**: Verify Unsplash URLs are accessible
3. **Styles not applying**: Ensure Tailwind CSS is properly configured

### Support

For deployment issues, check:
- Vercel deployment logs
- Browser console for errors
- Network tab for failed requests

---

**Your Dating Suite will be live in minutes!** 🚀

