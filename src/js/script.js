$(document).ready(function(){
    $('.promo__slick_slider').slick({
      arrows: true,
      dots: true,
      draggable: false,
    });
    
  });







  const slides = document.querySelectorAll('.decision__slider_list-item'),
        slider = document.querySelector('.decision__slider'),
        prev = document.querySelector('.decision__slider-prev'),
        next = document.querySelector('.decision__slider-next'),
        slidesWrapper = document.querySelector('.decision__slider_list'),
        slidesField = document.querySelector('.decision__slider_inner'),
        width = window.getComputedStyle(slidesWrapper).width,
        dots = document.querySelectorAll('.decision__slider_control-list-slide'),
        sliderList = document.querySelectorAll('.decision__slider_list-item');


        let slideIndex = 1;
        let offset = 0;
        let selectedLI;  


        function highlight(td, arrow) {
          
          if (selectedLI) { 
            selectedLI.classList.remove('active');
          }
          selectedLI = td;
          selectedLI.classList.add('active'); 
        }
        

        next.addEventListener('click', () => {
          
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
          } else {
            offset += +width.slice(0, width.length - 2)
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
          console.log(sliderList);
        });



        prev.addEventListener('click', () => {
          if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
          } else {
            offset -= +width.slice(0, width.length - 2)
          }
          slidesField.style.transform = `translateX(-${offset}px)`
          
        })

        

        slidesField.style.width = 100 * slides.length + '%';

        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden'


        slides.forEach(slide  => {
          slide.style.width = width;
        });


        
        dots.forEach(item => {
          
          item.addEventListener('click', (e) => {
            let target = e.target;
            
            const slideTo = target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            
            if (target.tagName != 'LI') return; // не на TD? тогда не интересует

            highlight(target);
            console.log(target.getAttribute('data-slide-to'));
          })

          
        })

        
      
        
        
        

 









  