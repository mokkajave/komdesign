document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

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
});

// Poll
window.addEventListener("load", function() {
    const inputs = this.document.querySelectorAll('input[name="pollOption"]');
    inputs.forEach(input => input.checked = false);
});

document.getElementById("aiPoll").addEventListener("submit", function(e) {
    e.preventDefault();

    const choice = document.querySelector('input[name="pollOption"]:checked');
    if (!choice) return alert('Velg et alternativ før du stemmer.');

    const results = {
        yes: Math.floor(Math.random() * 40 + 30),
        no: Math.floor(Math.random() * 30 + 10),
        unsure: Math.floor(Math.random() * 20 + 10)
    };

    const resultList = document.getElementById("resultList");
    resultList.innerHTML = `
        <li>Ja: ${results.yes}%</li>
        <li>Nei: ${results.no}%</li>
        <li>Usikker: ${results.unsure}%</li>
    `;

    document.getElementById("aiPoll").style.display = "none";
    document.getElementById("pollResult").style.display = "block";
});