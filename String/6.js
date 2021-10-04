const toggleCase = s =>
  console.log(
    s.replace(/./g, str =>
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    )
  );

toggleCase('StuDY'); // => 'sTUdy'
