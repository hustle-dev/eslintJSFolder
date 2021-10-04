const Todos = {
  state: [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ],

  render() {
    return this.state
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

console.log(Todos.render());

export default Todos;
