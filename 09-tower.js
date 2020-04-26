/*
탑 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42588
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(heights) {
  var answer = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] > heights[i]) {
        answer.push(j + 1);
        break;
      }
    }
    if (answer.length === i) {
      answer.push(0);
    }
  }
  return answer;
}
