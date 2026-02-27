/**
 * Arrays and Objects Fundamentals
 * Comprehensive lesson on array operations and object manipulation
 * Covers callbacks, destructuring, and ES6 concepts
 */

// - basic operations of array
//read elements 
// itterate array
// insert elements
// delete elements
//update elements

//--------------------------------------------------------------------------------------------------------------
// java srcipt is also called as EcmaSprict language
// js first released in 1995
//the major update was in 2015 and it is called as ES6 or ECMAScript 2015



//array is a ordered collection of items
//objet is a colle collection of properties and its unordered

//any operation which are done in runtime is called as dynamic operation and any operation which are done in compile time is called as static operation

//--------------------------------------------------------------------------------------------------------------


// - basic operation on object 

// read properties
// insert properties
// delete properties
// update properties

//--------------------------------------------------------------------------------------------------------------
// let person ={
//     name : "varun",
//     age:25,

// }
// //adding new property to the object
//     person.city ='hyd'
// //update a property 
//     person.name= "bhanu" 
// //delete a property 
//     delete person.age  
  
// console.log(person)
//--------------------------------------------------------------------------------------------------------------

//advance es6 features 
//callback function is a function which is passed as an argument to another function 
// and it is executed after the completion of the main function







//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

/* advance array operations 
the method call the call back function n number times and then the result of the callback can be n times but the varible calls the method only one time


differnce between function and method:
function is is block of code which is used to perform a specific task and it can be called multiple times in the program 
 method is a function which is associated with an object and it is called using the object name and it can also be called multiple times in the program

*/


// let testdata = [90,45,-13,75,60,81]

// //1. filter method. is only used for selection and not for modification and it also ignores if we do it 
//   //  a. get elemts grater than 30 
//     let result = []

//     // without filter method 
//             for (let element of testdata){
//                 if (element>30)
//                 result.push(element)
//             }
//     console.log(result)      

//     // with filter method
//         const r1=  testdata.filter(function(element){
//                 return element>30
//             })
//     // using array function 
//         const r2 =   testdata.filter((element)=> element>30)   
          
//           console.log(r1)
//           console.log(r2)
//     // get elemnt between 40 and 80 
//             let r3 = testdata.filter((element) => element >=40 && element <=80)
//             console.log(r3)
// //---------------------------------------------------------------------------------------------------------------------------
// //2. map method is used to modify the data 
//             // add 10 for each element 
//         const r4 = testdata.map(element => element+10)
//             console.log(r4)
//         // if we used slection to the map method it gives boolean values of array  eg below 
//         const r5 = testdata.map((element)=> element>10)
//             console.log(r5)
//             // [ true, true, false, true, true, true ]
//         // add 10 for the element <50 and subtract 20 from elemet >50

//        const r6 = testdata.map((element)=> {
//             if (element < 50)
//               return  element = element+10
//             if (element >50)
//               return  element = element - 20
//         })
//             console.log(r6)
// //---------------------------------------------------------------------------------------------------------------------------
// //3.reduce method 
//     //find the sum of test element 
//     const sum = testdata.reduce((accumulator,element)=>accumulator+element)
//     //                              90          45              135
//     //                              135         -13             122
//     //                              122         75              197
//     //                              197         60              257
//     //                              257         81              338
//     //   (returns)                  338.      undefined         338            
//     console.log(sum)


//     //find small element  using reduce method
//     const small = testdata.reduce((accumulator,element)=>{
//         if(accumulator < element){
//             return accumulator
//         }
//         else    return element
            
//     })
//     let small1 = testdata.reduce((accumulator,element)=>accumulator<element ? accumulator:element)
//     console.log(small1)
//     console.log(small)
//     //find the big element using reduce method
//     const big = testdata.reduce((accumulator,element) =>{
//         if (accumulator > element)
//             return accumulator
//         else
//             return element
//     })
//     let big1 = testdata.reduce((accumulator,element)=>accumulator>element? accumulator:element)
//     console.log(big)
//     console.log(big1)
// //---------------------------------------------------------------------------------------------------------------------------
// // 4.find element
// let ele = testdata.find(element => element=== 25)
// console.log(ele)
// //. undefined
// let ele1 = testdata.find(element => element=== 90)
// console.log(ele1)
// //---------------------------------------------------------------------------------------------------------------------------
// // 5.find index
// let ele2 = testdata.findIndex(element => element=== 90)
// console.log(ele2)


// //---------------------------------------------------------------------------------------------------------------------------
// // 6.sort

// let data = [9,10,8,4]
// let newarray = data.sort()
// console.log(`new array is ${newarray}`)

// // the output is 10,4,8,9 because it converts into the string and then sort it so it is sorted in the lexicographical order 
// // so to sort it in the numerical order we have to pass a call back function to the sort method

// let newarray1 = data.sort((a,b)=>a-b)
// console.log(newarray1)

// let newarray2 = data.sort((a,b)=>b-a)
// console.log(newarray2)

// console.log(data)
// //[ 10, 9, 8, 4 ]
// //it modifies the original array in the sort method 

// // using tosorted 
// let data2 =[44,131,75,74]
// let newarray3 = data2.toSorted((a,b)=>a-b)
// console.log(newarray3)
// console.log(`the original array is ${data2}`)
// //---------------------------------------------------------------------------------------------------------------------------
// // 7.reverse or toReverse

// let data3 = [1,2,64,24]
// let newarray4 = data3.reverse()
// console.log(newarray4)
// console.log(`the original array is ${data3}`)
// //[ 24, 64, 2, 1 ]
// // it modifies the original array in the reverse method

// let data4 = [1,23,65,24]
// let newarray5 = data4.toReversed()
// console.log(newarray5)
// console.log(`the original array is ${data4}`)
// //[ 24, 65, 23, 1 ]

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------




// //array of objects

// const student = [
//     {id:1,name:"ravi",marks:78},
//     {id:2,name:"bhanu",marks:780},
//     {id:3,name:"sneha",marks:77},
//     {id:4,name:"kiran",marks:80},
//     {id:5,name:"anitha",marks:90}
// ]

// console.log(student)
// //1.reduce

// //find sum of marks of all students reduce method


// let sumofmarks = student.reduce((acc,stdobj) => acc + stdobj.marks,0)
// //                                {}. {}        78           78
// //.                               78. {}         78 + 780 = 858
// console.log(sumofmarks)
// //--------------------------------------------------------------------------------------------------------------

// //map
// let data = student.map((stdobj) => stdobj.name)
// console.log(data)


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------




//ERROR HANDLING

//what is a error

//creating new errors
// const err = new Error("this is a new error ")
// console.log(err.name)
// console.log(err.message)
// console.log(err.stack)

// //ERROR HANDING     
// console.log("first")
// try {
// console.log(a)}
// catch (err){
//     console.log(err.message)
// }
// console.log("second")
// console.log("third")

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//-modules
