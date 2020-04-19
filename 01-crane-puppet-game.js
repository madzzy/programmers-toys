/*
크레인 인형뽑기 게임 Lv1
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/64061
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

// 다시 풀 때는 보드를 변형하지 않고 그 상태에서 바로 해 보는 게 나을까?

// 2020.4.18
function solution(board, moves) {
  var answer = 0;

  // board 뒤집기
  const newBoard = [];
  for (let i = 0; i < board.length; i++) {
    const row = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i]) {
        row.push(board[j][i]);
      }
    }
    newBoard.push(row);
  }

  // moves 순환
  const bucket = [];
  moves.map((element) => {
    const doll = newBoard[element - 1][0];
    if (doll === undefined) {
    } else {
      if (doll === bucket[bucket.length - 1]) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
      newBoard[element - 1].shift();
    }
  });

  return answer;
}
