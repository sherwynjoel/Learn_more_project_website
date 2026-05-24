# LearnMore Projects — Website Setup Guide

## What's Inside

A complete, production-ready Next.js website for LearnMore Projects with 6 fully built pages:

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, domains, why us, featured projects, testimonials, CTA |
| Projects | `/projects` | All 8 domains with 2,000+ topics, sample projects, tech stack |
| Portfolio | `/portfolio` | 6 real student case studies with outcomes |
| Training | `/training` | 6 courses + 4 internship programs |
| About | `/about` | Story, values, LearnMore vs others, timeline |
| Contact | `/contact` | Smart form → WhatsApp with pre-filled details |

---

## Step 1 — Install Node.js (if not already installed)

Download from: https://nodejs.org  
Recommended version: Node.js 18 or 20

---

## Step 2 — Open Terminal in this folder

**On Windows:**
- Open File Explorer → go to this folder
- Click the address bar, type `cmd`, press Enter
- OR right-click inside the folder → "Open in Terminal"

---

## Step 3 — Install dependencies

```bash
npm install
```

This takes 1–2 minutes the first time.

---

## Step 4 — Run the development server

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

---

## Step 5 — Deploy to the internet (free)

1. Go to https://vercel.com and sign up for a free account
2. Click "Add New Project"
3. Upload or connect your project folder
4. Click "Deploy" — your site will be live in 60 seconds

---

## Before Going Live — Customise These

Open `src/components/Navbar.js` and `src/components/Footer.js` and replace:

| Placeholder | Replace With |
|---|---|
| `+91 XXXXX XXXXX` | Your actual phone number |
| `info@learnmoreprojects.in` | Your actual email |
| `[Address]` | Your actual address |
| `https://wa.me/919999999999` | Your WhatsApp number (format: 91XXXXXXXXXX) |

Also update the WhatsApp links in:
- `src/app/page.js`
- `src/app/projects/page.js`
- `src/app/portfolio/page.js`
- `src/app/training/page.js`
- `src/app/about/page.js`
- `src/app/contact/page.js`

### Adding Your Logo

Replace the "LM" text logo in `src/components/Navbar.js` with your image:

```jsx
// Replace the <div className="w-9 h-9 bg-primary-700..."> block with:
<Image src="/logo.png" alt="LearnMore Projects" width={120} height={40} />
```

Then put your `logo.png` file inside the `/public` folder.

---

## Folder Structure

```
Learn_more_project_website/
├── src/
│   ├── app/
│   │   ├── layout.js          ← Root layout (Navbar + Footer)
│   │   ├── globals.css        ← Global styles + Tailwind
│   │   ├── page.js            ← Home page
│   │   ├── projects/page.js   ← Projects page
│   │   ├── portfolio/page.js  ← Portfolio page
│   │   ├── training/page.js   ← Training page
│   │   ├── about/page.js      ← About page
│   │   └── contact/page.js    ← Contact page
│   └── components/
│       ├── Navbar.js          ← Navigation bar
│       └── Footer.js          ← Footer
├── public/                    ← Put your images here
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── HOW_TO_RUN.md              ← This file
```

---

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Vercel deploy guide: https://vercel.com/docs/deployments/overview
- Tailwind CSS docs: https://tailwindcss.com/docs
