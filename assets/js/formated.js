function formatCelular() {
    const celular = document.getElementById('celular');
    celular.value = celular.value
        .replace(/\D/g, '') // Remove tudo que não é dígito
        .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona parênteses em volta do DDD
        .replace(/(\d)(\d{4})$/, '$1-$2'); // Adiciona o hífen
}

function formatRG() {
    const rg = document.getElementById('rg');
    rg.value = rg.value
        .replace(/\D/g, '') // Remove tudo que não é dígito
        .replace(/(\d{2})(\d)/, '$1.$2') // Adiciona ponto após os dois primeiros dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os próximos três dígitos
        .replace(/(\d{3})(\d)$/, '$1-$2'); // Adiciona hífen antes do último dígito
}

function formatContribuicao() {
    const contribuicao = document.getElementById('contribuicao');
    let valor = contribuicao.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    valor = (valor / 100).toFixed(2) + ''; // Divide por 100 para representar centavos e fixa duas casas decimais
    valor = valor.replace('.', ','); // Substitui ponto por vírgula
    valor = 'R$ ' + valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Adiciona pontos como separador de milhar
    contribuicao.value = valor;
}