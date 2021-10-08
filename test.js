const solution = s => {
  const recommend = s
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .replace(/^.{16,}$/g, match => match.slice(0, 15))
    .replace(/\.$/g, '')
    .replace(
      /[\w]{1,2}/,
      match => match + match[match.length - 1].repeat(3 - match.length)
    );

  return recommend;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
