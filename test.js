const solution = (m, musicinfos) => {
  let answer;
  let time = 0;
  const melody = m.replace(/.#/g, match => match[0].toLowerCase());

  musicinfos.forEach(musicinfo => {
    let [startTime, finishTime, title, info] = musicinfo.split(',');

    const [h1, m1] = startTime.split(':');
    const [h2, m2] = finishTime.split(':');

    const repeatNum = (h2 - h1) * 60 + (m2 - m1);

    info = info.replace(/.#/g, match => match[0].toLowerCase());

    const musicSheet =
      info.repeat(Math.floor(repeatNum / info.length)) +
      info.substring(0, repeatNum % info.length);

    if (musicSheet.includes(melody)) {
      if (time < repeatNum) {
        time = repeatNum;
        answer = title;
      }
    }
  });

  return answer;
};

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
);
