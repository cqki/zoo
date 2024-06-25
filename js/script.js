
let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('enlargedImg');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const body = document.body;
    const header = document.querySelector('.header'); 
    const navbar = document.querySelector('.navbar'); 
  
    let currentSlide = 0;
    let scrollPositionBeforeModal = 0;
  
    galleryGrid.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG') {
        scrollPositionBeforeModal = window.scrollY; 
        openModal();
        currentSlide = Array.from(galleryGrid.children).indexOf(event.target.parentNode);
        showSlides(currentSlide);
  
        if (header) {
          header.classList.add('hidden');
        }
        if (navbar) {
          navbar.classList.add('hidden');
        }
  
        body.style.position = 'fixed';
      }
    });
  
    closeBtn.addEventListener('click', closeModal);
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    prevBtn.addEventListener('click', function () {
      plusSlides(-1);
    });
  
    nextBtn.addEventListener('click', function () {
      plusSlides(1);
    });
  
    function openModal() {
      modal.style.display = 'flex';
    }
  
    function closeModal() {
      modal.style.display = 'none';
  
      if (header) {
        header.classList.remove('hidden');
      }
      if (navbar) {
        navbar.classList.remove('hidden');
      }
  
      body.style.position = 'static';
  
      window.scrollTo(0, scrollPositionBeforeModal);
    }
  
    function plusSlides(n) {
      showSlides(currentSlide += n);
    }
  
    function showSlides(n) {
      const slides = Array.from(galleryGrid.children);
      if (n >= slides.length) {
        currentSlide = 0;
      } else if (n < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = n;
      }
      modalImg.src = slides[currentSlide].querySelector('img').src;
    }
  });
  





  
  
  
  
  
  
  
  
  
  
  
  
  
  