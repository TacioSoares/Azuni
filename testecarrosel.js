
// Simple Carrousel
// ------------------------------------

const carroselSimples = document.querySelector('.js-carrousel-simples')

new Glider(carroselSimples, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots:'.js-carousel--simple-dots' ,
    arrows: {
        prev: '.js-carousel--simple-prev',
        next: '.js-carousel--simple-next',
    },
    scrollLock: true,
})