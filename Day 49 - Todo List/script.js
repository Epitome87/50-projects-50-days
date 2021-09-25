const form = document.getElementById('form');
const input = document.getElementById('input');
const todosList = document.getElementById('todos');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoElement = document.createElement('li');

    if (todo && todo.completed) {
      todoElement.classList.add('completed');
    }

    todoElement.innerText = todoText;

    // Left-click event
    todoElement.addEventListener('click', () =>
      todoElement.classList.toggle('completed')
    );

    // Right-click event
    todoElement.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      todoElement.remove();
    });

    todosList.appendChild(todoElement);

    input.value = '';
  }
}
