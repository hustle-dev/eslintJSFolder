// 3번

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// ...todos를 이렇게 만들면 바뀐지 알수가 있게된다. (=== 으로 비교할 수 있기 때문에)
// react 함수 만들때 다 순수함수로 만드는 것이 좋다!
// 비교를 통해서 하면 통일성있게 다 비교할 수 있다.
const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0
  );

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
