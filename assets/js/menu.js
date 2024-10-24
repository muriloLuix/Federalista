function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const headerItens = document.querySelector('.headerItens');

    hamburger.classList.toggle('active');
    navigation.classList.toggle('open');
}