const Todos = (function () {
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  return {
    add(newTodo) {
      todos = [newTodo, ...todos];
    },
    render() {
      return todos
        .map(
          ({ id, content, completed }) => `
      <li id="${id}">
        <label><input type="checkbox" ${
          completed ? 'checked' : ''
        }>${content}</label>
      </li>`
        )
        .join('');
    }
  };
})();

Todos.add({ id: 4, content: 'React', completed: false });

console.log(Todos.render());
