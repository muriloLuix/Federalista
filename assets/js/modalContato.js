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

    setTimeout(() => {
        window.location.href = "https://www.federalista.org.br";
    }, 1500); // Ajusta o tempo para garantir que o formulário seja enviado antes do redirecionamento
});

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
    modal.classList.remove("show");
}
