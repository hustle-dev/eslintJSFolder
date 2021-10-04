const solution = s => {
  let recommended = s
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .substring(0, 15)
    .replace(/\.$/g, '');

  if (recommended.length <= 2) {
    const ch = recommended[recommended.length - 1];
    while (recommended.length <= 2) {
      recommended += ch;
    }
  }

  return recommended;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
