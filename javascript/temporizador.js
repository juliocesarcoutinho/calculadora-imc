// setInterval
function acao() {
  document.write("Executou...<br>");
}

// setInterval(acao, 1000); // 1000 milisegundos = 1 segundo

// const timer = setInterval(() => {
//   document.write("Executou...<br>");
// }, 1000);

// setTimeout
// setTimeout(acao, 3000); // 3000 milisegundos = 3 segundos

setTimeout(() => {
  document.write("Executou...<br>");
}, 3000);
