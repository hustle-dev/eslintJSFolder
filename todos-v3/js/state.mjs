import render from './view.mjs';

let todos = [];
let currentFilter = 'all';

const setTodo = newTodo => {
  todos = newTodo;
  render(todos, currentFilter);
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  render(todos, currentFilter);
};

export { todos, currentFilter, setTodo, setFilter };
