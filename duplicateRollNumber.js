// A Teacher wants to revamp the roll numbers of students of his class. The previous roll numbers has a problem that some duplicate roll numbers are present. You have given an array of integers which represent roll numbers of students. You have to revamp such that no duplicate roll numbers should be there. You can increase the roll number by one at a time. you have to find minimum operation for revamping the
// array.
// HINT:- Sort the Array and find a pattern.
// Example 1:
// Input:
// N = 3
// arr[] = {1, 2, 2}
// Output: 1
// Explanation: If we increase arr[2] by 1 then the resulting array becomes {1, 2, 3} and has all unique values.
// Hence, the answer is 1 in this case.

let arr = [1, 1, 2, 3];
arr.sort((a, b) => a - b);
let count = 0;

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === arr[j + 1]) {
      arr[j + 1] = arr[j + 1] + 1;
      count++;
    }
  }
}
console.log(count);
