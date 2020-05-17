/*
기능개발 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42586
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(progresses, speeds) {
  let answer = [1];
  const days = progresses.map((element, index) => {
    let value = (100 - element) / speeds[index];
    if (!Number.isInteger(value)) {
      value = Math.floor(value) + 1;
    }
    return value;
  });
  let standard = days[0];
  for (let i = 1; i < days.length; i++) {
    if (days[i] > standard) {
      standard = days[i];
      answer.push(1);
    } else {
      answer[answer.length - 1]++;
    }
  }
  return answer;
}
