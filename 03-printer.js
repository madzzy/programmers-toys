/*
프린터 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42587
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(priorities, location) {
  var answer = 0;
  let target = location;

  // 반복문 - 모든 문서가 출력될 때까지
  while (priorities.length > 0) {
    // 현재 0번 인덱스의 문서가 중요도가 가장 높은지 확인
    if (priorities.some((paper) => paper > priorities[0])) {
      // 1. 중요도가 더 높은 문서가 있을 경우 -> 맨 뒤로 보낸다.
      priorities.push(priorities[0]);
      priorities.shift();
      if (target === 0) {
        target = priorities.length - 1;
      } else {
        target--;
      }
    } else {
      // 2. 중요가 가장 높은 경우는 -> 출력합니다.
      priorities.shift();
      answer++;
      if (target === 0) {
        break;
      } else {
        target--;
      }
    }
  }

  return answer;
}
