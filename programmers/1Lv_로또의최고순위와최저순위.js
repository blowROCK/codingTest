// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const price = [6,6,5,4,3,2,1];
  
  const lowest = lottos.filter(num => win_nums.find(el => el === num)).length;
  const highest = lottos.filter(num=>{
    return win_nums.find(el => el === num || num === 0);
  }).length;
  
  return [price[highest], price[lowest]];
}
// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]) // 3, 5
// solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]) // 1, 6
// solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]); //1, 1