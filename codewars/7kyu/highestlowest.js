function highAndLow(numbers){
  // ...
  let arr = numbers.split(" ").map(Number);
  
  let max = arr[0];
  let min = arr[0];
  
  for(let i = 0; i < arr.length; i++) {
    let initialNum = arr[i]
    if(initialNum > max) {max = initialNum}
    if(initialNum < min) {min = initialNum}
  }
  return `${max} ${min}`;
}