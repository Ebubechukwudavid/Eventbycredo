function handleClick(event) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('clicked'));
    event.target.classList.add('clicked');
}

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling after preloader disappears
});
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselContainer = document.getElementById('carouselContainer');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const scrollStep = 100; // Adjust scroll step based on your design and item width
    let timeout;

    function scrollLeft() {
      carousel.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
      });
      showArrows();
    }

    function scrollRight() {
      carousel.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });
      showArrows();
    }

    function showArrows() {
      clearTimeout(timeout);
      leftArrow.style.display = 'block';
      rightArrow.style.display = 'block';
      timeout = setTimeout(() => {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
      }, 5000); 
    }

    leftArrow.addEventListener('click', scrollLeft);
    rightArrow.addEventListener('click', scrollRight);

    // Show arrows on carousel interaction
    carouselContainer.addEventListener('mouseenter', showArrows);
    carouselContainer.addEventListener('mouseleave', () => {
      clearTimeout(timeout);
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'none';
    });
  });