# ROVE Platform: Implementation Plan & Recommendations

**Audience:** Gen Z (18–27) solo travelers · **Launch:** Thailand Q2 2026 · **Goal:** Supply-side density, $612M SOM APAC

This doc maps the [Ecosystem Architecture](https://docs.google.com/document/d/1er4qWPPvolWNbtzFdVbmnGpwjmMB-4mRxtq8ERgwSz8/edit) to a phased implementation plan and concrete recommendations for the mobile app.

---

## 1. App Structure: Three Entry Points

The product has **three user types**. The mobile app should make each path obvious from day one.

| Entry | Who | Primary action |
|-------|-----|----------------|
| **Rover** | Traveler (discovery → booking) | Scroll feed → Book experience |
| **RoveHost** | Local expert (host/operator) | Manage cohorts, waivers, payouts |
| **Creator** | User who posts & earns | Post videos, see “Book This” conversions, rewards |

**Recommendation:** Use a **role-aware landing** (e.g. “I want to travel” / “I’m a host” / “I create content”) or a **unified home** with three clear sections. Your current site is traveler-only; add Host and Creator entry points early so the narrative matches the platform.

---

## 2. Feature-to-Screen Map

### 2.1 User (Rover) Ecosystem — “Discovery–booking in &lt;3 clicks”

| Architecture feature | App screen / flow | Priority |
|----------------------|-------------------|----------|
| TikTok-style scrolly feed | **Feed** (vertical full-screen short-form videos) | P0 |
| &lt;3 clicks to booking | **Feed → Video detail → Booking** (max 3 taps) | P0 |
| Integrated booking page | **Booking** (price, multi-day package, itinerary, CTA) | P0 |
| Vibe Profile | **Onboarding / Profile** (energy: High/Mid, interests) | P0 |
| Tribe matching | **Algorithm** (match solos into compatible Tribes) | P1 |
| Multi-day packages (AOV $500+) | **Booking / Pricing** (package selector, clear AOV) | P0 |

**Suggested flows:**
- **Discovery:** Feed (scroll) → tap video → Video detail (description + “Book This”) → Booking page → Confirm.
- **Onboarding:** Sign up → Vibe Profile (energy + interests) → optional Tribe preference → Home/Feed.

### 2.2 Host (RoveHost) Ecosystem — B2B tools

| Architecture feature | App screen / flow | Priority |
|----------------------|-------------------|----------|
| RoveHost Dashboard | **Host app or web dashboard** (schedule, waivers, payments) | P0 |
| Schedule / cohorts | **Schedule** (calendar, cohorts, daily activities) | P0 |
| Waivers | **Waivers** (digital forms, e-sign, storage) | P0 |
| Payments / payouts | **Payments** (transactions, payouts, statements) | P0 |
| Host profiles (public) | **Host profile** (credentials, location, reviews, amenities) | P1 |
| Kindred-style data | **Listings** (beds, bathrooms, surroundings: gyms, cafes, coworking) | P1 |

**Recommendation:** Host tools are **form-heavy and desktop-friendly**. Prefer a **responsive web dashboard** (same login as app) rather than squeezing everything into the mobile app. Mobile app: “Host hub” with key actions (today’s cohort, new waivers, payout status) and deep links to full dashboard.

### 2.3 Creator Ecosystem — Viral loop

| Architecture feature | App screen / flow | Priority |
|----------------------|-------------------|----------|
| Creator profile | **Profile** (vibe + video feed, TikTok-style) | P1 |
| “Book This” on every video | **Video component** (CTA on overlay or below fold) | P0 |
| Creator rewards dashboard | **Rewards** (earnings, referral credits, top videos) | P1 |
| Referral discounts | **Backend + UI** (credit for bookings from creator’s link/video) | P1 |
| Engagement analytics | **Rewards / Analytics** (which videos drive Tribe interest/bookings) | P2 |

**Recommendation:** Ship **“Book This” on the main feed first** (same UX for all users). Creator-specific profile and rewards can follow once you have creators and attribution in place.

---

## 3. Phased Roadmap

### Phase 0 — Current (done)
- [x] Mobile-first marketing site (website-clone)
- [x] Hero, value prop, how it works, social proof, CTA, footer

### Phase 1 — Traveler MVP (discovery → booking)
**Goal:** Validate “&lt;3 clicks to book” with real supply (Thailand).

| # | Deliverable | Notes |
|---|-------------|------|
| 1.1 | **Feed (prototype)** | Vertical scroll, 3–5 placeholder or real videos; tap opens “detail”. |
| 1.2 | **Video detail + “Book This”** | One CTA → booking. |
| 1.3 | **Booking page** | Price, multi-day package, itinerary summary, primary CTA (e.g. “Reserve” / “Pay”). |
| 1.4 | **Auth (minimal)** | Sign up / sign in (email or social); no full Vibe Profile yet. |
| 1.5 | **Vibe Profile (v1)** | Energy (High/Mid) + 3–5 interest tags; stored for future Tribe use. |
| 1.6 | **Landing updates** | Add “For Hosts” and “For Creators” entry points; align copy with ecosystem doc. |

**Success:** A user can scroll → tap → see booking → complete a reservation (even if payment is manual or stub).

### Phase 2 — Host tools (RoveHost)
**Goal:** Onboard and retain local experts with professional ops.

| # | Deliverable | Notes |
|---|-------------|------|
| 2.1 | **Host onboarding** | Apply as host; basic info + listing (place, activities). |
| 2.2 | **Host dashboard (web)** | Schedule (cohorts, activities), list of bookings. |
| 2.3 | **Waivers** | Digital waiver per experience; e-sign; store per booking. |
| 2.4 | **Payments** | Show earnings, payouts; integrate Stripe (or local equivalent for Thailand). |
| 2.5 | **Public host profile** | Credentials, location, reviews, amenities, surroundings. |

**Recommendation:** Build dashboard as **web-first**; mobile = “Host hub” + links to dashboard.

### Phase 3 — Creator loop & Tribe
**Goal:** Creators drive discovery; Tribes reduce “bad company” fear.

| # | Deliverable | Notes |
|---|-------------|------|
| 3.1 | **Creator onboarding** | Opt-in to creator; link to profile/feed. |
| 3.2 | **“Book This” attribution** | Every video has Book This; link booking to creator for rewards. |
| 3.3 | **Creator profile** | Public profile: vibe + video feed (TikTok-style). |
| 3.4 | **Rewards dashboard** | Credits from referrals; list of top-performing videos. |
| 3.5 | **Tribe matching** | Use Vibe Profile + interests to group solos into Tribes; expose in feed or post-booking. |

---

## 4. Tech Stack Recommendations

### 4.1 Mobile app: PWA vs native

| Option | Pros | Cons | Recommendation |
|--------|------|------|-----------------|
| **PWA** | One codebase, fast to ship, works with current HTML/CSS/JS, installable, good for Thailand (reach) | Limited native APIs, weaker discovery in app stores | **Best for Phase 1:** ship feed + booking quickly; add to home screen. |
| **React Native / Expo** | Native feel, one JS codebase, strong ecosystem | Heavier setup, build pipelines | **Consider for Phase 2+** if you need push, camera, or app-store presence. |
| **Native (Swift / Kotlin)** | Full control, best performance | Two codebases, slower iteration | Only if you have dedicated native teams. |

**Recommendation:** Start with a **mobile-first PWA** (your current stack can evolve into the app shell). Use a simple router (e.g. hash or path-based) for Feed → Detail → Booking. Add a **manifest.json** and **service worker** for install and offline resilience. Revisit React Native or native when you need app-store distribution or heavy camera/upload flows.

### 4.2 Feed (video) implementation

- **Short-form vertical:** Full-viewport cards; one video per “slide”; swipe or tap to next.
- **Video:** Use `<video>` with `playsinline` and `muted` (unmute on tap); or integrate a lightweight player (e.g. video.js) for controls and analytics.
- **Performance:** Lazy-load videos (e.g. only current ±1); preload next; lower quality on slow networks.
- **“Book This”:** Fixed button or overlay on each card; tap → navigate to booking with `experience_id` (and optional `creator_id` for attribution).

### 4.3 Backend (implied)

- **Auth:** Supabase Auth, Auth0, or Firebase (email + social).
- **Data:** Supabase or Firebase (hosts, experiences, bookings, profiles); or your own API (Node/Python) + Postgres.
- **Payments:** Stripe (or local provider for Thailand); handle payouts to hosts in dashboard.
- **Waivers:** PDF generation + e-sign (e.g. DocuSign, HelloSign, or custom); store per booking.

---

## 5. Content & Copy Priorities

Align the **current website-clone** and in-app copy with the architecture:

1. **Hero / value prop:** Keep “Life Swap for Gen Z Travelers”; add one line about “From video to booking in 3 taps” or “See it. Book it.”
2. **How it works:** Optionally add a step for “Match with your Tribe” (after Vibe Profile).
3. **New sections (landing):**
   - **For Travelers:** Feed → Book (with &lt;3 clicks); Vibe Profile & Tribes.
   - **For Hosts:** “Turn your daily life into income” → RoveHost dashboard (schedule, waivers, payments).
   - **For Creators:** “Create. Share. Earn.” → “Book This” on every video, rewards dashboard.
4. **Footer:** Add “For Hosts” and “Creators” (and later “Careers,” “Safety,” etc.).

---

## 6. Backlog Summary (by priority)

### P0 — Must-have for Thailand launch
- Scrolly feed (vertical short-form video).
- Video detail + single “Book This” CTA.
- Booking page (price, package, itinerary, reserve/pay).
- Minimal auth (sign up / sign in).
- Vibe Profile v1 (energy + interests).
- Landing: three entry points (Traveler / Host / Creator).
- Host: dashboard (schedule, waivers, payments) — can be web-only.

### P1 — Important for retention and supply
- Tribe matching (algorithm + UX).
- Public host profiles (credentials, reviews, amenities, surroundings).
- Creator profile (vibe + feed).
- “Book This” attribution and creator rewards dashboard.
- Referral credits for creators.

### P2 — Growth and optimization
- Engagement analytics (which videos drive bookings).
- Kindred-style “surroundings” (gyms, cafes, coworking).
- Deeper creator analytics and payouts.

---

## 7. Recommended Next Steps

1. **Update the marketing site**  
   Add “For Hosts” and “For Creators” sections and CTAs; tweak copy to “&lt;3 clicks” and Vibe/Tribe where relevant.

2. **Define app shell**  
   In the same repo (or a new `app/`), add:
   - Simple routing (e.g. `#/`, `#/feed`, `#/experience/:id`, `#/book/:id`).
   - Shell: bottom nav or top nav for Feed / Search / Profile (placeholder).

3. **Build Feed (static prototype)**  
   One page: 3–5 vertical “cards” (video placeholder or real MP4), tap → detail → “Book This” → booking page (static). Validate flow and &lt;3 clicks on device.

4. **Lock backend scope for Phase 1**  
   Auth, experiences (list + detail), bookings (create + read). Defer Tribe algorithm and creator attribution to P1.

5. **Document decisions**  
   Keep this file as the single source of truth; add a short “CHANGELOG” or “Decisions” section at the bottom when you change scope or stack.

---

*Last updated: Feb 2025. Aligns with [ROVE Ecosystem Architecture](https://docs.google.com/document/d/1er4qWPPvolWNbtzFdVbmnGpwjmMB-4mRxtq8ERgwSz8/edit).*
