function validarFormulario(event) {
    event.preventDefault();

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var mensagemElemento = document.getElementById("mensagem");

    if (numero2 > numero1) {
        mensagemElemento.textContent = "Formulário válido! Número 2 é maior que Número 1.";
    } else {
        mensagemElemento.textContent = "Formulário inválido! Número 2 deve ser maior que Número 1.";
    }
}

