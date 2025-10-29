# 🎨 Customization Guide - DBinnovates Portfolio

Quick reference for customizing your portfolio website.

---

## 🎯 Quick Start: What to Edit First

### 1. Add Your GitHub & LinkedIn URLs

**File: `src/lib/data.ts`** (Line ~79)

```typescript
export const socialLinks = {
  github: 'https://github.com/YOUR_USERNAME', // ← Change this
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME', // ← Change this
  email: 'david@dbinnovates.com', // ← Change this if needed
}
```

### 2. Update Your Projects

**File: `src/lib/data.ts`** (Lines 2-45)

Replace the placeholder projects with your real work:

```typescript
export const projects = [
  {
    id: 1,
    title: 'YOUR PROJECT NAME',
    description: 'YOUR PROJECT DESCRIPTION',
    image: 'URL_TO_PROJECT_IMAGE', // Or '/project1.jpg' from public folder
    tags: ['Tech', 'Stack', 'Used'],
    link: 'LIVE_PROJECT_URL',
    github: 'GITHUB_REPO_URL',
  },
  // Add more projects...
]
```

**Tips for Project Images:**
- Use high-quality screenshots (800x600px minimum)
- Upload to `public/` folder as `/project1.jpg`, `/project2.jpg`, etc.
- Or use external URLs (Unsplash, Imgur, etc.)

### 3. Add Your Testimonials

**File: `src/lib/data.ts`** (Lines 47-76)

Replace with real client testimonials:

```typescript
export const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Position, Company',
    content: 'The testimonial text goes here...',
    avatar: '/client-photo.jpg', // Or use external URL
    rating: 5,
  },
  // Add more testimonials...
]
```

### 4. Adjust Your Skills

**File: `src/lib/data.ts`** (Lines 78-89)

Update with your actual skill levels:

```typescript
export const skills = [
  { name: 'React', level: 95 }, // ← Adjust level (0-100)
  { name: 'YOUR_SKILL', level: 85 }, // ← Add new skills
  // Remove skills you don't have
]
```

---

## 🎨 Design Customization

### Change Color Scheme

**File: `tailwind.config.ts`**

The current theme uses cyan/blue gradients. To change colors:

```typescript
colors: {
  accent: {
    cyan: '#00f0ff',  // ← Change to your preferred color
    blue: '#0080ff',  // ← Change to your preferred color
    purple: '#8000ff', // ← Change to your preferred color
  },
}
```

**Popular color schemes:**
- Green/Emerald: `#10b981`, `#059669`, `#047857`
- Orange/Amber: `#f59e0b`, `#d97706`, `#b45309`
- Pink/Rose: `#ec4899`, `#db2777`, `#be185d`

### Switch Fonts

**File: `src/app/layout.tsx`** (Lines 6-17)

Currently using: **Inter** (body text) and **Space Grotesk** (headings)

To use only one font:

```typescript
// Remove one import
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Update the HTML tag (line 75)
<html lang="en" className={inter.variable}>
```

**Want different fonts?** Browse [Google Fonts](https://fonts.google.com) and update the imports.

### Add Your Logo

**File: `src/components/Navbar.tsx`** (Line 48)

Replace text logo with image:

```typescript
// Change from this:
<span className="text-2xl lg:text-3xl font-grotesk font-bold gradient-text">
  DBinnovates
</span>

// To this:
<Image
  src="/logo.png"
  alt="DBinnovates"
  width={150}
  height={40}
  priority
/>
```

Don't forget to add `logo.png` to your `public/` folder!

### Update Profile Photo

**File: `src/components/About.tsx`** (Line 64)

```typescript
<Image
  src="/profile.jpg" // ← Change to your photo path
  alt="David Banjo - Full-Stack Developer"
  fill
  className="object-cover"
  priority
/>
```

Add your photo as `public/profile.jpg`.

---

## 📝 Content Customization

### Update Hero Section Text

**File: `src/components/Hero.tsx`**

```typescript
// Line 46: Welcome badge
<span>👋 Welcome to DBinnovates</span>

// Line 53: Your name
<span className="gradient-text glow-cyan">David Banjo</span>

// Line 59: Your title
Full-Stack Developer

// Line 65: Your tagline
I build exceptional web applications...
```

### Modify About Section

**File: `src/components/About.tsx`**

```typescript
// Lines 96-106: Your bio paragraphs
<p>
  I'm a passionate full-stack developer... // ← Edit this
</p>

// Lines 110-132: Your stats (projects, clients, years)
<div className="text-3xl...">50+</div> // ← Update these numbers
<div className="text-dark-muted text-sm">Projects Completed</div>
```

### Customize Services

**File: `src/lib/data.ts`** (Lines 92-end)

Modify or add services:

```typescript
export const services = [
  {
    id: 1,
    title: 'YOUR SERVICE',
    description: 'SERVICE DESCRIPTION',
    icon: '🚀', // ← Use any emoji
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
]
```

---

## 🔧 Functionality Setup

### Setup Contact Form

**File: `src/components/ContactForm.tsx`** (Line 16)

1. Sign up at [Formspree.io](https://formspree.io) (free)
2. Create a new form
3. Copy your form endpoint
4. Paste it here:

```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

**Test it:** Fill out your contact form and check if you receive the email!

### Setup Calendly Booking

**File: `src/components/CalendlyEmbed.tsx`** (Line 9)

1. Sign up at [Calendly.com](https://calendly.com) (free)
2. Create a 30-minute meeting type
3. Copy your scheduling link
4. Paste it here:

```typescript
const CALENDLY_URL = 'https://calendly.com/YOUR_USERNAME/30min'
```

### Add Google Analytics

**File: `src/app/layout.tsx`** (Lines 62-75)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Replace in 2 places:

```typescript
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
// and
gtag('config', 'G-XXXXXXXXXX');
```

---

## 📱 Adding/Removing Sections

### Remove a Section

Don't need the Calendly booking section?

**File: `src/app/page.tsx`**

```typescript
// Comment out or delete:
// import CalendlyEmbed from '@/components/CalendlyEmbed'
// <CalendlyEmbed />
```

### Reorder Sections

**File: `src/app/page.tsx`**

Just rearrange the component order:

```typescript
<Hero />
<Projects />  // ← Moved up
<About />
<Services />
// etc...
```

### Add a New Section

1. Create new component: `src/components/NewSection.tsx`
2. Import and add to `src/app/page.tsx`:

```typescript
import NewSection from '@/components/NewSection'

// Inside the <main> tag:
<NewSection />
```

---

## 🎭 Animation Customization

### Adjust Animation Speed

**File: Any component with animations**

```typescript
transition: {
  duration: 0.5, // ← Change to 0.3 for faster, 0.8 for slower
}
```

### Disable Animations

Want a simpler site without animations?

Remove or comment out all `motion.*` components and replace with regular HTML tags:

```typescript
// From:
<motion.div initial="hidden" whileInView="visible">

// To:
<div>
```

---

## 🌐 SEO Optimization

### Update Meta Tags

**File: `src/app/layout.tsx`** (Lines 17-60)

```typescript
export const metadata: Metadata = {
  title: 'YOUR NAME | YOUR TITLE',
  description: 'YOUR DESCRIPTION',
  keywords: ['YOUR', 'KEYWORDS'],
  // ... update all fields
}
```

### Add Sitemap (Optional)

Create `src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
  ]
}
```

---

## 📸 Image Best Practices

### Optimize Before Upload

Use tools like:
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG
- [Squoosh](https://squoosh.app) - Advanced image optimization
- [CloudConvert](https://cloudconvert.com) - Convert to WebP

### Recommended Sizes

- **Profile Photo:** 600x600px (square)
- **Project Screenshots:** 800x600px (landscape)
- **Testimonial Avatars:** 150x150px (square)
- **Logo:** 300px wide (transparent background)
- **OG Image:** 1200x630px (for social sharing)

---

## 🚀 Quick Deploy

Once customized:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git add .
git commit -m "Customize portfolio"
git push
```

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## 💡 Pro Tips

1. **Update regularly:** Add new projects as you complete them
2. **Keep it focused:** Show your best 3-5 projects, not everything
3. **Real testimonials:** Ask clients for feedback and permission to display
4. **Professional photos:** Use high-quality, well-lit photos
5. **Test mobile:** Most visitors will view on mobile first
6. **Fast loading:** Optimize all images before uploading
7. **Clear CTAs:** Make it easy for visitors to contact you

---

## 📞 Need More Help?

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)

---

**Happy customizing! 🎉**

*Built with ❤️ by DBinnovates*

