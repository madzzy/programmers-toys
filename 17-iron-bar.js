/*
쇠막대기 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42585
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(arrangement) {
  let answer = 0;
  const queue = [];
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      if (arrangement[i + 1] === ")") {
        //레이저인경우
        answer = answer + queue.length;
        i = i + 1;
      } else {
        answer = answer + 1;
        queue.push(1);
      }
    } else {
      queue.pop();
    }
  }
  return answer;
}
/////////////////////////////////////////////////////////////////////////////////

// 처음 작성한 로직 -> 테스트 케이스 1개 시간 초과
function solution(arrangement) {
  let answer = 0;
  const queue = [];
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      if (arrangement[i + 1] === ")") {
        //레이저인경우
        if (queue.length > 0) {
          queue.forEach((element) => {
            element.push(1);
          });
        }
        i = i + 1;
      } else {
        queue.push([]);
      }
    } else {
      answer += queue[queue.length - 1].length + 1;
      queue.pop();
    }
  }

  return answer;
}

/*
 / +1 +1 +1 / / -1 +1 / -1 / -1 -1 +1 / -1

[ , ,  ]
 
 +1//-1 -> 3개
 +1/-1  => 2개
 +1////-1 => 5개
+1 //// -1 => 5개
+1 / -1 => 2개
*/
