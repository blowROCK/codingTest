// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let regex = new RegExp(`[^${skill}]`, "g");
  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => skill.startsWith(x)).length;
}