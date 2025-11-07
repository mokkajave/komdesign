document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.25
    };

    // Fade up-seksjon
    const fadeUpElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(el => observer.observe(el));


    // Swiper-seksjoner
    const swipeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;

                section.classList.add("swipe-in");

                setTimeout(() => {
                    const textContainer = section.querySelector(".text-container");

                    if (textContainer) {
                        textContainer.querySelectorAll(".fade-up-swipe").forEach(el => {
                            el.classList.add("visible");
                        });
                    }
                }, 500)

                observer.unobserve(section);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".color-swipe-section").forEach(section => {
        swipeObserver.observe(section);
    });

    // Knapp
    const summaryButtons = document.querySelectorAll(".summary-button");

    summaryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.previousElementSibling;
            content.classList.toggle("open")

            if (content.classList.contains("open")) {
                content.style.maxHeight = content.scrollHeight + "px";
                button.textContent = "Vis mindre";
            } else {
                content.style.maxHeight =  "10rem";
                button.textContent = "Vis mer";
            }
        });
    });
});