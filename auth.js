function login(username, password) {
    return username && password;
}

function logout() {
    return true;
}

function validateToken(token) {
    return token !== null && token !== "";
}