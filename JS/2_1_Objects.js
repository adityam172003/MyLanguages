
// objects are more complex data structure used to store more complex data 


// an empty object can be created by two methods 

let obj1 = new Object();

let obj2 ={}; // this declaration is called object literal 

obj2.name = "Aditya";
obj2.age  = 21;
obj2.rank = 24;


console.log(obj2);

// as this is the object we can say that we can add any 
// key and value in it 

// for multi valued we use []

obj2["space between key"]="we need to use square backets to acces it";


console.log(obj2);


let key = "name";
console.log(obj2[key]) // we can use it 

console.log(obj2.key)  // we cant use it directly here 

let obj3 = {
    name:"aditya_1"
    ,
    age:20
}

console.log(obj3)



// we can use reserved key words also as a key 

let obj4 = {
    for:10,
    let :30
}

console.log(obj4)


// if the property dose not exists in the object then it returns undefined 

if(obj4.notpresent===undefined)
{
    console.log("Not present in obj4")
}


// there is a special operator in we can use 

if("for" in obj4)
{
    console.log(obj4.for)
}


for( i in obj2)
{
    console.log(obj2[i])
}

let copyObj = obj1;

copyObj.name ="chaged in copyObj";

console.log(obj1) // it can be conclude that objects are copied by reference and not by value 
// so changed in one can reflet in other also 

let a ={};
let b={};
console.log("Comparing the a and b " , a==b);

const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
console.log(user.name) // we can conclude that we are not changing the value of variable user its address is constant
// juse we are changing the values present in that address and we can change it 

  const obj5 = {
    new:"orignal key"
  }

  Object.assign(obj5,obj1,obj2);

  console.log(Object.assign(obj5,obj1,obj2))


  // here is the catch of assign and cloning the object 


let user1 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };


  let clon = Object.assign({},user1);
  console.log(clon.sizes === user1.sizes)//both are same here so you can say that user and clon shares the memory of size object 
  // and no copy is generated for the size object present in it 


  user1.sizes.width = 60;    // change a property from one place
console.log(clon.sizes.width);

// to avoid it we use structured cloning 

// it does deep copying 
clon = structuredClone(user1)
console.log(clon.sizes === user1.sizes); // returns false 


// the basic garbage collection algorithm is called 'mark-and-sweep'


