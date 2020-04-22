/*
카펫 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42842
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(brown, red) {
  var answer = [];
  const square = brown + red;
  let width = 3;
  while (width < square - 3) {
    if (square % width === 0) {
      const height = square / width;
      if (
        width >= height &&
        height >= 3 &&
        2 * (width + height) - 4 === brown
      ) {
        answer = [width, height];
        break;
      }
    }
    width++;
  }
  return answer;
}
