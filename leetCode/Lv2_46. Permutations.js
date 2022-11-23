// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  const output = [];
  const recursion = (permutation, set) => {
    if (set.size === 0) {
      output.push(permutation);
      return;
    }
    for (let val of set) {
      const setCopy = new Set(set);
      setCopy.delete(val);
      recursion([...permutation, val], setCopy);
    }
  };
  recursion([], new Set(nums));
  return output;
};