let carouselIndex = 0;
const slideContainer = document.querySelector(".carousel-slide");
const totalSlides = document.querySelectorAll(".slide").length;

function showNextSlide() {
  carouselIndex = (carouselIndex + 1) % totalSlides;
  slideContainer.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);
