let n = 5;
let arr = [];
let num = 5;
while (arr.length < n) {
  let sum = 0;
  let splitnumber = num.toString().split("");
  for (let i = 0; i < splitnumber.length; i++) {
    sum = sum + parseInt(splitnumber[i]);
  }
  if (Math.floor(sum % 5) === 0) {
    arr.push(num);
  }
  num++;
}
console.log(arr);
