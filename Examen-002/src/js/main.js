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

function calcularSumaBinaria() {
    const bin1 = document.getElementById('bin1').value.trim();
    const bin2 = document.getElementById('bin2').value.trim();

    if (!esBinario(bin1) || !esBinario(bin2)) {
        document.getElementById('resultadoBinario').textContent =
            'Entrada inválida';
        return;
    }

    const resultado = sumarBinarios(bin1, bin2);
    document.getElementById('resultadoBinario').textContent = resultado;
}

function esBinario(valor) {
    return /^[01]+$/.test(valor);
}

function sumarBinarios(binA, binB) {
    const a = parseInt(binA, 2);
    const b = parseInt(binB, 2);
    const suma = a + b;
    return suma.toString(2);
}
