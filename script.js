const listElement = document.querySelector('#app ul');

const inputElement = document.querySelector('#app input');

inputElement.focus();

const buttonElement = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
  listElement.innerHTML = '';
  console.log(todos);

  for (const todo of todos) {
    const todosElement = document.createElement('li');

    const todoText = document.createTextNode(todo);

    const linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    const pos = todos.indexOf(todo);

    linkElement.setAttribute('onclick', `deleteTodo(${pos})`);

    const linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todosElement.appendChild(todoText);
    todosElement.appendChild(linkElement);
    listElement.appendChild(todosElement);
  }
}

renderTodos();

function addTodo() {
  const todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  inputElement.focus();
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
