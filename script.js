const appointmentForm = document.querySelector(".appointment-form");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = appointmentForm.querySelector(
        'input[type="text"]'
    ).value;

    const phone = appointmentForm.querySelector(
        'input[type="tel"]'
    ).value;

    const email = appointmentForm.querySelector(
        'input[type="email"]'
    ).value;

    const service = appointmentForm.querySelector(
        'select'
    ).value;

    const date = appointmentForm.querySelector(
        'input[type="date"]'
    ).value;

    const message = appointmentForm.querySelector(
        'textarea'
    ).value;


    const whatsappMessage =
        "Hello Piyush Eye Care Center,%0A%0A" +
        "I want to book an appointment.%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Email: " + email + "%0A" +
        "Service: " + service + "%0A" +
        "Preferred Date: " + date + "%0A" +
        "Message: " + message;


    const whatsappNumber = "919876543210";

    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage),
        "_blank"
    );

});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const faqItem = this.parentElement;

        faqItem.classList.toggle("active");

    });

});
/* Scroll Animation */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function(section) {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(sectionTop < windowHeight - revealPoint){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();