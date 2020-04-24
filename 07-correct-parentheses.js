/*
올바른 괄호 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12909
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(s) {
  var answer = true;

  let sum = 0;
  let i = 0;
  while (i < s.length) {
    s[i] === "(" ? sum++ : sum--;
    if (sum < 0) {
      break;
    }
    i++;
  }

  return sum === 0;
}
