const offerButtons = document.querySelectorAll(".offer-btn");

offerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const offer = document.getElementById(button.dataset.target);
        const isOpen = offer.classList.toggle("open");
        button.textContent = isOpen ? "Skrýt nabídku" : "Zobrazit nabídku";
    });
});

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    formMessage.textContent = `Děkujeme, ${name}! Ozveme se vám do 24 hodin.`;
    form.reset();
});