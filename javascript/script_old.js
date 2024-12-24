const area = document.getElementById("area");

function entrar() {
  const nome = prompt("Qual é o seu nome?");
  if (!nome || nome === null) {
    alert("Por favor, insira um nome válido.");
    return;
  }
  area.innerText = `Bem-vindo, ${nome}! `;

  const botaoSair = document.createElement("button");
  botaoSair.innerText = "Sair";
  botaoSair.onclick = sair;

  area.appendChild(botaoSair);
}

function sair() {
  alert("Até logo!");
  area.innerText = "Até logo!";
}

function soma(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log(`Aluno aprovado com média ${media}`);
  } else if (media >= 5) {
    console.log(`Aluno em recuperação com média ${media}`);
  } else {
    console.log(`Aluno reprovado com média ${media}`);
  }
}
