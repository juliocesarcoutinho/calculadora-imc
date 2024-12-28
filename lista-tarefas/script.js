const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const tarefas = [];

function renderTarefas() {
  listElement.innerHTML = "";

  tarefas.map((tarefa) => {
    const liElement = document.createElement("li");
    const tarefaText = document.createTextNode(tarefa);

    liElement.appendChild(tarefaText);
    listElement.appendChild(liElement);
  });
}

function adicionarTarefa() {
  if (inputElement.value === "") {
    alert("Digite uma tarefa!");
    return;
  }
  const tarefa = inputElement.value;
  tarefas.push(tarefa);
  inputElement.value = "";
  renderTarefas();
}

buttonElement.onclick = adicionarTarefa;
