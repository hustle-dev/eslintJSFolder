// 3번

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const sortBy = (todos, key) => {
  if (key === 'id') {
    todos.sort((obj1, obj2) => obj1[key] - obj2[key]);
  } else if (key === 'content') {
    todos.sort((obj1, obj2) => obj1[key].charCodeAt() - obj2[key].charCodeAt());
  } else {
    todos.sort((obj1, obj2) => Number(obj1[key] - Number(obj2[key])));
  }
  return todos;
};

todos = sortBy(todos, 'id');
console.log(todos);
/*
    [
      { id: 1, content: 'Javascript', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'HTML', completed: false }
    ]
    */
console.log(sortBy(todos, 'content'));
/*
    [
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'HTML', completed: false },
      { id: 1, content: 'Javascript', completed: false }
    ]
    */
console.log(sortBy(todos, 'completed'));
/*
    [
      { id: 3, content: 'HTML', completed: false },
      { id: 1, content: 'Javascript', completed: false },
      { id: 2, content: 'CSS', completed: true }
    ]
    */
