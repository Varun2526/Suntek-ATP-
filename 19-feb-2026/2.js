/// FUNCTION ARE FIRST CLASS OBJECTS 
          //BECAUSE
/*deep dive in functions 
    store in a variable = function expression
    can return another function = higher order function
    can revice a function as args = callback function


    let test= function(){
return function(){}
}
console.log(test())

output    varun@Varuns-MacBook-Air 19-feb-2026 % node 2.js
          [Function (anonymous)]  

in js function can return another function 
name less function is know as anynomus function 


function test(){
        return 100
}
console.log(test()) //100.   console log statements are used to know the value and this is not shown in the browser but in the terminal.
let result=test()  //100    

output    varun@Varuns-MacBook-Air 19-feb-2026 % node 2.js
          100




*/          
/*

// type one 
//function without resuableity of createing level of game 
let createGame1 = function(level,namedPlayer){
console.log(`hello ${namedPlayer} you are at level ${level}`)
}


//type two 
//resuable 
let createGame=function(namedPlayer){
    return function (level){
    console.log(`hello ${namedPlayer} you are at level ${level}`)
}
}
let createlevel=createGame("varun")
createlevel(1)
createlevel(2)

//type two is better because in the type one every time we have to create a new game everytime 
*/
/*
let test = function(a){
    console.log(a())
}
test function(){
    console .log('hello')
}


                                        //wrong
test (a)
test (324)
test ([72,'7r',62])
test (function(){})
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*.      payment program 
let makePayment = function(amount,paymentType){
    console.log(`payment of the ${amount}`)
    paymentType()
}
let upipayment= function(){
    console.log(`upi payment is done`)
}
let cardPayment = function(){
    console.log(`card payment is  done`)
}
makePayment(200,upipayment)

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //                   closure 
/*

let sum = function(x){
    return function(y){
        return x+y
    }
}
let x = sum(10)
console.log(x(20))     

*/

//x is not undefine but it prints beacuse of closure 
////closure   -> the scope of x stpres in. heap till the function is ended

/// every java script function has closure by default becoz of this colsure property the varaiables of outside scope will be maintained tempeerarryly in the heap even the outside function excution is completed




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//collection

// -array
// - object
// - array of objects 

/*.  ARRAY 
// */
// let marks = [84,83,65,42]
// let names =['ravi','bhanu','varun']
// console.log(marks[10])      //undefined not array out of bound exception 
// // console.log(marks)          /// prints the array 
// // //itterative
// for(let x =0;x >1;x--) {}// this loop excutes for infinity times because the condition is always true

// so thats why we have to use for of loop for array in java
//sysntax of for of loop
// for(let variable of array){
//     //code to be executed
// // }
// for(let x of marks){
//     console.log(x)
// }

// for of loop is used for index level access of array and for in loop is used for key level access of object

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //OBJECT

// let student = {         //student is refernce of the object and not the object itself
//     sno : 100,
//     name : 'varun',
//     age : 20,
//     course : "b tech"
// }

// // console.log(student)   //prints the whole object
// // console.log(student.name)  //prints the name of the student using dot notation
// // console.log(student['age'])  //prints the age of the student using bracket notation


// // the above approch is log if the key increases we have to write muiltiple keys so iterative approch is used for this

// //iterative an object (for in loop)
// //there is no order in the object because it is a collection of key value pairs so we can not access the values using index but we can access the values using keys

// for(let v in student){
//     // console.log(v) //prints all the key in the object 
//     // console.log(student.v) //undefined because v is not a key in the object
//     console.log(`${v} contains ${student[v]}`) //prints the value of the key in the object.  this prints sno is 100
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //array of objects
// let emp =[
//     {eno : 100, name : 'varun'},
//     {eno : 101, name : 'ravi'},
//     {eno : 102, name : 'bhanu'}
// ];

// //iterative the emp array and print eno and name of each emp
//     for( let a of emp){
//         console.log(`${a.eno}  `)
//     }
// //eno is 1 and name is cccc

//-----------------------------------------------

// let student = {
//     rollNo: 1,
//     firstName: 'ravi',
//     lastName :'kiran',
//     marks :[90,74,74],
//     address: {
//       city : 'Hyderabad' ,
//       pincode: 500098,
//     },
//     getFullName : function(){
//             return this.firstName+this.lastName             // this helps to reach the key within the object otherwise it will search for the key in the global scope and it will be undefined because there is no key with the name firstName and lastName in the global scope
//     },             // these are called member functions 
//     avgMarks : function (){
//     let sum = 0 
//     for (let i =0; i<this.marks.length;i++){
//         sum = sum +this.marks[i]
//     }
//     return (sum/this.marks.length).toFixed(2)           // to fix the number of decimicls we use .toFixed(value)  inbuild method

// }
// }
// console.log(student.avgMarks())

///////////////////////////////////////////////////////////////////////////////////////////////////

//basic operations on object
//1.read elements
//2.iterative array
//3.inster new element

let testArray =[10,20,30]
// Dynamic insertion 
        testArray.push(40)            //predefined method push
        console.log(testArray)
    
        testArray.unshift(1)        //unshift is a prefined method which is used to insert an element in the beggining to the array dynmmically 
        console.log(testArray)

        testArray.splice(2,0,123)              //splice is used for index based inseration,deletion and updation
        console.log(testArray)
  
// Dynamic Deletion
//pasing arguments for deletion more that one element is not possible .almost one eleement 
    //start
        let removedelement=  testArray.shift()                   //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
        console.log(testArray)
        console.log(removedelement)
     //end   
        testArray.pop()                                         //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
        console.log(testArray)
     //in between (index based) 
        let removedElement = testArray.splice(2,1)                                     //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. 
        //                                                          The first parameter (2) specifies the index of the first element to remove, and the second parameter (1) specifies the number of elements to remove.
        console.log(removedElement)
        console.log(testArray)
     
 // Dynamic Updation
       testArray.splice(2,1,1234)           //index based updation
       console.log(testArray)       