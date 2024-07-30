

myfun();

function myfun()
{
    console.log(" myfun is Called")
}


let outer = "outer variable"
//Values passed to a function as parameters are copied to its local variables
//The function has full access to the outer variable
function myfunParams(param1 ,param2,param3) // parameters 
{
    let myvar="Aditya" // local variable
    let outer ="changed" // preference is given to local variable insted of outer variable 
     console.log(outer); // global variable 
    console.log(param1,param2,param3);

}

console.log(myfunParams("1","2","3")); // arguments prints undefined 


 function defaultParameters(param ="default one")
{
    console.log(param);
}


// never keep difference between return and returned value because js consider semicolon after return ;


// we have other type of function declaration called function expression 


// mean 


let myfunExpression = function(){
    console.log("Function expression")
}

myfunExpression();
let y;
console.log(y= function(){
    console.log("Function expression")
})
console.log(typeof y ) // its type of function 





const checkVar = ()=>{
    var v = "name";
    if(10<20)
    {
        let inner = "Inner var";
        var global ="global var";
    }
    console.log(inner ,global); // it says that inner is not defined this is the difference between let and var 
}
checkVar();