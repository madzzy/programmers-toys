/*
124 나라의 숫자 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12899
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(n) {
  var answer = "";
  const country124 = "412";
  let count = n;

  while (count > 0) {
    if (count % 3 === 0) {
      answer = country124[0] + answer;
      count = count / 3 - 1;
    } else if (count % 3 === 1) {
      answer = country124[1] + answer;
      count = Math.floor(count / 3);
    } else if (count % 3 === 2) {
      answer = country124[2] + answer;
      count = Math.floor(count / 3);
    }
  }

  return answer;
}
