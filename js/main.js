/* Плавное появление объектов на странице в брузере */
window.onload = () => {
  document.querySelector('body').classList.remove('hidden');
}

/* анимация аккордеон в секции обо мне */
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0px";
      } else {
        panel.style.maxHeight = "200px";
        panel.style.padding = "15px 20px 25px 40px";
      }
    });
}

/* анимация перелистывания в блоке достижения */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("achievements__block");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}