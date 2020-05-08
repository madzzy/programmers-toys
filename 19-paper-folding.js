/*
종이접기 Lv3
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/62049
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(n) {
  let answer = [0];
  if (n === 1) {
    return answer;
  }

  let count = 2;
  while (count <= n) {
    const newArr = [];
    let flag = false;
    for (let i = 0; i < answer.length * 2 + 1; i++) {
      if (i % 2 === 1) {
        newArr.push(answer[Math.floor(i / 2)]);
      } else {
        if (flag) {
          newArr.push(1);
        } else {
          newArr.push(0);
        }
        flag = !flag;
      }
    }
    answer = newArr;
    count++;
  }
  return answer;
}
