// Переключение слайда на предыдущий

function prevSlide() {
    let slides = document.querySelector('.slider-track > .slide');
    let slide = document.querySelector(".slider-track").removeChild(slides);
    document.querySelector(".slider-track").append(slide);
    positionSlides();
}

// Переключение слайда на следующий

function nextSlide() {
    let slides = document.querySelector(".slider-track").lastElementChild;
    let slide = document.querySelector(".slider-track").removeChild(slides);
    document.querySelector(".slider-track").prepend(slide);
    positionSlides();
}

// Расчет позиции слайда

function positionSlides() {
    let slides = document.querySelectorAll('.slider-track > .slide');
    for (let i = 0; i < slides.length; i++ ) {
        slides[i].style.transform = 'translateX(' + i * 375 + 'px)';
    }
}

// Скрытие и появление необходимых блоков + изменение отступов для корректного отображения верстки при переключении чекбокса

function checkboxEvent() {
    if (!applysticker.checked) {
        mainImg.classList.remove('unactive');
        document.querySelector('.oldprice').classList.add('unactive');
        slider.classList.add('unactive');
        document.querySelector("#mainBlock > b").classList.remove('addmargin');
        document.querySelector("#btnBlock").classList.add('btnaddmargin')
    } else {
        mainImg.classList.add('unactive');
        document.querySelector('.oldprice').classList.remove('unactive');
        slider.classList.remove('unactive');
        document.querySelector("#mainBlock > b").classList.add('addmargin');
        document.querySelector("#btnBlock").classList.remove('btnaddmargin')
    }
}

document.addEventListener('DOMContentLoaded', function(){
    positionSlides();
    chevronL.addEventListener("click",nextSlide);
    chevronR.addEventListener("click",prevSlide);
    let sposX = 0;

    // Расчет разницы координат при клике и отжиме мыши для реализации свайпа на десктопе 

    track.addEventListener('mousedown', (e) => {sposX = e.clientX;})
    track.addEventListener('mouseup', (e) => {let fposX = e.clientX;if (Math.abs(sposX - fposX) > 100) {if ((sposX - fposX) > 0) prevSlide(); else nextSlide();}; })
    
    // Расчет разницы координат при начале и конце свайпа для мобильной версии 
    
    track.addEventListener('touchstart', (e) => {sposX = e.touches[0].pageX;})
    track.addEventListener('touchend', (e) => {let fposX = e.changedTouches[0].pageX;if (Math.abs(sposX - fposX) > 100) {if ((sposX - fposX) > 0) prevSlide(); else nextSlide();}; })
    

    applysticker.addEventListener('click', checkboxEvent);   
});
