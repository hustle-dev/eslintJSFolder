const solution = s => {
  let recommended = s
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .replace(/^.{16,}$/g, match => match.slice(0, 15))
    .replace(/\.$/g, '');

  const ch = recommended[recommended.length - 1];
  while (recommended.length <= 2) {
    recommended += ch;
  }

  return recommended;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
