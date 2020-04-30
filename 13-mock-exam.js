/*
모의고사 Lv1
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/42840
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(answers) {
  var answer = [];
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];
  answers.forEach((element, index) => {
    if (element === person1[index % 5]) {
      scores[0]++;
    }
    if (element === person2[index % 8]) {
      scores[1]++;
    }
    if (element === person3[index % 10]) {
      scores[2]++;
    }
  });

  let max = 0;

  for (let i = 0; i < 3; i++) {
    if (scores[i] > max) {
      max = scores[i];
    }
  }
  // console.log(scores);
  for (let j = 0; j < 3; j++) {
    if (max === scores[j]) answer.push(j + 1);
  }

  return answer;
}
