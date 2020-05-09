/*
같은 숫자는 싫어 Lv1
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12906
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(arr) {
  let answer = arr.filter((element, index) => {
    return element !== arr[index - 1];
  });
  return answer;
}
