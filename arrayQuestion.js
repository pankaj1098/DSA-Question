// There are many needy people who need some money are standing in a row.
// the person who stands at i th position needs i'i rs money. You have X rs and you want to fulfil the needs of
// people. when you donate the money to any people it is deducted from X.
// You have to find how many peoples can fulfil their needs by your money.
// Example 1:
// N = 14
// Output: 3
// Input: Explanation: The needs of people is 1, 4, 9, 16, ... and so on. WE can fulfil needs of first 3 person, after which our money becomes 0 and we cant fulfil anyone else. So answer is .

let x = 34;
let count = 0;
let i = 1;
while (x >= i * i) {
  x -= i * i;
  count++;
  i++;
}
console.log(count);
