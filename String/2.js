const solution = s => {
  const recommended = s
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .replace(/^.{16,}$/g, match => match.slice(0, 15))
    .replace(/\.$/g, '');

  return recommended.length > 2
    ? recommended
    : recommended +
        recommended
          .charAt(recommended.length - 1)
          .repeat(3 - recommended.length);
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
