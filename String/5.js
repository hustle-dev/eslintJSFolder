const count = (str, word) =>
  console.log(str.match(new RegExp(word, 'g')).length);

count('COMPUTERPROGRAMMING', 'R'); // => 3
