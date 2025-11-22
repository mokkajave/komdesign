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

// Polls
window.addEventListener("load", function() {
    const inputs = this.document.querySelectorAll('input[name="pollOption"]');
    inputs.forEach(input => input.checked = false);
});

// AI
document.getElementById("aiPoll").addEventListener("submit", function(e) {
    e.preventDefault();

    const choice = document.querySelector('input[name="pollOption"]:checked');
    if (!choice) return alert('Velg et alternativ før du stemmer.');

    const results = {
        yes: 55,
        no: 25,
        unsure: 20
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

// Deepfake
document.getElementById("deepfakePoll").addEventListener("submit", function(e) {
    e.preventDefault();

    const choice = document.querySelector('input[name="pollOption"]:checked');
    if (!choice) return alert('Velg et alternativ før du stemmer.');

    const results = {
        verySafe: 10,
        safe: 15,
        skeptical: 30,
        verySkeptical: 45
    };

    const resultList = document.getElementById("deepfakeResultList");
    resultList.innerHTML = `
        <li>Veldig trygg: ${results.verySafe}%</li>
        <li>Trygg: ${results.safe}%</li>
        <li>Skeptisk: ${results.skeptical}%</li>
        <li>Veldig skeptisk: ${results.verySkeptical}%</li>
    `;

    document.getElementById("deepfakePoll").style.display = "none";
    document.getElementById("deepfakeResult").style.display = "block";
});