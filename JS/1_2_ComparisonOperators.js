// # all comparison operators returns boolean values 
// there are lots of edge cases here about comparison with 0 null and undefined 

                        // false false 
console.log(2>3,1==2,3<=3 , 3>3 , 3<3 , 2!=3)




// in string  comparison js used lexicographic order 

console.log("b">"abcd") // here lexicographic order is considered and not length and all 
// string is compared charactor by charactor 

console.log(1>null)
console.log(1<undefined, 1>undefined,1==undefined) // returns false always we cant compare undefined 
// with any value

//rest is converted to numbers and then compared 

console.log(Boolean("0")) // boolean converts "0" it used other set to convert it to number


// === compares  the variables without type conversion so here 0===false returns false but 
// 0==false returns  true



console.log(null==undefined) // returns ture but not with other only this is true 
// their data type is also different keep in mind so null===undefined is false 

console.log(null>=0, null==0,null<=0) // this is true but null==0 is not true


