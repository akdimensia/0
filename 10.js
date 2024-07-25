let section = document.querySelector('section');
let text = document.querySelector('.text');

const slides = document.querySelectorAll('.slide');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.left = `${100 - (value / 5)}%`
    innerText.style.left = `${100 - (value / 5)}%`

    const triggerBottom = window.innerHeight / 5 * 4;
    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;
        if (slideTop < triggerBottom) {
            slide.classList.add('in');
        } else {
            slide.classList.remove('in');
        }
    });

});