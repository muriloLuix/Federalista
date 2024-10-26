function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const headerItens = document.querySelector('.headerItens');
    const body = document.body; // Seleciona o elemento body


    hamburger.classList.toggle('active');


    headerItens.classList.toggle('active');

    // Adiciona ou remove a classe 'no-scroll' ao body
    if (headerItens.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

// Adiciona evento de clique a cada item do menu
const menuItems = document.querySelectorAll('.headerItens ul a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const headerItens = document.querySelector('.headerItens');
        const hamburger = document.querySelector('.hamburger');
        const body = document.body;

        headerItens.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});
