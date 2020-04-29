/*
자물쇠와 열쇠 Lv3
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/60059
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(key, lock) {
  var answer = false;

  const n = lock.length;
  const m = key.length;

  // 키를 lock에 맞춰 봄
  function makeKey(i, j, keyWay) {
    let flag = true;
    const board = JSON.parse(JSON.stringify(lock));
    for (let x = 0; x < m; x++) {
      for (let y = 0; y < m; y++) {
        if (
          0 <= m - n + i + x - 2 &&
          0 <= m - n + j + y - 2 &&
          m - n + i + x - 2 < n &&
          m - n + j + y - 2 < n
        ) {
          // if (
          //   board[m - n + i + x - 2][m - n + j + y - 2] > 0 &&
          //   keyWay[x][y] > 0
          // ) {
          //   flag = false;
          //   break;
          // } else {
          board[m - n + i + x - 2][m - n + j + y - 2] =
            board[m - n + i + x - 2][m - n + j + y - 2] + keyWay[x][y];
          //}
        }
      }
    }
    flag = board.every((element) => {
      return element.every((value) => value === 1);
    });
    //     if (flag) {
    //       //  console.log(board);

    //       if (flag) {
    //         //   console.log("2", board);
    //       }
    //     }
    //  console.log(board)

    return flag;
  }

  // key 오른쪽으로 90도 회전
  function rotateArr(array) {
    const newArr = [];
    for (let a = 0; a < array.length; a++) {
      const row = [];
      for (let b = 0; b < array.length; b++) {
        row.push(array[b][array.length - a - 1]);
      }
      newArr.push(row);
    }
    return newArr;
  }

  // 기준점을 가지고 lock을 순환
  for (let i = 0; i < n + m - 1; i++) {
    for (let j = 0; j < n + m - 1; j++) {
      // 방향을 4번 돌려서 키를 맞춰본다.
      for (let k = 0; k < 4; k++) {
        //console.log(key);
        if (makeKey(i, j, key)) {
          answer = true;
          break;
        }
        key = rotateArr(key);
      }
    }
  }

  return answer;
}
