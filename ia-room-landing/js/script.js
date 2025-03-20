document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Slider Functionality
    const slides = document.querySelectorAll('.slider-image');
    const texts = document.querySelectorAll('.slider-text');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Functions
    function goToSlide(index) {
      // Ensure index is within bounds
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      
      // Remove active class from all slides and texts
      slides.forEach(slide => slide.classList.remove('active'));
      texts.forEach(text => text.classList.remove('active'));
      
      // Add active class to current slide and text
      slides[index].classList.add('active');
      texts[index].classList.add('active');
      
      currentIndex = index;
    }
    
    function goToNextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    function goToPrevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    // Event Listeners
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    });
    
    // Initialize the slider
    goToSlide(0);
  });