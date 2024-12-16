function copiarCodigo() {
    const codigo = "00020126520014br.gov.bcb.pix0130eucontribuo@federalista.org.br5204000053039865802BR5925INSTITUTO FEDERALISTA IFB6008CURITIBA62250521s10AOsVEU3XiUFHEsxwfE6304B08D";
    navigator.clipboard.writeText(codigo).then(() => {
        alert("Código copiado para a área de transferência!");
    });
}