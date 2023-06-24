/* let contador = 1
document.getElementById('radio1').checked = true;


setInterval( function(){
    proximaImagem()
}, 2500)

function proximaImagem() {
    contador ++
    if(contador > 4) {
        contador = 1
    }
    document.getElementById(`radio${contador}`).checked = true;
} */

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
    rewind: true,
    responsive:[
        {
            breakpoint:'400',
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]

})