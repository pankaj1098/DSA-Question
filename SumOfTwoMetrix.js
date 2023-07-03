let arr1 = [
  [1, 2, 5],
  [3, 5, 5],
];

let arr2 = [
  [1, 5, 7],
  [2, 1, 3],
];

let output = [];

for (let i = 0; i < arr1.length; i++) {
  let row = [];
  for (let j = 0; j < arr1[i].length; j++) {
    row.push(arr1[i][j] + arr2[i][j]);
  }
  output.push(row);
}
console.log(output);
