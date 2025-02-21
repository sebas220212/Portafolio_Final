

function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    mostrarResultado(resultado);
}

function restar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    mostrarResultado(resultado);
}

function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        mostrarResultado("Error: División entre 0");
    } else {
        const resultado = num1 / num2;
        mostrarResultado(resultado);
    }
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
