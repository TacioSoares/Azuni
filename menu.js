const menuOpcoes = document.querySelector('#menu-opcoes')
const menuHamburguer = document.querySelector('#menu-hamburguer')

menuHamburguer.addEventListener('click', () => {

    if (menuHamburguer.style.top == '8%') {
        menuHamburguer.style.top = '12%'
        return menuOpcoes.style.left = '-300px'
    }
    menuHamburguer.style.top = '8%'
    return (
        menuOpcoes.style.left = '0px'
    )    
})

document.addEventListener('touchmove', e =>{
    /* document.addEventListener('touchend', e =>{ */

        if(e.changedTouches[0].screenX < 1045) {
            console.log('Avançou a tela')
        }
        if(e.changedTouches[0].screenX > 1170) {
            console.log('Voltou a tela')
        }
    /* }) */
})