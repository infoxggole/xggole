# XGGOLE Portfolio

A high-performance, responsive portfolio website for **XGGOLE** — a premium digital agency specializing in web apps, mobile development, and corporate identity suites.

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** — Light blue / white / deep blue design system
- **Framer Motion** — Animations (typewriter, counters, hover effects)
- **Supabase** — Database for reviews & contact inquiries
- **Resend** — Email delivery via Supabase Edge Function
- **React Router** — Client-side routing

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AGENCY_EMAIL=contact@xggole.com
```

## Supabase Setup

1. Run `supabase/schema.sql` in the Supabase SQL Editor to create tables
2. Deploy the edge function:

```bash
supabase functions deploy send-email
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set FROM_EMAIL="XGGOLE <onboarding@resend.dev>"
```

## Features

- Animated XGGOLE logo with bumping "X"
- Typewriter hero animation
- Animated stat counters (Projects, Rating, Clients)
- 4 service cards with hover pop-up effects
- Dynamic client reviews (Supabase)
- Contact form with email notifications (Resend)
- Portfolio page with butterfly wing background animation
- Full-page project modals with YouTube embeds

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Stats, Services, Clients, Reviews |
| `/work` | Portfolio — 4 project categories with modals |

## License

© 2026 XGGOLE. All Rights Reserved.
