const projectsListEl = document.querySelector('.project__list')
const filterButtonsEl = document.querySelectorAll('.projects__filter--btn')
let filterActive = true

const projects = [
    {
        id: 1,
        name: "MusiCore",
        tags: ['commercial'],
        url: `./Assets/musicore mockup.png`,
        tech: "WordPress, WooCommerce, HTML, CSS & JavaScript",
        link: 'https://musicore.co',
        description: `Since 2019 I have my own business in Music called MusiCore. I built the site myself using WordPress and WooCommerce in combination with lots of custom HTML, CSS and JavaScript to add custom functionality.`,
    }, 
    {
        id: 2,
        name: "Sneaker E-Commerce Store",
        tags: ['framework', 'api'],
        url: `./Assets/sneaker store.jpg`,
        tech: 'HTML, CSS, JavaScript, React & Firebase',
        link: 'https://sneaker-store-ecru.vercel.app/',
        description: "Fully Functional E-Commerce store built with React. Authentication and Backend using Firebase. User can add Products to cart as well as add Products to a Wishlist which gets saved in Firebase's Database. The Products can be filtered according to Brand and Price and both filters can be used together. "
    },
    {
        id: 3,
        name: "Movie Streaming App",
        tags: ['framework', 'api'],
        url: `./Assets/movie app mockup.jpg`,
        tech: 'HTML, CSS, TypeScript, React, Firebase, Styled Components',
        link: 'https://movie-react-app-pi.vercel.app/',
        description: "Full Stack Web Application like Netflix & Disney Plus. The Authentication and Backend is being handled by Firebase. The Frontend was built with React and TypeScript with Styled Components. A user can search for movies and watch the respective trailer as well as save Movies or Series in their account. "
    },
    {
        id: 4,
        name: "Wordle Clone",
        tags: ['framework', 'clones'], 
        url: `./Assets/wordle mockup.png`,
        tech: "HTML, CSS, JavaScript, React",
        link: "https://worlde-clone-react.vercel.app",
        description: "Clone of popular Wordle Game. The objective of the game is to guess the correct word in 6 tries. After each try you can see which letters are in the correct word and also if they are in the correct place or not. After beating the game your score gets incremented by 1."
    },
    {
        id: 5,
        name: "Google Clone",
        tags: ['framework', 'clones', 'api'],
        url: `./Assets/google mockup.jpg`,
        tech: 'HTML, CSS, JavaScript, React',
        link: 'https://google-clone-six-tau.vercel.app',
        description: "A clone of the most popular search engine in the world: Google! This clone has Google's base functionality, which is getting information from the Internet. You can search for queries and get the results for that search term. I used Google's Search API to get the results. More functionality will be added."
    },
    {
        id: 6,
        name: "Homeland - Real Estate App",
        tags: ['framework'],
        url: `./Assets/homeland-mockup.jpg`,
        tech: "HTML, CSS, JavaScript & React",
        link: 'https://real-estate-react-eight.vercel.app/',
        description: "This is a fully responsive Real Estate Application built with React. It contains interesting features such as Dynamic Routing, Advanced Filters and more. You can get the details for each listing on their own unique page. It's also possible to get the listings of a specific agent. "
    },
    
]

for (let i = 0; i < filterButtonsEl.length; ++i) {
    filterButtonsEl[i].addEventListener('click', (e) => {
        const filter = e.target.textContent.toLowerCase()
        if (filterActive) {
            filterButtonsEl.forEach(item => item.classList.remove('selected__filter'))
            e.target.classList += ' selected__filter'
            renderProjects(filter)
        } else {
            e.target.classList += ' selected__filter'
            filterActive = true
            renderProjects(filter)
        }
    })
}

function renderProjects(filter) {
    document.body.classList += ' spinner-visible'
    projectsListEl.innerHTML = ""
    let filteredProjects = projects

    if (filter === 'api') {
        filteredProjects = projects.filter(item => item.tags.includes('api'))
    }
    if (filter === 'framework') {
        filteredProjects = projects.filter(item => item.tags.includes('framework'))
    }
    if (filter === 'commercial') {
        filteredProjects = projects.filter(item => item.tags.includes('commercial'))
    }
    if (filter === 'clones') {
        filteredProjects = projects.filter(item => item.tags.includes('clones'))
    }
    if (filter === 'all') {
        filteredProjects = projects
    }
    
    const projectsHTML = filteredProjects.map(item => {
        return `
            <div class="project">
                <div class="project__wrapper">
                    <img src="${item.url}" class="project__img" alt="">
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">${item.name}</h3>
                        <h4 class="project__description--sub-title">
                            ${item.tech}
                        </h4>
                        <p class="project__description--para">
                            ${item.description}
                        </p>
                        <div class="project__description--links">
                            <a href=${item.link} target="_blank" class="project__description--link"><i class="fas fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join('')
    setTimeout(() => {
        projectsListEl.innerHTML = projectsHTML
        document.body.classList.remove('spinner-visible')
    }, 400)
}

renderProjects()