const $main = document.querySelector('.main');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $todoList = document.querySelector('.todo-list');

const render = (todos, currentFilter) => {
  const _todos = todos.filter(todo =>
    currentFilter === 'active'
      ? !todo.completed
      : currentFilter === 'completed'
      ? todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
    <li data-id="${id}">
      <div class="view">
        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
        <label>${content}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${content}" />
    </li>
    `
    )
    .join('');

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  const activeTodos = todos.filter(todo => !todo.completed);

  $todoCount.textContent =
    activeTodos.length < 2
      ? `${activeTodos.length} item left`
      : `${activeTodos.length} items left`;
};

export default render;
