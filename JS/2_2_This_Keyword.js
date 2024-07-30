console.log("This keyword")


// when the function is assigned to a key in object then it is called as a method 

let obj = {
    _name:"Aditya"
    ,
    age:21
    ,
    print: function(){
        //console.log(_name,age); // it says that _name is not defined age is not defined 

        console.log(this._name,this.age)
    }
    ,
    print2: ()=>{
        console.log(this._name,this.age) // this does not work in arrow function 
        // look into that matter it returns undefined 
    }
}


obj.print()