document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Mostra o modal de agradecimento
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "block";
    modal.classList.add("show");

    // Aguarda um pouco e então envia o formulário
    setTimeout(() => {
        event.target.submit();
    }, 1000);
});

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
    modal.classList.remove("show");
}
