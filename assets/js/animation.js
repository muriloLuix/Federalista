function handleScroll() {
    const elements = document.querySelectorAll('.fade-left, .fade-right, .fade-up, .fade-down');

    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const threshold = 100;


        if (position.top <= viewportHeight - threshold && position.bottom >= threshold) {

            element.classList.add('show');
        } else {

            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);


window.addEventListener('load', handleScroll);
