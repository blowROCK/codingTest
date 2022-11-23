// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  while(students.indexOf(sandwiches[0]) !== -1 && students.length > 0) {
    if(students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
    } else {
      students.push(students.shift())
    }
  }
  return sandwiches.length
};