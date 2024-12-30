function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const headerItens = document.querySelector('.headerItens');
    const body = document.body; // Seleciona o elemento body

    // Alterna o estado ativo do menu
    hamburger.classList.toggle('active');
    headerItens.classList.toggle('active');

    // Adiciona ou remove a classe 'no-scroll' ao body
    if (headerItens.classList.contains('active')) {
        body.classList.add('no-scroll'); // Bloqueia o scroll
    } else {
        body.classList.remove('no-scroll'); // Libera o scroll
    }
}

// Adiciona evento de clique a cada item do menu
const menuItems = document.querySelectorAll('.headerItens ul a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const headerItens = document.querySelector('.headerItens');
        const hamburger = document.querySelector('.hamburger');
        const body = document.body;

        // Fecha o menu ao clicar em um item
        headerItens.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('no-scroll'); // Libera o scroll ao fechar o menu
    });
});
