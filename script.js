/* =========================================================
   MILLER TREE & GROUND SERVICES
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (
    mobileMenuButton &&
    mobileNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNavigation.classList.toggle(
                    "open"
                );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

document
    .querySelectorAll(".mobile-navigation a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNavigation?.classList.remove(
                    "open"
                );

                mobileMenuButton?.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !mobileNavigation ||
            !mobileMenuButton
        ) {
            return;
        }


        const clickedInsideMenu =
            mobileNavigation.contains(
                event.target
            );


        const clickedMenuButton =
            mobileMenuButton.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            mobileNavigation.classList.remove(
                "open"
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            mobileNavigation?.classList.remove(
                "open"
            );

            mobileMenuButton?.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   HEADER SHADOW WHEN SCROLLING
========================================================= */

const header =
    document.querySelector(".site-header");


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.30)";

    } else {

        header.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =========================================================
   SIMPLE FADE-IN ANIMATIONS
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".home-service-card, .why-item, .featured-work-placeholder"
    );


if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   PHONE NUMBER CLICK TRACKING
========================================================= */

document
    .querySelectorAll('a[href^="tel:"]')
    .forEach((phoneLink) => {

        phoneLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Phone enquiry started"
                );

            }
        );

    });


/* =========================================================
   EMAIL LINK TRACKING
========================================================= */

document
    .querySelectorAll('a[href^="mailto:"]')
    .forEach((emailLink) => {

        emailLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Email enquiry started"
                );

            }
        );

    });

    // OUR WORK CATEGORY FILTERS
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".work-filter");
    const workItems = document.querySelectorAll(".work-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            workItems.forEach(item => {
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});