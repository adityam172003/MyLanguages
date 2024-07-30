console.log("Data types in depth")  

// js has 7 primitives 

// string, number, bigint, boolean, symbol, null and undefined.



let str = "Aditya";
str.test  = 3; // here an property gets created and destroyed as soon as so we get undefind below 

console.log(str.toUpperCase(),str.test); // it returns undefind but does not gives the error 

// here new special object gets created 
// for accessing the useful method toUpperCace() and as soon as it uses the object
// gets destroyed leaving the primitive behind 

// Numbers 

/*
    we have two types of numbers 

    1 ] Number 
    2 ] BigInt 

*/

let num1 = 1000000000;
let num2 = 1_000_000_000;

let num3 = 1e9;


console.log(num1,num2,num3 , "we can declare the number in any way above");

let num4 = 1e-4;
let num5 = 1e-6;

console.log(num4,num5 , "-ve sign will place 0 s before the number ")

// representing the hex , binary and octal numbers

// for hex = 0x prifix 
// for binary 0b 
// for octal 0o as prifix 

let hex1 = 0xff;
let hex2 = 0xFF;

console.log(hex1,hex2);

let bin1 = 0b101010;
console.log(bin1);

let oct1 = 0o21;
console.log(oct1);


// toString(base) return the base representation of the number 

console.log(hex1.toString(10)); // 255 number system

console.log(hex2.toString(2)); // 11111111  binary representation 


console.log(0.1+0.2 ); //!=0.3 // it causes the precision loss

console.log((0.1+0.2).toFixed(1) == 0.3) // it will give the answer == true 


console.log((0.1+0.2) == 0.3) // it will print false as due to precision loss 

console.log(1/3); 
console.log(1/10)

let bin = 1/10;
console.log(bin) // no much difference is there 


console.log(9999999999999999) // 10000000000000000 self increment number 


// conversion to number 

console.log(+'12.0px') // it will return NaN

console.log(parseFloat('12.0px')) // it will extract numeric value only 


console.log(parseInt('a123')) // it will say NaN here as starting is of alphabet and not a number 


// Math library contains basic functions can be used 

console.log(typeof (Math.random()*100).toFixed(0) ); // toFixed returns the string representation 


// this is what about the number s 

// here number is stored in 64 bit format where 
// 52 -  bits are used to store the number 
// 11 - bits are used to locate decimal point 
// 1 - bit is used to indicate the sign 


// generate the random number between the a and b


const randomInteger = (a,b)=>{
    let num = a+ Math.random()*(b-a+1);
    return Math.floor(num);
}






