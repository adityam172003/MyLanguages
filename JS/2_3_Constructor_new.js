

// declaring the constructore

// main purpose of the constructor is to use existing code to create the object 
// no need to use the literals to define the user object for each time 
const User = function(_name,age)
{
    console.log(new.target ) // it returns the function name if the function called by new keyword

    this.name= _name
    this.age = age
}

// here this is returned by the constructor function mean function name starts with capital
// letters 
let user= new User("Aditya",21);

console.log(user);

// there is a way to use ?. it is the optional chaning we can use here 

// like to avoid undefined.key or null.key

let obj = {
    user:"aditya",
    age:20
    // address :{dist:kolhapur,pin:416203} is undefined till now 

}

//console.log(obj.address.dist) // it will generate an erro because we are accessing the undefined.dist

// so we need to avoid it we use ?. operator

console.log(obj?.address?.dist) // it will return undefined here and no errror 

// for that purpose it is used here 
