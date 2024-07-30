console.log(".......String.......")



// there is no seperate type for single charactor 

//inernal format for string is always UTF-16 incoded 


let str1 = 'hiii'// we cant split in multiple lines

let str2 = `hii 
            we can split it in 
            multiple lines this is the difference in quotes and backticks use also 
            we can use variables here ${str1}`

console.log(str2)





// length of the string 

// in js length is the property and not the function in the string 

console.log(str2.length)

// get specific chars at position 

console.log(str2.at(2))

// we can pass the -ve positions in the at function which then returns the char from end 

console.log(str2.at(-1)) // == str2[str2.length -1];



// strings are immutable in js also 
// we cant change the string single charactor even 

str1 = 'pp'+str1;
console.log(str1)


// toUpperCase()   toLowerCase()

console.log('hii'.toUpperCase())
console.log("Hii".toLowerCase());

console.log(str2.indexOf(" ",10))// start to search from the index 10 

// if not present then returns -1 

