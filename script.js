const item = document.querySelectorAll('[data-anime]');

const animeScroll = ( ) => {
    const windowTop = window.scrollY + innerHeight * 0.7;

    item.forEach(element => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove('animate')
        }
    })
};

window.addEventListener('scroll', () => {
    animeScroll();
})