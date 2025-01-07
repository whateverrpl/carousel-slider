'use strict';

// Making a module for multiple uses
function carouselSlider({slideSelector, prevSelector, nextSelector, currentCounter, totalCounter}) {
    // DOM Elements slides, prev, next, current, total
    const slides = document.querySelectorAll(slideSelector),
          prevArrow = document.querySelector(prevSelector),
          nextArrow = document.querySelector(nextSelector),
          current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter);

    // Initialization of start index
    let slideIndex = 1;

    showSlides(slideIndex);

    // Changing total counter 
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`; 
    } else {
        total.textContent = slides.length;
    }

    // Function for hide all of slides and show them
    function showSlides(index) {
        // Switching counter from end to start
        if (index > slides.length) {
            slideIndex = 1;
        } 

        // Switching counter form start to end
        if (index < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Show current slide 
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('fade');

        // Changing current counter
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex; 
        }
    }      

    // Readable
    function plusSlides(index) {
        showSlides(slideIndex += index);
    }  

    // And the last, add eventsListener for prev -1, for next +1
    prevArrow.addEventListener('click', () => {
        plusSlides(-1)
    });

    nextArrow.addEventListener('click', () => {
        plusSlides(1)
    });
}

// When calling the function, the correct class selectors must be selected 
carouselSlider({
    slideSelector: '.offer__slide',
    prevSelector: '.offer__slider-prev',
    nextSelector: '.offer__slider-next',
    currentCounter: '#current',
    totalCounter: '#total'
});


