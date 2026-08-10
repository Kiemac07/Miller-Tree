const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


// =========================
// MOBILE MENU
// =========================

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });

}


// Close mobile menu when clicking a navigation link

document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {

    nav?.classList.remove("open");

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );

  });

});



// =========================
// IMAGE LIGHTBOX
// =========================

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.querySelector(".lightbox-close");


document.querySelectorAll(".gallery-item").forEach((item) => {

  item.addEventListener("click", () => {

    const image =
      item.querySelector("img");

    const fullImage =
      item.dataset.full;

    if (!lightbox || !lightboxImage) {
      return;
    }

    lightboxImage.src =
      fullImage;

    lightboxImage.alt =
      image ? image.alt : "";

    lightbox.classList.add("open");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );

  });

});


// Close lightbox

function closeLightbox() {

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove(
    "open"
  );

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  if (lightboxImage) {
    lightboxImage.src = "";
  }

  document.body.classList.remove(
    "menu-open"
  );

}


if (lightboxClose) {

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

}


if (lightbox) {

  lightbox.addEventListener(
    "click",
    (event) => {

      if (
        event.target === lightbox
      ) {
        closeLightbox();
      }

    }
  );

}



// =========================
// ESCAPE KEY
// =========================

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeLightbox();

      nav?.classList.remove(
        "open"
      );

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    }

  }
);



// =========================
// FREE QUOTE FORM
// =========================

const quoteForm =
  document.getElementById("quoteForm");


if (quoteForm) {

  quoteForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          ?.value
          .trim();


      const phone =
        document
          .getElementById("phone")
          ?.value
          .trim();


      const service =
        document
          .getElementById("service")
          ?.value;


      const details =
        document
          .getElementById("details")
          ?.value
          .trim();


      const subject =
        encodeURIComponent(
          `Free quote enquiry - ${service}`
        );


      const body =
        encodeURIComponent(
`Hello Adam,

I'd like to request a free no-obligation quote.

Name: ${name}
Phone: ${phone}
Service: ${service}

Job details:
${details || "No additional details provided."}

Thanks.`
        );


      window.location.href =
        `mailto:millertreeandgroundinfo@gmail.com?subject=${subject}&body=${body}`;

    }
  );

}



// =========================
// CURRENT YEAR
// =========================

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}