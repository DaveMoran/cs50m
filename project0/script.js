const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  console.log('New TODO button clicked!');

  let newHTML = `
  <li class="todo-container">
    <input class="todo-checkbox" type="checkbox" /> <input type="text" />
  </li>`;

  list.insertAdjacentHTML('beforeend', newHTML);
}