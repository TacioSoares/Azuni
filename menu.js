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