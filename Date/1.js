const formatDate = date =>
  console.log(
    `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
  );

formatDate(new Date('2021/07/24')); // => "2021-07-24"
formatDate(new Date('1900/1/4')); // => "1900-01-04"
