/*
괄호 변환 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/60058
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(p) {
  var answer = "";

  function makeProperBracketsString(string) {
    if (string === "") return string;
    // u, v로 분리
    let count = 0;
    let index = 0;
    let flag = true;
    while (index < string.length) {
      if (string[index] === "(") count++;
      else count--;
      if (count < 0) flag = false;
      if (count === 0) break;
      index++;
    }
    const u = string.slice(0, index + 1);
    const v = string.slice(index + 1);

    // u가 올바른 괄호 문자열인가?
    if (flag) {
      answer += u;
      return makeProperBracketsString(v);
    } else {
      answer += "(";
      makeProperBracketsString(v);
      answer += ")";
      const removedU = u.slice(1, u.length - 1);
      for (let i = 0; i < removedU.length; i++) {
        if (removedU[i] === "(") answer += ")";
        else answer += "(";
      }
      return;
    }
  }

  makeProperBracketsString(p);

  return answer;
}
