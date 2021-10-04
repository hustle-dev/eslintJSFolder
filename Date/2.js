const getLastDateOfMonth = (year, month) =>
  console.log(new Date(year, month + 1, 0).getDate());

// 2021년 1월의 마지막 날은 31일
getLastDateOfMonth(2021, 0); // => 31

// 2021년 2월의 마지막 날은 28일
getLastDateOfMonth(2021, 1); // => 28

console.log(new Date(2021, 1, 0).toLocaleString());
