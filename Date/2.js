const getDay = date => {
  const dayNames = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ];

  console.log(dayNames[new Date(date).getDay()]);
};

getDay('2021-07-24'); // => '토요일'
getDay('2021-07-25'); // => '일요일'
getDay('2021-07-26'); // => '월요일'
