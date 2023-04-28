// modal popup functionality

let openBtn = document.getElementById('open-btn')
let closeBtn = document.querySelector('.close-btn')
let modal = document.getElementById('modal')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})


// functionality to send form data to google sheets

const scriptUrl = 'https://script.google.com/macros/s/AKfycbyU67IolbUfAVzjZ8OulalngzzvgO6aHo3M1r-M4i2UYjzX-6MdQc8VArpxhAHM2h2I/exec'
const formEl = document.getElementById('form')

formEl.addEventListener('submit', e => {
    e.preventDefault()
    console.log(formEl)

    fetch(scriptUrl, {method: 'POST', body: new FormData(formEl)})
        .then(res => {
            alert('Will be in touch!', res)
        })
        .catch(error => alert('Error!', error.message))
    formEl.reset()
})


// light dark mode functionality

let moonIcon = document.querySelector('.moon-icon')
let sunIcon = document.querySelector('.sun-icon')
let rootEl = document.documentElement


window.addEventListener('load', () => {
    sunIcon.classList.add('active-icon')
})

sunIcon.addEventListener('click', () => {
    sunIcon.classList.remove('active-icon')
    moonIcon.classList.add('active-icon')
    moonIcon.classList.remove('moon-icon') 
    rootEl.classList.add('dark-mode')  
})

moonIcon.addEventListener('click', () => {
    moonIcon.classList.remove('active-icon')
    sunIcon.classList.add('active-icon')
    rootEl.classList.remove('dark-mode')
})