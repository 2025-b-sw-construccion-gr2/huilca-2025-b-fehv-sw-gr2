function sumarNumeros(a, b) {
    return a + b;
}
// Agrega esto al final para que Jest pueda probarlo
if (typeof module !== 'undefined') {
    module.exports = { sumarNumeros };
}
//Hola este es un comentario para que mi compa me acepte el pull request