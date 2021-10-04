const diffDays = (day1, day2) =>
  console.log(Math.abs(day1 - day2) / 1000 / 60 / 60 / 24);

diffDays(new Date('2021/01/01'), new Date('2021/12/31')); // => 364
