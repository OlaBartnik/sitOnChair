document.addEventListener(`DOMContentLoaded`, function() {
  var prev = document.querySelector(".slider_prev");
  var next = document.querySelector(".slider_next");
  var slides = document.querySelector(".slider_slides").children;


  var activeSlide = 0;

  slides[activeSlide].classList.add("slider_slide_active");

  next.addEventListener("click", function() {
    slides[activeSlide].classList.remove("slider_slide_active");
    if (activeSlide === slides.length - 1) {
      activeSlide = 0;
    } else {
      activeSlide++;
    }
    slides[activeSlide].classList.add("slider_slide_active");
  });

  prev.addEventListener("click", function() {
    slides[activeSlide].classList.remove("slider_slide_active");
    if (activeSlide === 0) {
      activeSlide = slides.length - 1;
    } else {
      activeSlide--;
    }
    slides[activeSlide].classList.add("slider_slide_active");
  });
});
