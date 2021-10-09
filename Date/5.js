const getLastDayOfMonth = (year, month) =>
  console.log(new Date(year, month + 1, 0).getDay());

// 2021년 1월 말일은 일요일
getLastDayOfMonth(2021, 0); // => 0

// 2021년 12월 말일은 금요일
getLastDayOfMonth(2021, 11); // => 5
