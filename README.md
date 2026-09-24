# NG Solutionz — Render + Supabase

Modern corporate website for NG Solutionz.

## Local setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your Supabase project URL and anon key.
4. In Supabase SQL Editor, run `supabase/schema.sql`.
5. Run `npm run dev`.

## Render
Create a Web Service from this repository.
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables.

Health endpoint: `/health`.

For the requested 2-minute monitoring, point an external monitoring service at `/health` with a 2-minute interval if your monitoring provider supports it. Do not rely on a self-ping as a substitute for a production Render plan's availability behavior.

## Important
The quote form stores enquiries in Supabase when environment variables are configured. The UI is production-ready as a first release; an authenticated admin dashboard can be added next using Supabase Auth and RLS.
