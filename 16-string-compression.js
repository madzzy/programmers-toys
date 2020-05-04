/*
문자열 압축 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/60057
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(s) {
  var answer = s.length;
  const max = Math.floor(s.length / 2) + 1; // 자르려는 최대 문자열 단위
  let count = 1; // 자르는 단위 길이 max까지 ++
  while (count < max) {
    //문자열 압축하기
    let compressedString = "";
    for (let i = 0; i < s.length; i += count) {
      const nowString = s.slice(i, i + count);
      //비교할 문자열
      const check = compressedString.slice(
        compressedString.length - count,
        compressedString.length
      );

      if (nowString === check) {
        const front = compressedString.slice(
          0,
          compressedString.length - count
        );
        let num = 2;
        let oldCount = "";
        // front 끝에서 숫자가 몇자리인지 세야하는디
        for (let j = front.length - 1; j >= 0; j--) {
          if (isNaN(Number(front[j])) === true) {
            if (oldCount.length > 0) {
              num = Number(oldCount) + 1;
            }
            break;
          } else {
            oldCount = front[j] + oldCount;
            num = Number(oldCount) + 1; // 여기 이걸 안해줘서 개고생을 했다..ㅎㅎ...
          }
        }
        compressedString =
          front.slice(0, front.length - oldCount.length) + String(num) + check;
      } else {
        compressedString += nowString;
      }
    }

    if (compressedString.length < answer) {
      answer = compressedString.length;
    }

    count++;
  }
  return answer;
}
