/*
스킬 트리 Lv2
문제 확인: https://programmers.co.kr/learn/courses/30/lessons/49993
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(skill, skill_trees) {
  let impossible = 0;

  // skill_trees 순환
  skill_trees.forEach((element) => {
    const checkArr = [];
    const stringArr = element.split("");
    let index = 0;
    // skill_trees 각 string 순환
    while (index < stringArr.length) {
      // 선행 스킬 순서의 인덱스를 찾아서 checkArr에 담음
      if (skill.indexOf(stringArr[index]) !== -1) {
        checkArr.push(skill.indexOf(stringArr[index]));
        // 선행 스킬 순서에서의 인덱스 === checkArr에서의 인덱스면 규칙 통과
        if (
          checkArr.indexOf(skill.indexOf(stringArr[index])) !==
          skill.indexOf(stringArr[index])
        ) {
          impossible++;
          break;
        }
      }
      index++;
    }
  });
  return skill_trees.length - impossible;
}
