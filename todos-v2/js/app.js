let todos = [];

// 변수 선언
const $main = document.querySelector('.main');
const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');
const $filters = document.querySelector('.filters');
const $all = document.getElementById('all');

// 함수 선언
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
    <li data-id="${id}">
        <div class="view">
            <input type="checkbox" class="toggle" ${
              completed ? 'checked' : ''
            } />
            <label>${content}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
    </li>`
    )
    .join('');
};

const getNumOfCompleted = () => todos.filter(todo => todo.completed).length;

const displayElement = () => {
  $clearCompleted.style.display = getNumOfCompleted() === 0 ? 'none' : 'block';

  $todoCount.textContent =
    todos.length > 1
      ? `${todos.length} items left`
      : `${todos.length} item left`;

  if (todos.length === 0) {
    $main.style.display = 'none';
    $footer.style.display = 'none';
  } else {
    $main.style.display = 'block';
    $footer.style.display = 'block';
  }
};

const filtertoAll = () => {
  [...$filters.children].forEach(liElement =>
    liElement.firstElementChild.classList.remove('selected')
  );
  $all.classList.add('selected');
};

const setTodo = newTodo => {
  todos = newTodo;

  if (!$all.classList.contains('selected')) filtertoAll();
  displayElement();
  render();
};

const fetchTodo = () => {
  setTodo([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = newContent => {
  setTodo([
    { id: generateTodoId(), content: newContent, completed: false },
    ...todos
  ]);
};

const editTodo = (editId, newContent) => {
  setTodo(
    todos.map(todo =>
      todo.id === +editId
        ? { id: +editId, content: newContent, completed: todo.completed }
        : todo
    )
  );
};

const toggleTodoCompleted = id => {
  setTodo(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleAllTodoCompletedChange = () => {
  getNumOfCompleted() !== todos.length
    ? setTodo(todos.map(todo => ({ ...todo, completed: true })))
    : setTodo(todos.map(todo => ({ ...todo, completed: false })));
};

const removeTodo = id => {
  setTodo(todos.filter(todo => todo.id !== +id));
};

const filterRender = filteredTodo => {
  $todoList.innerHTML = filteredTodo
    .map(
      ({ id, content, completed }) => `
  <li data-id="${id}">
      <div class="view">
          <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
          <label>${content}</label>
          <button class="destroy"></button>
      </div>
      <input class="edit" value="${content}" />
  </li>`
    )
    .join('');
};

const filterTodoByCompleted = idName => {
  idName === 'all'
    ? setTodo(todos)
    : idName === 'active'
    ? filterRender([...todos].filter(todo => !todo.completed))
    : filterRender([...todos].filter(todo => todo.completed));
};

const clearTodoCompleted = () => {
  setTodo(todos.filter(todo => !todo.completed));
};

// 이벤트
window.addEventListener('DOMContentLoaded', fetchTodo);

$toggleAll.onchange = () => {
  toggleAllTodoCompletedChange();
};

$newTodo.onkeyup = e => {
  const content = e.target.value.trim();

  if (e.key === 'Enter' && content) {
    addTodo(content);

    e.target.value = '';
  }

  e.target.focus();
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  toggleTodoCompleted(e.target.parentNode.parentNode.dataset.id);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.parentNode.parentNode.dataset.id);
};

$todoList.ondblclick = e => {
  if (!e.target.parentNode.classList.contains('view')) return;

  const $parentNode = e.target.parentNode;
  const $edit = $parentNode.nextElementSibling;

  $parentNode.style.display = 'none';
  $parentNode.parentNode.classList.add('editing');

  $edit.onkeyup = e => {
    const content = e.target.value.trim();

    if (e.key === 'Enter') {
      if (!content) {
        alert('아무거나 입력하시오');
        return;
      }

      editTodo($parentNode.parentNode.dataset.id, content);
      e.target.value = content;
    }
  };
};

$filters.onclick = e => {
  if (!e.target.parentNode.parentNode.classList.contains('filters')) return;

  [...$filters.children].forEach(liElement =>
    liElement.firstElementChild.classList.remove('selected')
  );

  e.target.classList.add('selected');

  filterTodoByCompleted(e.target.id);
};

$clearCompleted.onclick = () => {
  clearTodoCompleted();
};
