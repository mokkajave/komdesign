document.addEventListener("DOMContentLoaded", () => {
    const indicator = document.querySelector(".scroll-indicator");
    const hero = document.querySelector(".hero-section");
    const heroContent = document.querySelector(".hero-content");
    const elementsToReveal = document.querySelectorAll(".hide-until-ready");

    const HERO_FACTOR = 3;
    const CONTENT_FACTOR = 10;

    let latestScrollY = 0;
    let ticking = false;

    function updateParallax(scrollPos) {
        // Hero-bakgrunn
        const heroYOffset = scrollPos / HERO_FACTOR;
        hero.style.transform = `translate3d(0, ${-heroYOffset}px, 0)`;

        // Hero tekst
        const contentYOffset = scrollPos / CONTENT_FACTOR;
        heroContent.style.transform = `translate3d(0, ${-contentYOffset}px, 0)`;

        const scrollFactor = scrollPos / window.innerHeight;
        const newOpacity = Math.max(0, 1 - scrollFactor);
        hero.style.opacity = newOpacity;

        ticking = false;
    }

    function handleScroll() {
        latestScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => updateParallax(latestScrollY));
            ticking = true;
        }
    }

    window.addEventListener("scroll", handleScroll, { 
        passive: true 
    });

    setTimeout (() => {
        handleScroll();

        if (elementsToReveal.length > 0) {
            elementsToReveal.forEach(el => el.classList.remove("hide-until-ready"));
        }
    }, 50);


    // --- Interaktiv --- //

    document.querySelectorAll(".extra-info").forEach(section => {
        const btn = section.querySelector(".toggle-btn");
        const content = section.querySelector(".extra-info-content");

        btn.addEventListener("click", () => {
            const isOpen = content.classList.toggle("open");
            btn.textContent = isOpen ? "Vis mindre" : "Les mer";
            btn.setAttribute("aria-expanded", isOpen);
        });
    });


    // --- Animasjon --- //

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    indicator.classList.remove("hidden");
                } else {
                    indicator.classList.add("hidden");
                }
            });
        },
        {
            threshold: 1
        }
    );
    observer.observe(hero);

    const sections = document.querySelectorAll(".fade-up");

    const fadeObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            })
        },
        {
            threshold: 1
        }
    );
    
    sections.forEach(section => fadeObserver.observe(section));
});