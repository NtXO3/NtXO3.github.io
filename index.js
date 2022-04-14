// template_p8vybrd

// service_8seuxkp

// user_x69HfIxyVpU7mK7AHn0FG

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

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

function toggleContrast(event) {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
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
            alert('Oeps...er ging iets mis. Je E-Mail is niet verzonden. Probeer: nathanminkhorst@gmail.com')
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

