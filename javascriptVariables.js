const prompt=require("prompt-sync")({sigint:true})

var myName = "Shoaib";
var yourName = prompt("What is your name >> ");
console.log("hello " + yourName);


/*
1: var = keyword (we are creating a new data container)
2: myName = Name of variable
3: "Shoaib" = value of the variable
4: myName can also be changed to a new value
Therefore, we do not need to use var again, we simply
can use myName = "John Doe" to change it
 */

//Javascript Variables Exercise
// Given the existing code below, can you write some code so that their values are switched around?
//
// var a = "3";
// var b = "8";
// So that the variable a holds the value "8".
//
// And the variable b holds the value "3".
//
// When the code is run, it should output:
//
// a is 8
//
// b is 3
// Do NOT change any of the existing code.
//
// You are NOT allowed to type any numbers.

// You should NOT redeclare the variables a and b
function test(){
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c;

    console.log("a is" + a);
    console.log("b is" + b);

}