//Synchronous
//exceution of code line by line...
//the nature of this kind of programming is that the next task waits until the previous task is completed
 //when the tasks are dependent then we need to follow the synchronous procedure

//Asynchronous
//When the tasks are independent then we need ot ofllow the asynchronous procedure


console.log("first")
setTimeout(()=>{
    console.log("task completed")
},7000);
console.log("second")
console.log("third")
//here the set timeut funtion behaves asynchronoulsy and allows the other statements to exceute and after the given delay the control goes back and exceutes the statements
//In js theere is only one main thread and it doesnot support the programmer to create the diff threads unlike multithreading in java.


//Timer function
// setTimeout(()=>{},timeout);
//in setTimeout and setInterval the timeout is a parameter to be given in milliseconds

 setInterval(()=>{
    console.log("hi")
 },2000)
//setInterval is similar to setTimeout but setInterval can call the callback function repeatedly for provided time
//To stop the setInterval at a point we need to use clearInterval() method
