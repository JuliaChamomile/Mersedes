const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('main__scroll')
const newArray = [...linksHead, mainScroll]
// console.log('linksHead');


newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        // console.log(link)

        event.preventDefault()

        // console.dir(event.target.getAttribute('href').substr(1));

        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})