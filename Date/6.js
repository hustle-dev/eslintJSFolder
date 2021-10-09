const diffDays = (day1, day2) =>
  console.log(Math.abs(day2 - day1) / (24 * 60 * 60 * 1000));

diffDays(new Date('2021/01/01'), new Date('2021/12/31')); // => 364
