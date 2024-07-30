// if and ? operator 

let expression

if(expression )
{
    // code to be executed if expression is true
}
else if(expression)
{

}
else  if(expression)
{

}
else{
    // code to be executed if expression is wrong 
}


// the value of the expression is finally converted to boolean keep it in mind 
// we can have multiple ladders in between if and else 

// ternary operator  ? 

const result = (1==1)?"satisfied ":"unsatisfied";

console.log(result);


// ?? OPERATOR 

// THIS IS THE TYPE OF OPERATOR WHICH RETURNS THE NON null , undefined value 


let p;
let q =null;
let r ="My name id ";

let res =p??p; // undefined

let res2 = p??q // null while q??p returns undefined  
 
let res3 = p??r // return r 
console.log(res2);


// the basic implementation of ?? operator is 
res = p??r;
res = (p!==null && p!==undefined)?p:r;

// this is how ?? internally returns the values 

res = false ??4 // it returns false as false is also has value 0 which is not null or undefined 


console.log(res);

// this operator is used to get defined values and behave same as || operator but || operator 
// behaves same with 0 , null ,undefined ,NaN ,'' as false 


