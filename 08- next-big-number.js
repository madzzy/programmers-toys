/*
다음 큰 숫자 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12911
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(n) {
  function check(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "1") {
        count++;
      }
    }
    return count;
  }

  const optionN = check(n.toString(2));

  let answer = n;
  while (true) {
    answer++;
    if (check(answer.toString(2)) === optionN) {
      break;
    }
  }

  return answer;
}
