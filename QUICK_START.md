# ⚡ Quick Start Guide - DBinnovates Portfolio

**Your portfolio is running at:** http://localhost:3000 🎉

---

## 🚀 First 5 Minutes

### 1. Open Your Browser
Visit **http://localhost:3000** to see your portfolio live!

### 2. Edit Your Social Links
Open `src/lib/data.ts` (bottom of file):

```typescript
export const socialLinks = {
  github: 'https://github.com/YOUR_USERNAME',     // ← Add yours
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME', // ← Add yours
  email: 'david@dbinnovates.com',                // ← Update if needed
}
```

**Save the file** and the page will auto-refresh!

### 3. Test the Navigation
Click through all the sections:
- Hero (Welcome section)
- About
- Services
- Projects
- Testimonials
- Contact
- Booking

### 4. Check Mobile View
In your browser:
- Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
- Click the device icon (📱) at the top
- Test on iPhone, iPad, and other sizes

---

## ⏰ Next 30 Minutes

### Update Your Content

**File: `src/lib/data.ts`**

#### Add Real Projects (Lines 2-45)
Replace the 3 placeholder projects:
```typescript
{
  id: 1,
  title: 'Your Real Project Name',
  description: 'What you built and for whom...',
  image: '/my-project.jpg', // Add image to public/ folder
  tags: ['React', 'Next.js', 'Your Tech'],
  link: 'https://live-project.com',
  github: 'https://github.com/you/project',
}
```

#### Add Testimonials (Lines 47-76)
Get 2-3 real testimonials from clients/colleagues:
```typescript
{
  id: 1,
  name: 'Client Name',
  role: 'Title, Company',
  content: 'Their testimonial quote...',
  avatar: '/client-photo.jpg',
  rating: 5,
}
```

#### Update Skills (Lines 78-89)
Be honest with skill levels (0-100):
```typescript
{ name: 'React', level: 90 }, // Your actual level
{ name: 'Python', level: 75 },
// Add skills you actually have
```

---

## 🎨 Customize Appearance (Optional)

### Change Your Colors

**File: `tailwind.config.ts`** (Lines 15-20)

```typescript
accent: {
  cyan: '#00f0ff',    // Change to your preferred color
  blue: '#0080ff',    // e.g., green: '#10b981'
  purple: '#8000ff',  // e.g., orange: '#f59e0b'
}
```

### Use Just One Font

**File: `src/app/layout.tsx`**

If you prefer just Inter or just Space Grotesk:
1. Remove one font import (lines 6-17)
2. Update HTML className (line 83)

---

## 📸 Add Your Images

### Required Images

Add these to the `public/` folder:

1. **`profile.jpg`** (600x600px)
   - Your professional headshot
   - Update in `src/components/About.tsx` line 64

2. **`og-image.jpg`** (1200x630px)
   - Social media preview image
   - Shows when you share your portfolio

3. **Project screenshots** (800x600px each)
   - Update `image` URLs in `src/lib/data.ts`

4. **`logo.png`** (optional)
   - If you want image logo instead of text

### Optimize Images First

Use [TinyPNG.com](https://tinypng.com) to compress images before adding!

---

## 🔧 Setup Integrations

### Contact Form (10 min)

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form
4. Copy your endpoint URL
5. Open `src/components/ContactForm.tsx` (line 16)
6. Replace: `'https://formspree.io/f/YOUR_FORM_ID'`

**Test it:** Submit the contact form and check your email!

### Calendly Booking (10 min)

1. Go to [calendly.com](https://calendly.com)
2. Sign up (free)
3. Create a "30 Minute Meeting" event
4. Copy your scheduling URL
5. Open `src/components/CalendlyEmbed.tsx` (line 9)
6. Replace: `'https://calendly.com/your-username/30min'`

### Google Analytics (optional, 5 min)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create GA4 property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Open `src/app/layout.tsx`
5. Replace `YOUR_GA_MEASUREMENT_ID` in 2 places (lines 90 & 100)

---

## ✅ Pre-Launch Checklist

Before deploying to the world:

- [ ] All social links updated
- [ ] Real projects added (at least 2-3)
- [ ] Real testimonials added (or section removed if none yet)
- [ ] Profile photo added
- [ ] Bio text updated
- [ ] Stats updated (projects count, years experience)
- [ ] Contact form tested and working
- [ ] Calendly link working
- [ ] All placeholder text replaced
- [ ] Mobile view tested
- [ ] All links work

---

## 🚀 Ready to Deploy?

### Deploy to Vercel (Free!)

```bash
# Stop the dev server (Ctrl+C)

# Initialize git
git init
git add .
git commit -m "Ready for deployment"

# Create GitHub repo, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Go to vercel.com
# - Sign in with GitHub
# - Import your repository
# - Click Deploy!
```

Your site will be live in ~2 minutes! 🎉

See `DEPLOYMENT.md` for detailed instructions.

---

## 🆘 Common Issues

### "Port 3000 already in use"
Another app is running on that port.
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### "Images not loading"
- Check images are in `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`
- Check file names match exactly (case-sensitive)

### "Contact form not working"
- Did you update the Formspree endpoint?
- Check browser console for errors
- Verify Formspree account is active

### "Build fails"
```bash
# Check for errors
npm run build

# Common fix: Delete cache and rebuild
rm -rf .next
npm run build
```

---

## 📚 Need More Help?

- **Customization:** See `CUSTOMIZATION.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Overview:** See `PROJECT_SUMMARY.md`
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## 💪 You've Got This!

Your portfolio looks amazing! Now make it yours:

1. ✏️ Update content (30 min)
2. 📸 Add images (15 min)
3. 🔧 Setup forms (15 min)
4. 🚀 Deploy (10 min)

**Total time to launch: ~1 hour** ⏱️

---

**Happy building! 🎉**

*Your dev server is running at http://localhost:3000*

*Press Ctrl+C to stop the server when done*

