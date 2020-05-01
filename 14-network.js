/*
네트워크 Lv3
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/43162
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(n, computers) {
  var answer = 0;
  const obj = 0;
  for (let i = 0; i < computers.length; i++) {
    const lines = [];

    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1) {
        if (i !== j) {
          lines.push(j);
        }
      }
    }
    console.log(lines);
  }
  console.log(obj);
  return answer;
}
/*
function solution(n, computers) {
  var answer = 0;
  let count = 0;
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      count += computers[i][j];
    }
  }
  answer = n - (count - n) / 2;
  return answer;
}
*/
