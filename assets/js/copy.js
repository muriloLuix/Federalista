function copiarCodigo() {
    const codigo = "00020126390014br.gov.bcb.pix0117contato@if.org.br5204000053039865802BR5925INSTITUTO FEDERALISTA IFB6008CURITIBA62250521s10AOsVEU3XiUFHEsxwfE63047EB1";
    navigator.clipboard.writeText(codigo).then(() => {
        alert("Código copiado para a área de transferência!");
    });
}