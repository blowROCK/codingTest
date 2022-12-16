// https://leetcode.com/problems/implement-queue-using-stacks/description/


class MyQueue {
  constructor() {
    this.stack = [];
    this.temp = [];
  }
  push(n) {
    console.log("1stack: ", this.stack, "// temp :", this.temp);
    while (this.stack.length > 0) {
      // 메인 스택 데이터를 temp 스택으로 옮김.
      this.temp.push(this.stack.pop());
    }
    console.log("2stack: ", this.stack, "// temp :", this.temp);
    this.temp.push(n); // 비워진 임시에 n을 넣어두고
    console.log("3stack: ", this.stack, "// temp :", this.temp);
    while (this.temp.length > 0) {
      // 임시스택 데이터를
      this.stack.push(this.temp.pop());
    }
    console.log("4stack: ", this.stack, "// temp :", this.temp);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  empty() {
    return this.stack.length === 0;
  }
}