# 🚀 Deployment Guide - DBinnovates Portfolio

This guide will help you deploy your Next.js portfolio to Vercel (recommended) and customize it with your personal information.

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure to update the following:

### 1. Personal Information

**File: `src/lib/data.ts`**

Update:
- `socialLinks.github` - Your GitHub URL
- `socialLinks.linkedin` - Your LinkedIn URL
- `socialLinks.email` - Your email address
- `projects` array - Add your real projects with descriptions and images
- `testimonials` array - Replace with actual client testimonials
- `skills` array - Adjust skill levels and add/remove skills

### 2. Contact Form Setup

**File: `src/components/ContactForm.tsx`**

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your endpoint URL
3. Replace `YOUR_FORM_ID` in the code:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

### 3. Calendly Integration

**File: `src/components/CalendlyEmbed.tsx`**

1. Go to [Calendly.com](https://calendly.com) and create a free account
2. Set up a 30-minute event type
3. Get your scheduling link
4. Replace the CALENDLY_URL:
```typescript
const CALENDLY_URL = 'https://calendly.com/your-username/30min'
```

### 4. Google Analytics (Optional)

**File: `src/app/layout.tsx`**

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property
3. Get your Measurement ID (looks like: G-XXXXXXXXXX)
4. Replace `YOUR_GA_MEASUREMENT_ID` in two places

### 5. Images & Assets

**Directory: `public/`**

Add these files:
- `logo.png` - Your DBinnovates logo (optional, currently using text)
- `profile.jpg` - Your photo for the About section
- `favicon.ico` - Your favicon
- `og-image.jpg` - Social sharing image (1200x630px recommended)

Update the profile image in `src/components/About.tsx`:
```typescript
src="https://images.unsplash.com/photo-..." // Replace with "/profile.jpg"
```

### 6. Update Social Links & URLs

**File: `src/lib/data.ts`**

Verify and update:
```typescript
export const socialLinks = {
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
  email: 'YOUR_EMAIL@dbinnovates.com',
}
```

---

## 🎯 Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Best Practice)

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit - DBinnovates Portfolio"
```

2. **Create GitHub Repository**
- Go to [GitHub.com](https://github.com)
- Create a new repository (e.g., "dbinnovates-portfolio")
- Don't initialize with README (already have one)

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/dbinnovates-portfolio.git
git branch -M main
git push -u origin main
```

4. **Deploy via Vercel**
- Go to [Vercel.com](https://vercel.com)
- Sign up/Login with GitHub
- Click "Import Project"
- Select your repository
- Vercel will auto-detect Next.js settings
- Click "Deploy"

**Build settings are automatically detected:**
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

5. **Configure Environment Variables (Optional)**
If you need any environment variables:
- In Vercel dashboard → Settings → Environment Variables
- Add your variables (e.g., API keys)

### Method 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? Yes
- Which scope? (your account)
- Link to existing project? No
- Project name? dbinnovates-portfolio
- Directory? ./
- Override settings? No

4. **Deploy to Production**
```bash
vercel --prod
```

---

## 🌐 Custom Domain Setup

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `dbinnovates.com`)
3. Follow Vercel's instructions to update your DNS:

**For Domain Registrar (Namecheap, GoDaddy, etc.):**

Add these DNS records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait 24-48 hours for DNS propagation.

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly at your Vercel URL
- [ ] All images display properly
- [ ] Navigation links work (smooth scroll)
- [ ] Contact form submits successfully
- [ ] Calendly embed loads and works
- [ ] Mobile responsive on various screen sizes
- [ ] All external links (GitHub, LinkedIn) work
- [ ] SEO meta tags are visible (check view-source)
- [ ] No console errors in browser DevTools

---

## 📊 Performance Optimization

### Run Lighthouse Audit

1. Open your deployed site in Chrome
2. Right-click → Inspect → Lighthouse tab
3. Generate report (Mobile + Desktop)
4. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

### Optimize Images

If Lighthouse shows image issues:

1. Use WebP format for better compression
2. Ensure images in `public/` are optimized
3. Use Next.js Image component (already implemented)
4. Add proper `alt` attributes

### Enable Analytics

After deployment:
1. Verify Google Analytics tracking code
2. Test by visiting your site
3. Check Real-Time reports in GA4

---

## 🔧 Continuous Deployment

With Vercel + GitHub integration:

1. Make changes locally
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update project information"
git push
```
3. Vercel automatically rebuilds and deploys!

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check the build logs for errors:**
- Missing environment variables?
- TypeScript errors?
- Image import issues?

**Common fixes:**
```bash
# Test build locally first
npm run build

# If successful locally, check Vercel logs
# Usually it's an environment variable or path issue
```

### Images Not Loading

- Ensure images are in `public/` directory
- Use absolute paths: `/image.jpg` not `./image.jpg`
- Check Next.js Image component configuration

### Forms Not Submitting

- Verify Formspree endpoint is correct
- Check browser console for errors
- Test Formspree endpoint directly

### Calendly Not Showing

- Verify Calendly URL is correct
- Check if script is blocked by ad blockers
- Test on different browsers

---

## 📱 Testing Checklist

Test on:
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android tablet)
- [ ] Different screen sizes (use DevTools responsive mode)

Test functionality:
- [ ] All navigation links
- [ ] Contact form submission
- [ ] Calendly booking widget
- [ ] External links (GitHub, LinkedIn, Email)
- [ ] Hover effects and animations
- [ ] Page load speed

---

## 🎉 You're Live!

Once deployed:

1. **Share your portfolio:**
   - Update LinkedIn profile with portfolio link
   - Add to GitHub profile README
   - Share on social media

2. **Update regularly:**
   - Add new projects as you complete them
   - Refresh testimonials
   - Update skills and experience

3. **Monitor performance:**
   - Check Google Analytics monthly
   - Run Lighthouse audits quarterly
   - Update dependencies regularly

---

## 📞 Need Help?

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Next.js Documentation](https://nextjs.org/docs)
3. Review build logs for specific errors
4. Check GitHub Issues for similar problems

---

**Good luck with your portfolio! 🚀**

*Built with ❤️ by DBinnovates*

