const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {

    slides[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
}

nextBtn.addEventListener("click", function () {

    let nextIndex = (currentSlide + 1) % slides.length;

    showSlide(nextIndex);
});

prevBtn.addEventListener("click", function () {

    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;

    showSlide(prevIndex);
});

setInterval(function () {

    let nextIndex = (currentSlide + 1) % slides.length;

    showSlide(nextIndex);

}, 2000);