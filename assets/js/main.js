const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function showLogin() {
    const modal = $('.modal')
    const linkLogin = $('#header__login')
    const btnReturnLogin = $('.btn_return-login')
    const formLogin = $('.login__form')

    linkLogin.addEventListener('click', () => {
        modal.classList.add('active')      
        formLogin.classList.add('active')

    })
    btnReturnLogin.addEventListener('click', () => {
        modal.classList.remove('active')
        formLogin.classList.remove('active')

    })
}

function showRegister() {
    const modal = $('.modal')
    const linkRegister = $('#header__register')
    const btnReturnRegister = $('.btn_return-register')
    const formRegister = $('.register__form')
    
    linkRegister.addEventListener('click', () => {
        modal.classList.add('active')
        formRegister.classList.add('active')
    })
    btnReturnRegister.addEventListener('click', () => {
        modal.classList.remove('active')
        formRegister.classList.remove('active')

    })
}

showLogin()
showRegister()