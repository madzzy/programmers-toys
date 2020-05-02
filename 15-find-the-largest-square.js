/*
가장 큰 정사각형 찾기 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/12905
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/
// DP로 풀어야 한다는데
// 1,1부터 시작하는 것도 이해 안 되고
// 숫자가 막 더해지는 것도 이해 안됨ㅎ
function solution(board) {
  var answer = 1234;
  let length = board.length;
  const first = board[0].reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(first);
  return answer;
}
