// Funções para definir e obter cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Função para verificar o consentimento
function checkCookieConsent() {
    const consent = getCookie("cookieConsent");
    if (consent) {
        document.getElementById("cookie-banner").style.display = "none";
    }
}

// Executa a verificação após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    checkCookieConsent();

    document.getElementById("accept-cookies").addEventListener("click", function () {
        setCookie("cookieConsent", "accepted", 365);
        document.getElementById("cookie-banner").style.display = "none";
    });

    document.getElementById("decline-cookies").addEventListener("click", function () {
        setCookie("cookieConsent", "declined", 365);
        document.getElementById("cookie-banner").style.display = "none";
    });

    document.getElementById("customize-cookies").addEventListener("click", function () {
        alert("Opções de personalização de cookies virão aqui.");
    });
});
