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
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen antes dos dois últimos dígitos
}


function formatContribuicao() {
    const contribuicao = document.getElementById('contribuicao');
    let valor = contribuicao.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    valor = (valor / 100).toFixed(2) + ''; // Divide por 100 para representar centavos e fixa duas casas decimais
    valor = valor.replace('.', ','); // Substitui ponto por vírgula
    valor = 'R$ ' + valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Adiciona pontos como separador de milhar
    contribuicao.value = valor;

    // Adiciona a classe 'used' caso o campo tenha valor
    if (contribuicao.value.trim() !== '') {
        contribuicao.classList.add('used');
    } else {
        contribuicao.classList.remove('used');
    }
}

function setContribuicao(valor) {
    const contribuicao = document.getElementById('contribuicao');
    contribuicao.value = (valor / 100).toFixed(2).replace('.', ','); // Define o valor no formato de moeda
    contribuicao.value = 'R$ ' + contribuicao.value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Formata com pontos

    // Adiciona a classe 'used' para o floating label subir
    contribuicao.classList.add('used');
}