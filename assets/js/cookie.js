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

// Mostrar o banner se o consentimento ainda não foi dado
function checkCookieConsent() {
    const consent = getCookie("cookieConsent");
    if (!consent) {
        document.getElementById("cookie-banner").classList.remove("hidden");
    }
}

// Funções de consentimento
document.getElementById("accept-cookies").addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
});

document.getElementById("decline-cookies").addEventListener("click", function () {
    setCookie("cookieConsent", "declined", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
});

// Botão Personalizar - Pode abrir um modal ou mais opções de consentimento (exemplo simples aqui)
document.getElementById("customize-cookies").addEventListener("click", function () {
    alert("Opções de personalização de cookies virão aqui.");
});

window.onload = checkCookieConsent;
