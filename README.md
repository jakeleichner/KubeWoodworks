# Kube Woodworks

Marketing and showcase website for **Kube Woodworks** — a one-man custom woodworking shop run by **Dave Kube** in **Crofton, Nebraska**.

This document is the source of truth for the project. It is written so that **Claude Code** (or any developer) can build, extend, and maintain the site without needing additional context. Read this whole file before making changes.

---

## 1. What this business is

Dave Kube spent ~30 years as a home builder and is transitioning into woodworking to reduce wear on his body. He makes **finished pieces and then sells them** — this is a *maker storefront*, not a custom-commission shop. He leans toward **heirloom furniture and unique one-off pieces**, with a **mix** of smaller goods (cutting boards, boxes) as well.

Key realities that shape every design decision:

- **Word-of-mouth is the only marketing channel.** People are *sent* to this site by Dave or by happy customers. It does not need SEO, blogs, social feeds, or anything that competes for search traffic. It needs to look credible and make contact easy.
- **Dave updates it himself, in waves.** He is comfortable photographing finished pieces, but will not log into a CMS or touch a database. Updates must be as simple as humanly possible (ideally: drop a photo in a folder, copy-paste one block of text). The site must look intentional and complete even when there are only a few pieces.
- **He has very little to show right now.** The design must not look broken or empty with 1–3 pieces. Avoid layouts that require a full grid to look right.
- **One-man craftsman identity.** Personal, not corporate. His name is on it. An **About page** is explicitly wanted.

---

## 2. How the site should behave

### Inventory model
- The site displays **pieces Dave has made**, each with photos, a title, description, wood species, dimensions, and an **availability status**.
- **Availability states:**
  - `Available` — piece is for sale, contact Dave to arrange.
  - `Not available` — still show the piece, but display a message along the lines of: *"Not currently in stock — contact Dave for an estimate on when a similar piece could be ready."*
- Pieces are never deleted when sold; they stay as a portfolio of past work with the not-available message.

### Buying / contact
- **No e-commerce checkout in v1.** Buyers **contact Dave to arrange** purchase. Direct online purchase is a possible *future* phase — architect the code so it could be added later, but do not build it now.
- **Custom requests are secondary but allowed.** A buyer might want a different size of an existing piece, or a different wood species, or something fully custom. Provide an **order/inquiry note field or clear prompt** so they can describe this when they reach out. Do not build a full custom-commission flow.
- **Contact methods: phone and email only.** Dave will set up a **new dedicated email** just for orders (placeholder: `[orders-email@example.com]` until provided). No contact form backend is required in v1 — `mailto:` and `tel:` links are sufficient and zero-maintenance. A static form that opens the user's email client is acceptable; a form requiring a server/database is **not** wanted in v1.
- **Fulfillment: local pickup / regional only.** No shipping. Make this clear so out-of-area visitors aren't confused.
- **Payment: cash, check, and Venmo.** State this on the site (likely on the About or contact area) so expectations are set before someone calls.

### Tone & identity
- Personal, warm, craftsman-run. First-person ("I build…") is appropriate where it fits.
- Not a slick corporate brand. Think "skilled neighbor who does beautiful work," not "furniture startup."
- **An About page is required** — Dave's background (30 years home building, transitioning to woodworking, works in locally relevant hardwoods, based in Crofton near Lewis & Clark Lake).

---

## 3. Required pages / sections

1. **Home / Work** — the showcase. Pieces displayed prominently; this is the heart of the site. Must look good with as few as 1–3 pieces.
2. **About** — Dave's story, the one-man-shop ethos, location, payment methods (cash/check/Venmo), local-pickup-only note.
3. **Contact** — phone + email (`tel:` / `mailto:`), prompt for custom requests, restate local/regional pickup.

These can be one scrolling page or separate pages — see Section 6 for the design direction under consideration.

---

## 4. Content placeholders to fill in

Anywhere these appear in code, they are intentional placeholders awaiting real info. Search for the square brackets:

- `[Dave Kube]` — confirmed name; can be hardcoded.
- `[orders-email@example.com]` — the new dedicated orders email (not yet created).
- `[phone number]` — Dave's contact number.
- `[Year]` — year the business was established.
- Piece photos — Dave will supply; until then, use neutral placeholders, **not** fake/AI photos of furniture that misrepresent his actual work.

---

## 5. The logo and brand assets

The brand mark is a **letter "K" made from two woods joined by a dovetail joint** — maple (light) body, walnut (dark) frame, with three dovetail tails on the left stem. It directly references fine woodworking craftsmanship and the "K" in Kube.

> **NOTE on the business name:** The logo art currently reads **"KUBE CREATIONS"** (the earlier working name). The business name has since been finalized as **"Kube Woodworks."** The wordmark in the logo art will need to be regenerated/updated to say "Kube Woodworks." Until that's done, either (a) use the K-mark alone (which has no text and is unaffected), or (b) flag the mismatch. Do not ship the old "Kube Creations" wordmark as the live brand name.

### Should the logo package be in this repo?

**Yes — commit the logo files to the repo.** Reasons:
- The site references them directly (`<img>` tags, favicon, etc.), so they must be deployed alongside the HTML.
- Keeping them version-controlled means the site is self-contained and reproducible — anyone who clones the repo gets a working site.
- They are small (PNG/ICO), so repo size is not a concern.

**Recommended structure:** put deployable web assets at the paths the HTML expects (often the root or an `/assets` or `/images` folder), and keep the *non-web* source/large masters in a clearly separated folder (e.g. `/brand-assets/`) so they're archived but not accidentally served. Suggested layout:

```
/                         repo root
  index.html
  about.html              (if multi-page)
  /images/                photos of pieces Dave makes
  /assets/
    k-mark-512.png        K mark, transparent, nav/footer use
    k-mark-1080.png       K mark, transparent, larger use
    favicon.ico
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
    site.webmanifest
  /brand-assets/          archived source files, not served
    master.png                  full logo, brown background, 3136x4672
    master-transparent.png      full logo, transparent
    k-mark-square-master.png    high-res K mark
    k-mark-black-1080.png       single-color silhouette
    k-mark-black-512.png        single-color silhouette
    README-logo-usage.txt       (optional) which file goes where
```

A note for whoever wires this up: the K-mark PNGs have **transparent corners** (the K shape is not a full square). When placing the mark, do **not** wrap it in a container with `overflow: hidden` + `border-radius` + `object-fit: cover`, which clips the shape. Use `object-fit: contain` and let the transparency show.

### What's still missing from the brand package
- A **true vector version** (SVG/AI) of the K mark for engraving, embroidery, stamps, and large-format signage. The current files are raster only. A vectorized version can be commissioned cheaply ($15–30 on Fiverr) when needed — not blocking for the website.
- An updated **"Kube Woodworks" wordmark** (see name note above).

---

## 6. Design direction

Three design mockups exist from early exploration. **None is final.** The first conventional design and a "workshop journal" concept were explored and set aside (the journal leaned too hard into a small-town theme and felt like parody). The current front-runner:

- **Gallery / "work as the site"** (`mockup-gallery.html` if present): opens directly on a finished piece shown large, museum-placard style (wood, dimensions, finish, date), with arrow-key/button navigation between pieces. Minimal marketing copy; the work carries the site.

**Why this fits Dave:** it looks deliberate and premium even with only a few pieces, requires no frequent updating to avoid looking stale, and centers the craftsmanship. It maps cleanly onto the inventory model — each "piece" gets an availability state.

**Build guidance:**
- Dark, warm background makes amateur wood photography look its best — keep this.
- Each piece is a self-contained block of HTML so Dave (or a helper) adds new work by copy-pasting one block and dropping a photo in `/images/`. Document this clearly with a comment in the HTML.
- Include the **availability status** per piece (Available / Not available + the contact-for-estimate message).
- Keep everything **static** — no framework, no build step, no server. Plain HTML/CSS/vanilla JS. This is a hard requirement for maintainability by a non-technical owner.

---

## 7. Technical constraints (hard rules)

- **Static site only.** No backend, no database, no server-side code in v1.
- **No build tooling required.** It must be openable by double-clicking `index.html`. Plain HTML/CSS/JS. (A static host is fine for production; a build pipeline is not.)
- **No browser storage** (`localStorage`/`sessionStorage`) unless a feature genuinely needs it and degrades gracefully.
- **Mobile-responsive.** Many word-of-mouth visitors will open it on a phone after Dave hands them the address.
- **Relative asset paths** so the site works both locally (file://) and when deployed.
- **Accessibility basics:** alt text on all piece photos, sufficient color contrast, keyboard-navigable.

---

## 8. Hosting & deployment

Recommended: a free static host — **GitHub Pages**, Netlify, Cloudflare Pages, or Vercel. Since the repo is already on GitHub, **GitHub Pages** is the path of least resistance: enable Pages on the default branch and the site is live. Confirm a custom domain later if Dave wants one (e.g. `kubewoodworks.com`).

Before launch, verify domain and **Facebook page name** availability for "Kube Woodworks" — for a word-of-mouth local business, the Facebook page may matter as much as the domain.

---

## 9. Suggested first tasks for Claude Code

1. Decide multi-page vs single-page based on the gallery direction (Section 6), then scaffold `index.html` + `about.html` (or anchored sections).
2. Set up the `/assets/` and `/images/` structure (Section 5) and wire the favicon set + K-mark.
3. Build the **piece component** as a copy-pasteable HTML block with: photo(s), title, description, wood, dimensions, finish, date, and **availability status**. Add an HTML comment template showing Dave exactly how to add a new piece.
4. Build the **About page** with Dave's story, payment methods (cash/check/Venmo), and local-pickup-only note.
5. Build the **Contact** area: `tel:` + `mailto:` links, a clear prompt for custom-size/wood-species requests, restate regional pickup.
6. Flag the **"Kube Creations" → "Kube Woodworks"** wordmark mismatch in the logo art; use the text-free K-mark until the wordmark is updated.
7. Keep it static, responsive, and accessible per Section 7.

---

## 10. Out of scope for v1 (do not build yet)

- Online payment / shopping cart / checkout.
- Server-backed contact forms.
- Shipping/fulfillment logic.
- CMS or admin dashboard.
- Blog / news feed / social integrations.

These may be revisited later; architect cleanly so they *could* be added, but do not implement them now.
