console.log("Arrays")

// we can create an array using two methods

let arr1 = new Array();
let arr2 =[];

arr1.push("1");

arr1.push("2");

arr1.push("3");

arr1.push("4");

arr1.push("5");

arr1.push("6");

arr1.shift(); // 1  // remove first element 

console.log(arr1.shift()); // 2 
console.log(arr1.pop()); // remove last element 

arr1.unshift("addatfirst"); // add element at first 

console.log(arr1); 


// arr1.push(..."name"); // behaves some different 
// console.log(arr1);

// internaly array is also an object it extends object class 

// we can change the array length also 
arr1.length =2
// it will truncate the array to first two elements only 

console.log([1,2,3]+"9")  // string concatination 

// here toString method of array class gets called 
console.log(arr1)
arr1.splice(1,0,"addme");
console.log(arr1)