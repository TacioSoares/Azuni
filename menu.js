const menuOpcoes = document.querySelector('#menu-opcoes')
const menuHamburguer = document.querySelector('#menu-hamburguer')

menuHamburguer.addEventListener('click', () => {

    if (menuHamburguer.style.top == '35px') {
        menuHamburguer.style.top = '60px'
        return menuOpcoes.style.left = '-300px'
    }
    menuHamburguer.style.top = '35px'
    return (
        menuOpcoes.style.left = '0px'
    )    
})