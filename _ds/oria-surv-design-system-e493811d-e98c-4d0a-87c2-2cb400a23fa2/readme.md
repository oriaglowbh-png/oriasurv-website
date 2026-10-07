# Oria Surv Design System

**Oria Surv** — "One Platform, All Services At Your Fingertips." Bahrain's on-demand multi-service marketplace connecting property owners and businesses with verified professionals across HVAC, MEP, Construction, Facility Management, Maintenance, Cleaning, Third-Party services and more. Clients browse, compare quotes, book, and pay via escrow that's released when the job is done. Vendors join a network of 500+ verified pros.

## Products
1. **Customer mobile app** (iOS & Android) — home with category carousel, service cards, booking, quote negotiation (vendor proposes price/time), orders, notifications, in-app payment. → `ui_kits/app/`
2. **Marketing website** — oriasurv.com, a single-page landing driving app downloads. → `ui_kits/website/`
(A vendor app is implied by the copy but no material was provided.)

## Sources
- `uploads/01.png`–`06.png` — six App-Store marketing screenshots (copied to `assets/screens/`). Primary visual source for the app.
- https://oriasurv.com/ — live site; all copy, structure and imagery (logo, banners, about photo, store badges at `https://oriasurv.com/Assets/Images/*.webp`).
- No codebase, Figma, brand guide or font files were provided. Colour values are sampled from screenshots; exact hex values from the site CSS could not be read.

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one `@dsCard` per folder
- `ui_kits/app/` — interactive customer app (Home → Booking → Orders → Notifications → Pay)
- `ui_kits/website/` — marketing landing page
- `assets/screens/` — original store screenshots
- `thumbnail.html`, `SKILL.md`

## Components
- **core/**: Icon, Button, IconButton, Badge, Price, Rating
- **forms/**: Input, SegmentedTabs
- **cards/**: CategoryTile, ServiceCard, ServiceListItem, OrderCard, NotificationCard
- **navigation/**: AppHeader, BottomNav
- **feedback/**: Dialog
- **marketing/**: SectionHeading, StatBlock, Testimonial, ServiceCategoryCard

No source component library exists; this inventory is derived from what's visible in the screenshots and on the site.
**Intentional additions:** `Icon` — wrapper that renders Lucide CDN SVGs tinted with currentColor (no brand icon set provided).

---

## CONTENT FUNDAMENTALS
- **Voice:** confident, reassuring, benefit-first. Sells *trust* (verified, licensed, background-checked), *speed* (minutes, not days) and *transparency* (no hidden fees, escrow).
- **Person:** speaks to **you** ("before you book", "Here's what's happening with your orders"); refers to itself as "Oria Surv" or "we" ("We believe quality services should be…").
- **Casing:** Title Case for headlines, buttons, section titles and tabs ("Our Top Pick", "Recommended for You", "Pay Now", "View Details", "Propose Alternate Time"). Sentence case for body and ledes.
- **Headline formula:** short punchy line + accent line in colour. Often triadic or staccato: "Choose, Compare, Confirm. Done." · "One App, All Services" · "Release Payment When job is Done". Square-bracket emphasis on the key word: "Trust [Verified] Pros Only", "Book in [Minutes]".
- **Ledes:** one grey line, plain and concrete: "From a quick AC fix to full facility management", "Every vendor is background checked and licensed".
- **Lists of services** repeat constantly: "HVAC, MEP, Construction, Facility Management, Maintenance, Cleaning and more".
- **Local specifics:** "Bahrain" / "across Bahrain" / "Kingdom of Bahrain"; prices **BHD 18.400** (3 decimals); neighbourhoods in testimonials (Manama, Juffair, Riffa, Seef, Saar, Amwaj).
- **Bilingual:** category tiles carry Arabic above English (الكل / All Services). Promo banners mix Arabic.
- **Numbers as proof:** 10,000+ Happy Clients · 500+ Verified Professionals · 4.9/5 · 8+ Categories.
- **Emoji:** not in app UI chrome. The website's trust row uses 🔒 ✅ ⭐ 📞 and notifications use a ✅ after "Booking Accepted" — treat as sparing, functional markers only. Our kits substitute Lucide icons on the site and keep the green check on notifications.
- **Transactional copy** is literal and system-like ("Vendor approved your time slot with additional price of 9.").

## VISUAL FOUNDATIONS
- **Colour:** deep indigo-purple `#4B0082` is the workhorse — primary buttons, screen titles, prices, nav icons, Discount pills. Marketing headlines use lighter accents: orchid `#9B59B6` and periwinkle `#7469E8`. Lavender tints (`#F1EAF8`, `#D9C8EC`) fill selected tabs, arrow tiles, input borders, illustration panels and even the map. Everything else is white with near-black ink. Green `#1E9E3E` is reserved for proposed price/success; soft blue for "In Progress".
- **Backgrounds:** white surfaces; marketing canvases a barely-blue off-white `#F7F8FD`. No gradients, patterns or textures. Imagery sits inside rounded frames, not full-bleed — except the website hero/banner photography.
- **Type:** marketing = Roboto Bold, tight (-0.02em), very large, two-tone. App UI = a geometric sans (Poppins substitute) with semibold titles and medium labels. Body copy grey.
- **Imagery:** two flavours — (1) warm, real photography of technicians (website banners); (2) soft 3D/clay renders and flat purple illustrations of people in purple uniforms on lavender/white (app category icons, service banners, How-it-works panel). Palette always nudged toward purple.
- **Corner radii:** generous. Buttons/inputs 10–12px; cards 18–22px; tiles 18px; bottom nav 28px; chips/badges pill.
- **Cards:** white, no border (or 1px `#E6E5EC` on web), soft purple-tinted diffuse shadow (`--shadow-card`). Two accent treatments seen in the app: OrderCard has a 5px purple top rule; NotificationCard has a thin purple left rule that follows the corner radius.
- **Shadows:** low-contrast, large-blur, tinted `rgba(75,0,130,…)`. Elevation scale: card → raised (hover) → nav (upward) → dialog (strong neutral).
- **Borders:** 1.5px lavender for inputs; 1.5px purple outline for secondary buttons; hairline greys for containers like the segmented tabs.
- **Transparency/blur:** grey scrim `rgba(20,20,28,.52)` behind dialogs. Website header uses light frosted white. Otherwise opaque.
- **Layout:** mobile — 20px gutters, horizontal carousels, floating rounded bottom nav with active item expanding into a labelled lavender pill. Web — 1200px container, generous 96px section padding, centered section headings with eyebrow pills.
- **Animation:** subtle. 120–320ms, ease-out `cubic-bezier(.22,.8,.32,1)`. Nav pill grows; cards lift 2–3px on hover. No bounces.
- **Hover:** primary darkens slightly (purple-700); soft/ghost gain a lavender wash; web cards lift + border tints lavender.
- **Press:** 0.98 scale + darker purple (purple-900).
- **Focus:** purple border + periwinkle 3px ring.

## ICONOGRAPHY
- App uses thin-to-regular **line icons** in deep purple (home, briefcase, boxes, user, bell, clock, calendar, store, arrows) — style consistent with Lucide/Feather. No icon font or sprite was provided, so we **substitute Lucide** via CDN (`lucide-static@0.460.0`), rendered with CSS mask so they take `currentColor` (`<Icon name="…"/>` or `.os-icon` with `--icon:url(...)`). ⚠️ Substitution — swap in the real set if available.
- Service categories use **3D illustrated icons** (AC unit, spa stones, spray bottle) — not provided; CategoryTile falls back to a Lucide glyph. Please supply these renders.
- Arrows: "→" inside lavender rounded-square tiles on cards; "›" chevrons after "View All", "See All", "View Details".
- Emoji: see Content — only ✅ in notifications and a website trust row.

## Fonts ⚠️
No font files provided. Substitutes from Google Fonts: **Roboto** (marketing display/body — matches screenshots), **Poppins** (app UI — closest match to the app's geometric sans), **Noto Kufi Arabic** (Arabic labels). Please share the actual font files.

## Logo
The logo is hotlinked from `https://oriasurv.com/Assets/Images/logo.webp` (couldn't be downloaded into the project). Upload an SVG/PNG to `assets/` to make it local; no mark has been redrawn.
