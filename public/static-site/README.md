# Hôtel Marjane Agadir — standalone website

A complete, 100% independent static website: HTML5, CSS3 and vanilla JavaScript.
No framework, no build step, no backend, no database, no API keys, no third-party
runtime. Everything the site shows lives in these files.

## Structure

```
/index.html          Home
/about.html          The hotel (+ legal notice)
/rooms.html          Rooms & suites
/services.html       Hotel services
/offers.html         Offers & packages
/gallery.html        Photo gallery
/contact.html        Contact & reservations

/assets/css/style.css        All styling (design tokens at the top)
/assets/js/main.js           All interactions (no library)
/assets/js/translations.js   FR / EN / AR dictionary (local, no service)
/assets/images/              All photography + favicon

/robots.txt
/sitemap.xml
```

Every internal link is relative (`about.html`, `assets/css/style.css`), so the site
works in a sub-folder as well as at a domain root.

## Deploy

**Netlify** — drag this folder onto app.netlify.com/drop, or set the publish
directory to this folder. No build command.

**Vercel** — `vercel deploy` from inside this folder, or import the project in the
dashboard and choose "Other" with the output directory set to `.`.

**Any hosting / cPanel / GitHub Pages** — upload the folder contents by FTP.
`index.html` is served automatically.

## Multilingual (FR / EN / AR)

`assets/js/translations.js` holds the whole dictionary. Language choice is stored
in `localStorage` (`marjane.lang`) and Arabic switches the document to `dir="rtl"`.
To add a language: copy a pack in that file and add a button
`<button type="button" data-lang="es">ES</button>` to the `.lang` blocks.

Static HTML is authored in French so the site reads correctly with JavaScript
disabled; French is also the default before a stored preference is found.

## Interactions (vanilla JS, in `assets/js/main.js`)

- mobile navigation and sticky header
- language switcher with RTL support
- scroll reveal (`IntersectionObserver`)
- gallery lightbox with keyboard navigation
- booking search validation (dates, guests)
- contact form validation
- floating WhatsApp button, smooth scrolling

## Integration points (deliberately not simulated)

**Booking search** — `handleBooking()` in `main.js`. The form validates the dates
and tells the visitor that the online engine is being connected. To go live, build
the booking-engine URL there and redirect, e.g.:

```js
window.location.href =
  "https://your-booking-engine.com/search?in=" + checkIn +
  "&out=" + checkOut + "&adults=" + adults + "&rooms=" + rooms;
```

**Contact form** — the `#contact-form` handler in `main.js`. It never pretends to
send: it validates, then shows a notice that nothing was transmitted. Replace that
block with a real request, e.g. Formspree:

```js
await fetch("https://formspree.io/f/XXXX", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, phone, message })
});
```

then show a success message instead of the notice.

## Before you go live — replace the placeholders

- Phone `+212 528 84 00 00`, WhatsApp `212661234567`, e-mail
  `reservation@hotelmarjane-agadir.ma` — in the header, footer, contact page and
  the `wa.me` links of every page.
- Address, check-in / check-out times.
- Room rates and offer prices (MAD) in `rooms.html`, `offers.html` and `index.html`.
- Social links (Instagram / Facebook) if you have official accounts.
- Domain in `robots.txt` and `sitemap.xml`.
- Photography: replace the files in `assets/images/` keeping the same names.

## Accessibility & SEO

Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`), skip link,
`aria-current` on the active page, `aria-label` on icon-only controls, visible
gold focus rings, alt text on every image, per-page title/description/Open Graph
tags, `robots.txt`, `sitemap.xml`, lazy-loaded images and a reduced-motion mode.
