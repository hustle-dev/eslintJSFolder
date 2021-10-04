const solution = new_id => {
  const recommended = new_id
    .toLowerCase()
    .replace(/[^\w-_.]+/g, '')
    .replace(/\.{2,}/g, '.') // 두 개이상의 문자가 연결되는 경우
    .replace(/^\.|\.$/g, '') // 바깥의 ^는 start, $는 끝
    .replace(/^$/g, 'a')
    .replace(/...{16,}/g, '/...{, 15}/')
    .replace();

  return recommended;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
