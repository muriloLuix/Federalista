document.getElementById("myForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const form = event.target;
    const formData = new FormData(form);

    try {
        // Envia o formulário via Fetch
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        // Exibe o modal
        const modal = document.getElementById("thankYouModal");
        modal.style.display = "block";
        modal.querySelector(".modal-content").classList.add("show");

        if (response.ok) {
            console.log("Formulário enviado com sucesso!");
        } else {
            console.error("Houve um problema no envio do formulário.");
        }
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
    }
});

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
    modal.querySelector(".modal-content").classList.remove("show");
}
