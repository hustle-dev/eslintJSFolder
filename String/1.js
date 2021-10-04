// 문자열 s가 주어지면 영문자와 숫자만 고려하고 대소문자를 무시하여 회문인지 확인한다.

const isPalindrome = s => {
  const temp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(temp === temp.split('').reverse().join(''));
};

isPalindrome('A man, a plan, a canal: Panama'); // => true
isPalindrome('race a car'); // => false
