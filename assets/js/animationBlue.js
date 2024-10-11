document.addEventListener("scroll", function () {
    const blueSection = document.querySelector('.blueSection');
    const rect = blueSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        // O usuário chegou à parte azul
        blueSection.classList.add('active');
        blueSection.classList.remove('exit');
    } else if (rect.bottom <= 0 || rect.top >= windowHeight) {
        // O usuário rolou para fora da parte azul
        blueSection.classList.add('exit');
        blueSection.classList.remove('active');
    }
});