<?php
if (mail("muriloluiz654@gmail.com", "Teste", "Teste de envio de e-mail", "From: teste@seusite.com")) {
    echo "E-mail enviado com sucesso.";
} else {
    echo "Falha no envio do e-mail.";
}
?>
