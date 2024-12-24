// While = enquanto
// Estrutura de repetição while
/*let x = 0;
while (x < 10) {
  document.write(`</br> O valor de X é: ${x}`);
  // aumenta o valor de x pra que não fique em loop infinito
  x++;
} */

// Estrutura de repetição for
// for (variável; condição; incremento) {}
/*for (let y = 0; y < 10; y++) {
  document.write(`</br> O valor de Y é: ${y}`);
} */

// switch expressão de casos
// switch (variável) {}
function pedir() {
  const valor = prompt("Digite um valor de 1 a 5");

  switch (Number(valor)) {
    case 1:
      alert("Você digitou o valor 1 = Suco");
      break;
    case 2:
      alert("Você digitou o valor 2 = Agua c/ Gás");
      break;
    case 3:
      alert("Você digitou o valor 3 = Agua s/ Gás");
      break;
    case 4:
      alert("Você digitou o valor 4 = Refrigerante");
      break;
    case 5:
      alert("Você digitou o valor 5 = Chamar o atendente");
      break;
    default:
      alert("Valor inválido, digite um valor de 1 a 5");
      break;
  }
}
