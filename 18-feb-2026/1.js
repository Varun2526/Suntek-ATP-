// comments
/*
*/
   // int x = 10  (assigning)
   // int y (declaration)
//let a;  let doent represents any any specfic data typr it stores the variable 
// const b ; (constant) can accept any kind of data
//for javascript we need node js or browser
// every browser has a java script engine 

//------------------------------------------------------------------------------------------------------------------------------------

//data
    //declaration
    //number
    //let a =10;
    //let b = 20;
    //let c = 30;
   // console.log("a is ",a,"and b is ",b," c is ",c)   // , is a concadination operator   //  a is 10     //printed into the console
   // console.log(`a is ${a} b is ${b} c is ${c}`) // using back tick operation ... this is called as "string litteral" 



//------------------------------------------------------------------------------------------------------------------------------------
    //string
   // let username = 'varun'
    //console.log("username is ",username)


//everthing is string in js no diff in ' ' or " "  but if u keep  anything it is consider as string
// we acn use with ; or without ; js doesnt need 

    //boolean
   // let status = true
    //array
    //let marks=[90,839,74]


//arrays can be in homogenous or heterogenous 
//homo means same .. and hetro means diff data types 
// it is poosible to use hetro but using dont help as it confuses what is the next element 



//-------------------------------------------------------------------------------------------------------------------------------------------------


 //object
 //purpose to group the properties 
 //key:properties 
   /* let person ={
        pid:100,  //properity 
        name:"ravi"
    }
        */



//---------------------------------------------------------------------------------------------------------------------------------------------------





//data type 
/*



//java script is a dynamically typed prog language 
//type of is a operator to check the datatype
//object and array are same 
let a;
console.log(typeof a)
a= 10
console.log(typeof a)
a ='hi'
console.log(typeof a)
a= true
console.log(typeof a)
a = [10,74,85] 
console.log(typeof a) //object
a={}
console.log(typeof a) // object 
*/

//--------------------------------------------------------------------------------------------------------------------------------------------



//let a =123 //number 
//let b = "123"    //string 

// the datatypes in js are dynamic but the value can be same but the type is different
//console.log(a===b) // false because === checks both value and type
//console.log(a==b) // true because == checks only value not type

//-------------------------------------------------------------------------------------------------------------------------------------------------------


//storage in js
//stack and heap 
//stack is used for primitive data types and heap is used for non primitive data types 
//primitive data types are number, string, boolean, null, undefined, symbol

//int  = 100
//System.obj = new FileSystem()


//non primitive data types are object and array

//stack is faster than heap because stack is used for primitive data types and heap is used for non primitive data types


//stack is used for storing the value of the variable 
// heap is used for storing the reference of the variable


//-----------------------------------------------------------------------------------------------------------------------------------------
//compiler in js 

//let a=10;
//let b=20;
//while compiling the progrm it checks the 1st line and checks the scope of the variable a and b and then it checks the 2nd line and 
// checks the scope of the variable a and b and then it checks the 3rd line and checks the scope of the variable a and b and 
// then it checks the 4th line and checks the scope of the variable a and b and 
// then it checks the 5th line and checks the scope of the variable a and b
//  and then it checks the 6th line and checks the scope of the variable a and b and 
// then it checks the 7th line and checks the scope of the variable a and b 
// and then it checks the 8th line and checks the scope of the variable a and b and then it checks the 9th line and 
// checks the scope of the variable a and b and then it checks the 10th line and checks the scope of the variable a and b


//console.log(b)
//let b=20
//error will come her beacuse it is trying to access the variable b before it is declared and initialized

//----------------------------------------------------------------------------------------------------------------------------------------------------



//var is a keyword in js which is used to declare a variable
//var is not used now it₹s a legacy way of declaring a variable and it has some issues like it is function scoped and it can be redeclared and it can be hoisted


//---------------------------------------------------------------------------------------------------------------------------------------------------------

//operators in js

/*
assignment operator =
arithmetic operator + - * / %
comparison operator == === != !== > < >= <=
logical operator && || !
ternary operator ? :             (condition ? exp1: exp2)

let a =100;
let b ="100";
console.log (a==b).       output will be true because == checks only value not type. it is called as equality operator (==)
console.log (a===b)       output will be false because === checks both value and type.  it is called as strict equality operator (===)
safest way to compare two values is to use === because it checks both value and type. 

*/


//-------------------------------------------------------------------------------------------------------------------------------------


/*  
    control statements in js
        if
        if else
        if else if else
    iterative statements
        for loop
        while loop
        do while loop
    switch case
*/


//let marks=[10,20,30,40,50]
//iterative
//for(let index=0;index<marks.length;/*(dynamic) */ index++){
//    console.log(marks[index])
//}

/*
ouptut 
varun@Varuns-MacBook-Air javascript-fundamentals % node 1.js
10
20
30
40
50
*/

//differnce between let and const is that let can be reassigned but const cannot be reassigned.

//-----------------------------------------------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------------------------------------------

//functions

/*
function can be declared in two ways
1. function declaration
2. function expression

function declaration is a way to declare a function using the function keyword and it is hoisted and it can be called before it is declared

function expression is a way to declare a function using the function keyword and it is not hoisted and it cannot be called before it is declared
*/
// to name the function we use lower camel case and the name of the function should be meaningful and should describe what the function does (lower camel case example: myFunction, sumOfMarks)
//to name the class we use upper camel case and the name of the class should be meaningful and should describe what the class does (upper camel case example: MyClass, MyFunction)

/*
//delcaration
function sum(a,b){
    //body of the function
    let sum = (a+b)
    return sum
}


//function calling 
let result = sum(10,20) //results stores the value 
console.log(result)


//function expression

we can store a function in a variable and we can call the function using the variable name it is called as function expression
the name of the function is optional in function expression and it is called as anonymous function expression

the advantages of the anonymous function in js is ther are 2 two types of programming 
object oriented programing and functional programing the js support both 

we use function exression*/


//arrow function expression(to simplify a function expression ) it is better to use only when there is one statement 
//let test1 = (a,b) => a+b//or let test1 = (a,b) => {return a+b}  both are same 


//let result = test1(74,64) 
//console.log(result)


