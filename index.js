// template_p8vybrd

// service_8seuxkp

// user_x69HfIxyVpU7mK7AHn0FG

let isModalOpen = false;
let isDarkTheme = JSON.parse(localStorage.getItem('dark')) === true
const scaleFactor = 1 / 20;
const contrastToggleEl = document.querySelector('#contrast-toggle')
const allSectionElements = document.querySelectorAll('section')
const navDotsEl = document.querySelectorAll('.nav__dot')
const titleEl = document.querySelector('.title')
const titleColorEl = document.querySelector('.title__color')
const typingCursorEl = document.querySelector('.typing__cursor')

async function typingTitle() {
    const titleTop = ['H', 'e', 'y', '!', `<br>`]
    const titleBottom = 'Ik ben Nathan.'
    let timeoutIndex = 1
    for (let i = 0; i < titleTop.length; ++i) {
        setTimeout(() => {
            titleEl.innerHTML += titleTop[i]
        }, 180 * timeoutIndex)
        timeoutIndex += 1
        
    }

    setTimeout(() => {
        if (isDarkTheme) {
            typingCursorEl.style.color = 'rgb(106, 228, 255)'
            return
        }
        typingCursorEl.style.color = 'rgb(122, 89, 255)'
    }, 180 * (timeoutIndex + Math.random()))

    for (let i = 0; i < titleBottom.length; ++i) {
        setTimeout(() => {
            titleColorEl.innerText += titleBottom[i]
        }, 180 * timeoutIndex + Math.random())
        timeoutIndex += 1
    }
}

typingTitle()

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y *booleanInt}px)`
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}


function toggleContrast(event) {
    // if (isDarkTheme && )
    isDarkTheme = !isDarkTheme
    console.log('dark theme', isDarkTheme)
    if(isDarkTheme) {
        document.body.classList += " dark-theme"
        localStorage.setItem('dark', true)
        contrastToggleEl.innerHTML = `<i class="fas fa-sun"></i>`
        contrastToggleEl.childNodes[0].classList += ' rotate'
        typingCursorEl.style.color = 'rgb(106, 228, 255)'
        setTimeout(() => {
            contrastToggleEl.childNodes[0].classList.remove('rotate')
        }, 500)
    }
    else {
        document.body.classList.remove("dark-theme")
        localStorage.setItem('dark', false)
        contrastToggleEl.innerHTML = `<i class="fas fa-moon"></i>`
        contrastToggleEl.childNodes[0].classList += ' rotate'
        typingCursorEl.style.color = 'rgb(122, 89, 255)'
        setTimeout(() => {
            contrastToggleEl.childNodes[0].classList.remove('rotate')
        }, 500)
    }
} 

function checkContrast() {
    if (isDarkTheme) {
        document.body.classList += " dark-theme"
        contrastToggleEl.innerHTML = `<i class="fas fa-sun"></i>`
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    const errorEl = document.querySelector('.modal__overlay--error')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_8seuxkp',
            'template_p8vybrd',
            event.target,
            'user_x69HfIxyVpU7mK7AHn0FG'
        ).then(() => {
            loading.classList.remove( "modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove( "modal__overlay--visible");
            errorEl.classList += " modal__overlay--visible";
        })
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
       return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    //toggle modal
    document.body.classList += " modal--open"
}