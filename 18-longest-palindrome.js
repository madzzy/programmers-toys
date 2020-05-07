/*
가장 긴 펠린드롬 Lv3
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12904
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(s) {
  let answer = 0;
  let max = s.length;
  // 가장 긴 경우부터 차례로 줄여가면서 펠리드롬이 되면 반복을 멈춘다.
  while (max > 1) {
    const half = Math.floor(max / 2);
    if (max % 2) {
      // 홀수
      for (let i = 0; i <= s.length - max; i++) {
        if (
          s.slice(i, i + half) ===
          s
            .slice(i + half + 1, i + max)
            .split("")
            .reverse()
            .join("")
        ) {
          return max;
        }
      }
    } else {
      // 짝수
      for (let i = 0; i <= s.length - max; i++) {
        if (
          s.slice(i, i + half) ===
          s
            .slice(i + half, i + max)
            .split("")
            .reverse()
            .join("")
        ) {
          return max;
        }
      }
    }
    max--;
  }

  return answer;
}
