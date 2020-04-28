/*
튜플 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/64065
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(s) {
  const answer = [];
  // 양 끝의 {}를 제거 + },를 기준으로 split
  const tupleValues = s.slice(1, s.length - 1).split("},");

  // 정렬
  tupleValues.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });

  // 튜플 만들기
  for (let i = 0; i < tupleValues.length; i++) {
    tupleValues[i] = tupleValues[i].replace("{", "");
    tupleValues[i] = tupleValues[i].replace("}", "");
    const value = tupleValues[i].split(",");
    for (let j = 0; j < value.length; j++) {
      if (answer.indexOf(Number(value[j])) === -1) {
        answer.push(Number(value[j]));
        break;
      }
    }
  }
  return answer;
}
