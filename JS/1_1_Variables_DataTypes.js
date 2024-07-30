"use strict";
// dynamic data type 

// ues strict enable the modern things to use 

// remove let and run then remove use strict then run the difference will be observed 

let name_ = "Aditya"

console.log(name_);

// there are 8 basice data types present in the javascript 

name_ = 100;

// here name_ can store the string also number this is called dynamically typed 

// 1 ] number 

console.log(1/0) // returns the infinity 
console.log(typeof(NaN)) // it is a type of number 

// 2] BigInt

 // this is the data type stores the arbitarily big number end with n

 const bigInt = 1322343287489327498273849729848294n;
 console.log(bigInt+1n);


 //3] strings 

 const str= "my name is";

 // string can be surrounded by three types of quotes 

 let str1 = "type 1 double quote"; 
 let str2 = 'type 2 single quote';
 // above are simple quotes there is not any difference between them

// this backtic quotes gives extended functionality allows varlables to use between them 
 let str3 = `thpe 3 backtik ${name_}quote`;



 
 console.log(str)


 // 4 ] boolean 

 let result1 = true;
 let result2 = false;
    console.log(typeof(result1))

 // 5 ] null
 console.log(typeof(null)) // this type of object 


 //6 ] undefined 
 let a;
 console.log(typeof(a)) // undefined is its own type 
 console.log(a==0) // false
 console.log(null==undefined) // true  // there values are same but types are different 
 console.log(null=== undefined); // false 



 // type of 


 console.log(typeof 100)

 // here typeof is not a function it is a operator 





 // type conversion in js 


 console.log('100'+102) // implecitly type casted to string 

 console.log(typeof String(10000)) // explecityp type casted 

 /// numeric onversion automically converted to number 
 console.log("9"+2);
 console.log("9"-2,"9"*2,"9"/3 ) // works for all operation except + it will concatinate the string 

 // String(value) converts explicitly to string 
 // Number(value) converts explicitly to number 

 let p;
 console.log(Number(p) , Number(0)); // both are typecasted to different values 
 // you can convert string to integer by just +sign 
 console.log(typeof +"122")

 // boolean values 

 console.log(Boolean(null),Boolean(undefined),Boolean(0),Boolean(NaN)); // all are false // rest are true 

let x;
 console.log(x=10);


 // each and every operator returns the value
 // here = assignment operator  first assign the value to variable and then returns it 

 x+=10;
 x-=20;
 x*=2;
  // all above works here 

let v = 10;
console.log("-----")
console.log(++v); // returns 11 pre increment  returns new value 
v=10;
console.log(v++); // returns 10 post increment returns old value 

console.log("-------")
x=10;
console.log(1+ (++x)*2);
x=10;
console.log(1+(x++)*2)