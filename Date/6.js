const isEqualDate = (day1, day2) => console.log(+day1 === +day2);

isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')); // => true
isEqualDate(new Date('2021/07/24'), new Date('2022/07/2')); // => false
