
// Looking towards the callback function and its applications

// what is the purpose of callback function and because of what it is possible to implement the 
// concept of callback function


// because the function as value we can use the callback function 

/*

// run this program on browser to get about callback function
function ask(question,yes,no){
    if(confirm(question))yes()
    else no()
    
}

function showCancel(){
    alert("You cancled the execution")
}

function showOk()
{
    alert("you agreed.")
}

ask("Do you agree it ?? ",showOk,showCancel)

// till here 
*/

// other way to use callback functions 
/*
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
*/

// THIS IS WHAT BIG DIFFERENCE BETWEEN THE FUNCTION EXPRESSION AND THE FUNCTION 
  /*
    A Function Expression is created when the execution reaches it and is usable only from that moment. 
Once the execution flow passes to the right side of the assignment let sum = function… – here we go,
the function is created and can be used (assigned, called, etc. ) from now on.

Function Expressions are created when the execution reaches them.
*/

//fun(); // Cannot access 'fun' before initialization
myfun()

const fun = function()
{
    console.log("runn ... .. . ");
}

function myfun()
{
    console.log("We can use it before declaration")
}



// FUNCTIONS HAS BLOCK SCOPE WE CAN NOT ACCESS THE FUNCTION OUTSIDE THE BLOCK

//welcome("outside block"); // here untill function gets created we cant call it as it has block scope we need to
//--------------------------
// execute it first and then we can use any where inside the block
if(10<20)
{
    welcome("Inside block")
    function welcome(message)
    {
        console.log("welcome ",message);
    }
  
}

//welcome("outside  block execution") // if the above block does not execute then this causes error 
// now as block gets execute we can call it 