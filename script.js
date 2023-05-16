'use strict';


window.addEventListener('DOMContentLoaded', () => {


    //slider


    const sliderBtn = document.querySelector('.slider__button'),
          currentNum = document.querySelector('.slider__current span'),
          currentPage = document.querySelector('.info__current'),
          block = document.querySelectorAll('.info__bottom'),
          dot = document.querySelectorAll('.slider__dot');
    let dotIndex = 0;


    function nextDot() {
        sliderBtn.addEventListener('click', () => {
            dotIndex++;
            if (dotIndex == dot.length) {
                dotIndex = 0;
            }
            currentDot(dotIndex);
            currentSlide(dotIndex);
            validateSlider();
        })
    }

    nextDot();

    function currentSlide (index) {
        block.forEach(item => {
            item.classList.remove('info__active');
        })

        block[index].classList.add('info__active');
    }
    
    function currentDot (index) {
        dot.forEach(item => {
            item.classList.remove('dot__active');
        })

        dot[index].classList.add('dot__active');
    }

    function chooseDot () {
        dot.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                let target = event.target;
                dot.forEach(item => {
                    item.classList.remove('dot__active')
                })
                target.classList.add('dot__active')
                dotIndex = i;
                currentSlide(i);
                validateSlider();
               
    
            })
        });
    }
    chooseDot();

    function validateSlider () {
        currentNum.textContent = `0${dotIndex+1}`;
        currentPage.textContent = `0${dotIndex+1}`;

    }
    validateSlider();    
    

})