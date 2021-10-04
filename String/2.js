// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

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
