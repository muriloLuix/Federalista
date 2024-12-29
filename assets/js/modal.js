document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Seleciona o modal
    const modal = document.getElementById("thankYouModal");

    // Mostra o modal e adiciona animação
    modal.style.display = "block";
    modal.querySelector(".modal-content").classList.add("show");
});

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
    modal.querySelector(".modal-content").classList.remove("show");
}
