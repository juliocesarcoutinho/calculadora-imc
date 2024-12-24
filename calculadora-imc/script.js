// Função para calcular o IMC
function calcular(event) {
  event.preventDefault();

  const peso = Number.parseFloat(document.getElementById("peso").value);
  const altura = Number.parseFloat(document.getElementById("altura").value);

  if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  // Calcula o IMC
  const imc = peso / (altura * altura);
  let resultado;

  // Define a mensagem com base no valor do IMC
  if (imc < 17) {
    resultado = "Muito abaixo do peso";
  } else if (imc >= 17 && imc <= 18.4) {
    resultado = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    resultado = "Obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    resultado = "Obesidade grau 2";
  } else {
    resultado = "Obesidade grau 3";
  }

  // Exibe o resultado no modal
  document.getElementById(
    "resultadoTexto"
  ).innerText = `Seu IMC é ${imc.toFixed(2)}: ${resultado}`;

  // Exibe o modal
  const modal = new bootstrap.Modal(document.getElementById("resultadoModal"));
  modal.show();
}

// Adiciona o evento ao formulário
document.getElementById("imcForm").addEventListener("submit", calcular);
