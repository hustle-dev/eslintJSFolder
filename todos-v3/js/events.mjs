import * as Func from './functions.mjs';

const $toggleAll = document.querySelector('.toggle-all');
const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

window.addEventListener('DOMContentLoaded', Func.fetchTodo);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = e.target.value.trim();

  if (content) {
    Func.addTodo(e.target.value);
  }

  e.target.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  Func.toggleTodoCompleted(e.target.closest('li').dataset.id);
};

$toggleAll.onchange = () => {
  Func.toggleAllTodoCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  Func.updateTodo(e.target.parentNode.dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  Func.removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...$filters.querySelectorAll('a')].forEach($a =>
    $a.classList.toggle('selected', $a === e.target)
  );

  Func.setFilter(e.target.id);
};

$clearCompleted.onclick = Func.removeAllCompletedTodos;
