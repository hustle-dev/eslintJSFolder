const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 객체 디스트럭처링 할당을 사용하는 것이 가독성 측면에서 좋다!
const render = todos =>
  todos
    .map(
      ({ id, content, completed }) =>
        `<li id="${id}"><label><input type="checkbox"${
          content === true ? ' checked' : ''
        }>${completed}</label></li>`
    )
    .join('\n');

console.log(render(todos));
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
