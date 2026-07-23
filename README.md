# Siddharth Jagadale — Portfolio

A production-ready developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send messages straight from the browser — no backend needed.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with these variable names (they match the form field `name` attributes): `user_name`, `user_email`, `subject`, `message`. Note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
cp .env.local.example .env.local
```

Restart `npm run dev` after adding the keys.

## Project screenshots

`lib/github.ts` automatically calls the GitHub REST API for each repo (`AI-Object-Detection-System`, `UrbanWear-FullStack-Ecommerce`, `Car-Price-Prediction`) and looks for a `screenshots/`, `assets/screenshots/`, or `images/` folder to pull images from. If a repo has no such folder, that project card simply shows its custom CSS/SVG banner — no broken images, no placeholders.

To make screenshots show up: add a `screenshots/` folder with `.png`/`.jpg` files to the root of each GitHub repo and push.

## Content

All resume-derived copy (About, Experience, Projects, Education, Skills) lives in one place: `lib/data.ts`. Edit that file to update anything on the site — no need to touch components.

Your resume PDF is at `public/resume.pdf` and your photo at `public/profile.jpg`. Replace either file (keep the same filename) to update them everywhere they appear.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at vercel.com/new.
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy.

## Structure

```
app/            Routes, layout, SEO metadata (robots.ts, sitemap.ts)
components/     One component per section + ui/ primitives (button, badge)
lib/            data.ts (all content), github.ts (screenshot fetching), utils.ts
public/         profile.jpg, resume.pdf, favicon.svg, manifest.json
```
