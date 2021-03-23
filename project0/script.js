const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const checkboxes = list.getElementsByClassName(classNames.TODO_CHECKBOX);

function newTodo() {
  let newHTML = `
  <li class="${classNames.TODO_ITEM}">
    <input class="${classNames.TODO_CHECKBOX}" type="checkbox" /> <input class="${classNames.TODO_TEXT}" type="text" />
  </li>`;

  list.insertAdjacentHTML('beforeend', newHTML);
  updateItemCount();
  updateUncheckedCount();
}

function updateItemCount() {
  itemCountSpan.innerText = list.childElementCount;
}

function updateUncheckedCount() {
  let count = 0;
  Array.from(checkboxes).forEach((item) => {
    if(!item.checked) { count++ }
  });
  uncheckedCountSpan.innerText = count;
}