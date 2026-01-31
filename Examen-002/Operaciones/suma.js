function sumarNumeros(a, b) {
    return a + b;
}
// Agrega esto al final para que Jest pueda probarlo
if (typeof module !== 'undefined') {
    module.exports = { sumarNumeros };
}
