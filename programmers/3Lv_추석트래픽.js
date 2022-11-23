// https://school.programmers.co.kr/learn/courses/30/lessons/17676

// 시간을 나누고 시작과 끝. 그걸 sort한 flag 배열을 돌려받는다.
function getTimes(lines){ 
  const flags = [];
  const lineObj = lines.map(line => {
    const splitLine = line.split(' ');
    const times = splitLine[1].split(':');
    // times[2]*1을 안하면 times[2]는 string 값을 가지고 있다.
    // js개발자라면 type관련 개똥같은 상황을 자주 만나는데, 나는 방금 만났다.
    // 끝 시간은 +1을 해서 끝 시간을 포함하도록 한다.
    const end = (times[0] * 3600 + times[1] * 60 + times[2]*1) * 1000 + 1;
    const elapsed = splitLine[2].replace('s','')*1000; 
    flags.push(...[end - elapsed, end]);
    // 시작 시간은 +1을 해서 시작 시간을 포함하도록 한다.
    return { start: end - elapsed + 1, end }
  });
  return { lineObj, flags: flags.sort((a,b)=> a - b) };
}

function solution(lines) {
  const { lineObj, flags } = getTimes(lines);
  const answer = [];
  let count = 0;
  flags.map(flag => {
    count = 0;
    for(let idx = 0 ; idx < lineObj.length ; idx++){
      //제일 난관인 999를 더하는 부분. 시작과 끝에 +1씩 했으니 1001만큼 검사함. 시작인 0과 끝인 1001포함.
      if( flag + 999 >= lineObj[idx].start && flag <= lineObj[idx].end ){
        count++;
      }
    }
    answer.push(count);
  })
  return Math.max(...answer);
}