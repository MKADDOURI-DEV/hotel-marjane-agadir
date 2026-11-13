/* ==========================================================================
   HÔTEL MARJANE AGADIR — vanilla JavaScript (no library, no build step)
   Handles: language switching (FR/EN/AR + RTL + localStorage), mobile nav,
   sticky header, scroll reveal, gallery lightbox, booking search validation,
   contact form validation.
   ========================================================================== */
(function () {
  "use strict";

  var DICT = window.MARJANE_TRANSLATIONS || {};
  var STORAGE_KEY = "marjane.lang";
  var DEFAULT_LANG = "fr";
  var current = DEFAULT_LANG;

  function t(key) {
    var pack = DICT[current] || DICT[DEFAULT_LANG] || {};
    return pack[key] || key;
  }

  /* ---------------- Language ---------------- */
  function applyLanguage(lang) {
    if (!DICT[lang]) lang = DEFAULT_LANG;
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLanguage(stored && DICT[stored] ? stored : DEFAULT_LANG);

  /* ---------------- Header + mobile navigation ---------------- */
  var header = document.querySelector(".header");
  var burger = document.querySelector(".burger");
  var mobileMenu = document.querySelector(".mobile-menu");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("no-scroll", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        header.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- Gallery lightbox ---------------- */
  var tiles = Array.prototype.slice.call(document.querySelectorAll(".tile"));
  var lightbox = document.querySelector(".lightbox");

  if (lightbox && tiles.length) {
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var lbIndex = lightbox.querySelector(".lightbox-index");
    var index = 0;

    function renderLightbox() {
      var tile = tiles[index];
      lbImg.src = tile.getAttribute("data-full") || tile.querySelector("img").src;
      lbImg.alt = tile.querySelector("img").alt;
      lbCaption.textContent = tile.querySelector("img").alt;
      lbIndex.textContent = index + 1 + " / " + tiles.length;
    }

    function openLightbox(i) {
      index = i;
      renderLightbox();
      lightbox.classList.add("is-open");
      document.body.classList.add("no-scroll");
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }

    function step(dir) {
      index = (index + dir + tiles.length) % tiles.length;
      renderLightbox();
    }

    tiles.forEach(function (tile, i) {
      tile.addEventListener("click", function () { openLightbox(i); });
    });
    lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { step(-1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* ---------------- Booking search (front-end only) ----------------
     INTEGRATION POINT: no reservation is created here. To hand the dates to a
     real booking engine, build the redirect URL in handleBooking() below, e.g.
       window.location.href = "https://your-booking-engine.com/search?in=" +
         checkIn + "&out=" + checkOut + "&adults=" + adults + "&rooms=" + rooms;
  ------------------------------------------------------------------ */
  var bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    var inInput = document.getElementById("check-in");
    var outInput = document.getElementById("check-out");
    var today = new Date().toISOString().slice(0, 10);
    if (inInput) inInput.min = today;
    if (outInput) outInput.min = today;
    if (inInput && outInput) {
      inInput.addEventListener("change", function () { outInput.min = inInput.value || today; });
    }

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var notice = document.getElementById("booking-notice");
      var nights = 0;
      if (inInput.value && outInput.value) {
        nights = Math.round((new Date(outInput.value) - new Date(inInput.value)) / 86400000);
      }
      if (!inInput.value || !outInput.value || nights < 1) {
        notice.textContent = t("booking.invalid");
        notice.hidden = false;
        return;
      }
      notice.textContent = t("booking.note");
      notice.hidden = false;
    });
  }

  /* ---------------- Contact form validation ----------------
     INTEGRATION POINT: the form never pretends to send. Replace the block below
     with a real request (Formspree, Netlify Forms, your own endpoint), e.g.
       fetch("https://formspree.io/f/XXXX", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
       });
  -------------------------------------------------------------- */
  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name");
      var email = document.getElementById("cf-email");
      var message = document.getElementById("cf-message");
      var notice = document.getElementById("contact-notice");
      var errors = {
        name: document.getElementById("err-name"),
        email: document.getElementById("err-email"),
        message: document.getElementById("err-message"),
      };
      var valid = true;

      [["name", name, function (v) { return v.trim().length >= 2; }, t("contact.error.name")],
       ["email", email, function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }, t("contact.error.email")],
       ["message", message, function (v) { return v.trim().length >= 10; }, t("contact.error.message")]
      ].forEach(function (row) {
        var ok = row[2](row[1].value);
        errors[row[0]].textContent = ok ? "" : row[3];
        row[1].setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok) valid = false;
      });

      if (!valid) return;
      notice.hidden = false;
      contactForm.reset();
      window.scrollTo({ top: notice.getBoundingClientRect().top + window.scrollY - 220, behavior: "smooth" });
    });
  }

  /* ---------------- Footer year ---------------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
