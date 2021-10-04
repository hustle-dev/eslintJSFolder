const formatDate = date =>
  console.log(
    `${date.getFullYear()}-${
      Math.floor(Number(date.getMonth() + 1) / 10) === 0
        ? '0' + Number(date.getMonth() + 1)
        : Number(date.getMonth() + 1)
    }-${
      Math.floor(Number(date.getDate()) / 10) === 0
        ? '0' + Number(date.getDate())
        : Number(date.getDate())
    }`
  );

formatDate(new Date('2021/07/24')); // => "2021-07-24"
formatDate(new Date('1900/1/4')); // => "1900-01-04"
