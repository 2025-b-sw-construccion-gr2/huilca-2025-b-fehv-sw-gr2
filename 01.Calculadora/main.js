function calcularSuma() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const resultado = sumarNumeros(num1, num2);
    document.getElementById('resultado').textContent = resultado;
}

function calcularResta() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const resultado = restarNumeros(num1, num2);
    document.getElementById('resultado').textContent = resultado;
}