// RESPONSIVE NAVBAR
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// SCROLL ANIMATIONS
const cards = document.querySelectorAll(".card, .place");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
});

// FORM VALIDATION
const form = document.querySelector("#contactForm");

if(form){
  form.addEventListener("submit", function(e){

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if(name === "" || email === "" || message === ""){
      e.preventDefault();
      alert("Please fill in all fields.");
      return;
    }

    if(!email.includes("@")){
      e.preventDefault();
      alert("Please enter a valid email.");
      return;
    }

    alert("Form submitted successfully!");
  });
}