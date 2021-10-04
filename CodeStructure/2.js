const Todos = (function () {
  const state = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  return {
    render() {
      return state
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

console.log(Todos.render());
