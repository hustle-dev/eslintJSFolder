const getFirstDayOfMonth = (year, month) => {
  console.log(new Date(year, month).getDay());
};

// 2021년 1월 1일은 금요일
getFirstDayOfMonth(2021, 0); // => 5

// 2021년 12월 1일은 수요일
getFirstDayOfMonth(2021, 11); // => 3
