// find max diff betweeen 2 adjacent element of an array

let arr = [8, 6, 4, 0, 2, 1];
let diff = 0;
let ele = arr[0];
for (let i = 0; i < arr.length; i++) {
  let difference = Math.abs(ele - arr[i + 1]);
  if (diff < difference) {
    diff = difference;
  }
  ele = arr[i + 1];
}
console.log(diff);
