// https://leetcode.com/problems/insert-delete-getrandom-o1/description/

class RandomizedSet {
  constructor() {
    this.nums = new Set();
  }
  insert(val) {
    if (this.nums.has(val)) {
      return false;
    }
    this.nums.add(val);
    return true;
  }
  remove(val) {
    if (this.nums.has(val)) {
      this.nums.delete(val);
      return true;
    }
    return false;
  }
  getRandom() {
    return [...this.nums][Math.floor(Math.random() * this.nums.size)];
  }
}