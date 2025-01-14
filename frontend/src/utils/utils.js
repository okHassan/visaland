export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
    let cookieValue = "";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            cookieValue = cookie.substring(name.length + 1);
            break;
        }
    }
    return cookieValue;
}
