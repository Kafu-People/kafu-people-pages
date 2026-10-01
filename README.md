# KafuPeople 🚀

This is a modern React-based web application built with **Vite**, **TailwindCSS**, and a rich set of UI/animation libraries.

---

## 📦 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Routing:** React Router DOM
- **Animations:** Framer Motion, Swiper, React Slick
- **UI & Utilities:**
  - React Icons
  - React Toastify
  - SweetAlert2
- **Integrations:**
  - Google Maps (`@react-google-maps/api`)
  - Calendly (`react-calendly`)
- **HTTP Client:** Axios

---

## 📁 Project Structure

```
src/
│
├── assets/            # Images and static assets
├── components/        # Reusable UI components
│   ├── admin/         # Admin dashboard & management
│   ├── homeComponents/
│   ├── contactComponent/
│   ├── serviceComponents/
│   ├── trainingComponents/
│   └── ...
│
├── pages/             # Main route pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── ContactUs.jsx
│   ├── Enroll.jsx
│   └── NewsAndEvents.jsx
│
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```
git clone https://github.com/BelalH/kafu-people-pages
cd kafu-people-pages
npm install
```

---

## 🧑‍💻 Development

Start the development server:

```
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🏗️ Build

Create a production build:

```
npm run build
```

Preview the production build:

```
npm run preview
```

The build runs `check-pages-asset-size` so any file over **25 MiB** fails early (Cloudflare Pages limit).

### Cloudflare Pages + hero video

| Approach | Steps |
| -------- | ----- |
| **Compress** | Run `.\scripts\compress-hero-video.ps1` (requires ffmpeg), keep `hero.mp4` under 25 MB, then `git add -f public/videos/hero.mp4` |
| **R2 / CDN** | Upload video to R2, set `VITE_HERO_VIDEO_URL` in Pages → Settings → Environment variables |

Large `hero.mp4` files are gitignored by default. See `public/videos/README.md`.

---

## 💳 Stripe webhook (AI Training Coaching)

The site deploys as a Cloudflare **Worker** (`wrangler.jsonc`), not a Pages
project. `worker/index.js` routes `POST /api/stripe-webhook` to
`worker/stripe-webhook.ts`, which verifies the Stripe signature, records the
enrollment in D1 (idempotent on the Checkout Session id), then sends the
onboarding email (Resend) and a Slack notification.

One-time setup:

1. Create the database and put its id in `wrangler.jsonc` (`database_id`):
   `npx wrangler d1 create kafu-enrollments`
2. Create the table: `npx wrangler d1 migrations apply kafu-enrollments --remote`
3. Add secrets (never commit them):
   `npx wrangler secret put STRIPE_SECRET_KEY` (restricted key, read access to Checkout Sessions)
   `npx wrangler secret put STRIPE_WEBHOOK_SECRET`
   `npx wrangler secret put RESEND_API_KEY`
   `npx wrangler secret put SLACK_WEBHOOK_URL`
4. In Stripe, add the endpoint `https://kafupeople.com/api/stripe-webhook` with
   events `checkout.session.completed` and `checkout.session.async_payment_succeeded`.
5. In Resend, verify `kafupeople.com` so `FROM_EMAIL` can send.

Test locally: put test values for the four secrets in `.dev.vars` (git-ignored), then

```
npx wrangler d1 migrations apply kafu-enrollments --local
npm run build && npx wrangler dev
stripe listen --forward-to localhost:8787/api/stripe-webhook
stripe trigger checkout.session.completed
```

---

## 🧹 Linting

Run ESLint:

```
npm run lint
```

---

## ✨ Features

- 🏠 Modern landing page with hero, services, and products
- 📖 Blog & News/Events sections
- 📅 Meeting booking via Calendly integration
- 📍 Google Maps integration for contact/location
- 🧑‍🎓 Training & enrollment system
- 🛠️ Admin dashboard for managing content
- 🎨 Smooth animations and sliders

---

## 🔐 Admin Section

The project includes an admin panel with features like:

- Blog management
- Product editing
- Event handling
- Dashboard analytics (charts, stats, activity)

---

## 📌 Notes

- Built with **Vite** for fast performance
- Uses **component-based architecture** for scalability
- TailwindCSS ensures rapid UI development

---

## 📄 License

This project is private (`"private": true` in package.json).  
Add a license if you plan to distribute it.

---

## 👨‍💼 Author

Developed for **KafuPeople** platform.
