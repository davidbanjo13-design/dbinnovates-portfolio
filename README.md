# DBinnovates Portfolio

A modern, professional portfolio website for **DBinnovates** (David Banjo) - Full-Stack Developer.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- ✨ Smooth scroll animations with Framer Motion
- 🎨 Modern dark theme with cyan/blue gradients
- 📱 Fully responsive mobile-first design
- 🔍 SEO optimized with metadata and Open Graph tags
- 📧 Contact form with Formspree integration
- 📅 Calendly booking integration
- 🎯 Project showcase with hover effects
- 💬 Client testimonials section
- ⚡ Optimized performance for Lighthouse 90+ scores

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Hosting**: Vercel (recommended)

## 🛠️ Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**: Navigate to `http://localhost:3000`

## 📝 Customization Guide

### 1. Personal Information

Edit `/src/lib/data.ts` to update:
- **Projects**: Add your real projects with images and descriptions
- **Testimonials**: Replace with actual client testimonials
- **Social Links**: Update GitHub, LinkedIn, email URLs
- **Skills**: Modify skill list and levels

### 2. Contact Form

Replace the Formspree endpoint in `/src/components/ContactForm.tsx`:
```typescript
const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE'
```

Get your endpoint at [formspree.io](https://formspree.io) (free tier available).

### 3. Calendly Integration

Update the Calendly URL in `/src/components/CalendlyEmbed.tsx`:
```typescript
const CALENDLY_URL = 'YOUR_CALENDLY_URL_HERE'
```

### 4. Google Analytics

Replace the GA4 measurement ID in `/src/app/layout.tsx`:
```typescript
gtag('config', 'YOUR_GA_MEASUREMENT_ID');
```

### 5. Logo

Place your logo file in `/public/` and update the path in `/src/components/Navbar.tsx`.

### 6. Images

- Add your profile photo to `/public/profile.jpg`
- Replace project screenshots in the `projects` array
- Add favicon files to `/public/`

### 7. Colors & Fonts

Customize in `/tailwind.config.ts`:
- Color palette (primary, accent, dark colors)
- Font families (toggle between Inter and Space Grotesk)

## 🚀 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Vercel will auto-detect Next.js and deploy!

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## 📊 Performance Optimization

- All images use Next.js `<Image>` component for optimization
- Lazy loading implemented for below-the-fold content
- Fonts optimized with `next/font`
- Animations use GPU-accelerated properties

## 🎨 Color Palette

- **Background**: `#0a0a0a` (black)
- **Surface**: `#151515` (dark gray)
- **Primary Blue**: `#00baff`
- **Accent Cyan**: `#00f0ff`
- **Accent Purple**: `#8000ff`

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, contact: david@dbinnovates.com

---

**Built with ❤️ by DBinnovates**

