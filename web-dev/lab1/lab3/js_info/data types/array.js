//1
let arr = ['Jazz', 'Blues'];
arr.push('Rock-n-Roll');
arr[Math.ceil(arr.length()/2)] = 'Classics';
alert( styles.shift() );
styles.unshift("Rap", "Reggae");
//2
function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("num?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
  
  //3

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }