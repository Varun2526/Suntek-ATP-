/**
 * JavaScript Promises
 * Promise states: pending, fulfilled, rejected
 * Producer/consumer pattern and promise chaining
 */

//Promise
//every promise completes in future but not immediately
//every promise starts with pending status onlyy..
//infuture the promise can be fullfilled or rejected
//Eg: call in 5 min
    //starting--->pending
        //result---->fulfilled or rejected
//2 parties are invloved in the promise:    
    //promise producer(create promise)  and promise consumer

//In js promise can be created by creating an object to the inbuilt class Promise
//promise producer
    // const promiseObj=new Promise((a,b)=>{
    //     fulfilled("promise fulfilled")
    //     rejected("promise rejected")
    // })

    // //promise consumer
    // promiseObj
    // .then(()=>{})
    // .catch(()=>{})


// //Eg: call you in 5 secs
// console.log('Friend is waiting for a call in 5 sec')
// let futureCondition=false//promise will be rejected.......if it is true then promise will be fulfilled
// //promise producer
// const promiseObj=new Promise((fulfilled,rejected)=>{
//     setTimeout(()=>{
//         if(futureCondition===true){
//             fulfilled("Hello frnd how are you?..")
//         }
//         else{
//             rejected("Busy")
//         }
//     },5000);
// })
// // console.log(promiseObj)
// //promise consumer
// promiseObj
// .then((message)=>console.log("message in then :",message))
// .catch((errorMessage)=>console.log("Error is:",errorMessage))




//I'll send 10000 tomorrow
// console.log("Money should be sent tomorrow")
// let future=true;
// const prom=new Promise((a,b)=>{
//     setTimeout(()=>{
//         if(future===true)
//             a("Money sent successfully")
//         else
//             b("Money not available...will send you when available")
//     },10000)
// })

// prom
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error))


//Examples of promises
    //make API request
    //fetch() is udes to make the api request
    fetch('https://jsonplaceholder.typicode.com/posts')//fetch returns a promise then we need to use then, catch to know whether the promise is fulfilled or rejected
    .then(res=>res.json())//json() returns a promise and it is used to convert the response to the json format
    .then(postsData=>console.log(postsData))
    .catch(err=>console.log(err))
    //Hash a password
    //creating tokens
    //Database/HTTP lobraries
    //File and stream APIs

//     //The interaction btw the applications must be done in the technology neutral data formats-----these are such as JSON,XML
//     //json stands for javascript object notation

//     let obj={
//         username:'ravi',
//         email:"ravi@mail.com"w
//     }
// //JS and JSON representation both are similar with a mild changes hence its called as JS object notation
//     //JSON representation
//     let obj1={
//         "username":"ravi",
//         "email":"ravi@mail.com"
//     }