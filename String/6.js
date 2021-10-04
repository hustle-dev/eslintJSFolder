const toggleCase = s => {
  const words = s.split('');
  console.log(
    words
      .map(word =>
        word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
      )
      .join('')
  );
};

toggleCase('StuDY'); // => 'sTUdy'
