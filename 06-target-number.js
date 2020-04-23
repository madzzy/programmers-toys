/*
타겟 넘버 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/43165
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(numbers, target) {
  var answer = 0;

  function recursion(count, sum) {
    if (count === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    recursion(count + 1, sum + numbers[count]);
    recursion(count + 1, sum - numbers[count]);
  }

  recursion(0, 0);

  return answer;
}
