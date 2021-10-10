import * as State from './state.mjs';

const fetchTodo = () => {
  State.setTodo([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ]);
};

const generateTodoId = () =>
  Math.max(...State.todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  State.setTodo([
    { id: generateTodoId(), content, completed: false },
    ...State.todos
  ]);
};

const toggleTodoCompleted = id => {
  State.setTodo(
    State.todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleAllTodoCompleted = completed => {
  State.setTodo(State.todos.map(todo => ({ ...todo, completed })));
};

const updateTodo = (id, content) => {
  State.setTodo(
    State.todos.map(todo => (todo.id === +id ? { ...todo, content } : todo))
  );
};

const removeTodo = id => {
  State.setTodo(State.todos.filter(todo => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  State.setTodo(State.todos.filter(todo => !todo.completed));
};

export {
  fetchTodo,
  generateTodoId,
  addTodo,
  toggleTodoCompleted,
  toggleAllTodoCompleted,
  updateTodo,
  removeTodo,
  removeAllCompletedTodos
};
