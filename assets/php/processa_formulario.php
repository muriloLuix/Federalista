<?php
// processa_formulario.php

// Verifica se o formulário foi enviado via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta e sanitiza os dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $rg = filter_input(INPUT_POST, 'rg', FILTER_SANITIZE_STRING);
    $uf = filter_input(INPUT_POST, 'uf', FILTER_SANITIZE_STRING);
    $cidade = filter_input(INPUT_POST, 'cidade', FILTER_SANITIZE_STRING);
    $celular = filter_input(INPUT_POST, 'celular', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $contribuicao = filter_input(INPUT_POST, 'contribuicao', FILTER_SANITIZE_STRING);
    $observacoes = filter_input(INPUT_POST, 'observacoes', FILTER_SANITIZE_STRING);

    // Verifica se o e-mail é válido
    if (!$email) {
        die('E-mail inválido.');
    }

    // Configurações do e-mail
    $destinatario = "muriloluiz654@gmail.com"; // Altere para seu e-mail
    $assunto = "Novo Formulário Recebido";
    $mensagem = "
        <html>
        <head>
            <title>Formulário Recebido</title>
        </head>
        <body>
            <h1>Dados do Formulário</h1>
            <p><strong>Nome:</strong> $nome</p>
            <p><strong>RG:</strong> $rg</p>
            <p><strong>UF:</strong> $uf</p>
            <p><strong>Cidade:</strong> $cidade</p>
            <p><strong>Celular:</strong> $celular</p>
            <p><strong>E-mail:</strong> $email</p>
            <p><strong>Contribuição:</strong> R$ $contribuicao</p>
            <p><strong>Observações:</strong> $observacoes</p>
        </body>
        </html>
    ";

    // Cabeçalhos do e-mail
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Envio do e-mail
    if (mail($destinatario, $assunto, $mensagem, $headers)) {
        echo "Formulário enviado com sucesso!";
    } else {
        echo "Erro ao enviar o formulário. Tente novamente.";
    }
} else {
    echo "Método inválido.";
}
