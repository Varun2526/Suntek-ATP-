//Morning
//classes and objects
//class is the logical existence which deosnot occupy any memory..//Class never occupies the space in the memory the objects occupies the space 
//Object is the physical instanceof the class
//In js we can create the onject without a class...
//possible contents of the class are: constructors,variables,methods,static variavles,static methods,static blocks,getters,setters.
//data taken in the class is the instance data
//when an object is created for the class it holds the instance dvariables...methods are not the part of the object..

//the data which need not to be a part of the object is called static data
//the methods in the class are called on the object.

//======>
    //in js we can crearte the object without classes
    //eg:
    const test={
        a:10,
        getData:function(){

        }
    }



// the main purpose of creating a class because it helps to create multiple objects in the same category..
//while declaring the variables in the class let/const keywords must not be used
//the name of the constructor is not the class name it must be the keyword constructor...
//to make a variable to be private for the class there are no keywords in js like in java, we only use a symbol'#'
//create 20 student objects
class Student{
    //properties
    #sno;
    name;
    email;
    //comnstructors
    constructor(sno,name,email){
        //initialize obj
        this.name=name
        this.#sno=sno
        this.email=email
    }
    //methods
    //the methods donot have any keywords..directly the name of the method can be written
    getStudentData(){
        return this.sno,this.name,this.email

    }
}
//creating objects for the class
// calling the class means calling the constructors....The classes are not callable
let std1=new Student(1,'ramesh','abc@gmail.com')
let std2=new Student(2,'raju','pqr@gmail.com')
console.log(std1)
console.log(std2)


class Employee{
    //private members
    #empno
    #name
    //static variables
    static test
    //constructor
    constructor(empno,name){
        this .#empno=empno
        this.#name=name
    }
    //instance method
    getData(){
        console.log(`eno is${this.#empno} and name is ${this.#name}`)
    }
    //static method
    static testMethod(){
        return this.test
    }
}
const emp=new Employee(100,'ravi')
console.log(emp.getData())
console.log(Student.testMethod)

///re usability can be obtained in 2 ways: inheritance, copositions(hassy relationship)
//inheritance
// class Person{}
// class Student extends Person{}
// //composition
// class Engine(){}
// class Car{
//     Engine e;//refernce for the clas engine
// }




//Optional chaining(?) and Nullish coalescing(??)
const person={
    pid:100,
    name:'ravi'
}
console.log(person.pid)//100
console.log(person.name)//ravi
console.log(person.marks)//undefined
console.log(person.marks ?.length)//undefined.length   TypeError: properties of undefined cannot be read
//optional chaining is used to check whether the property is availaiable in the object or not and then continue to move further..this can be done using the ? after the property
console.log(person.address?.city.length)
//to print some message instead of undefine  if the property is not available we use nullish coalescing..this can be used using the ?? atlast
console.log(person.marks ?.length??"Marks not available")


//spread operator(create  shallow copies of arrays and objects)
    //create copy
    //add elements/properties while copying
    //merge
    let x=100;
    //create copy
    let y=x
    //while creating the copy for the primitives using the assignment operator 2 variables will be stored in 2 diff locations.
    //while creating a copy of the object/array using the assignment operator it doesnot create the copy of the object in the memory, it creates other reference for the same object/array.
    //In case of objects and arrays = creates copy of reference and {...} creates copy of object/array
    let obj={a:100}
    let copyObj1=obj
    //make change to obj
    obj.a=123
    console.log(obj)
    console.log(copyObj1)
    //To create the copy of the object,add elements, merge objects the spread operator{...} is used
    let originalObj={a:10,b:20}
    let copyObj={...originalObj}
        //change originaObj
        originalObj.a=123
        console.log(originalObj)//
        console.log(copyObj)

    let originalArray=[1,2,3]
    let copyArray={...originalArray}
    originalArray.push(123)
    console.log(originalArray)
    console.log(copyArray)
    //spread operator creates copy of only top-level properties....but it fails to create a copy of the nested objects
    //using spread operator we can create only shallow copy of the objects but not the deep copy
    //to create a deep copy of the object with the nested objects we need to use the structured clone
    //deep copy creation
    let person1={
        name:"ravi",
        address:{
            city:"Hyderabad",
            pin:1234
        }
    }
    //create deep copy
    let copyPerson=structuredClone(person1)
        //using shallow copy creates only copy of top-level objects
    // let copyPerson={...person1}
     person1.address.city="Chennai"
     console.log(person1)
     console.log(copyPerson)

     //Add elements/properties while copying
     let arr=[1,2,3]
     let cpar=[...arr,10]
     console.log(arr)
     console.log(cpar)

     let o={a:10}
     let copyO={...o,b:20}
     console.log(o)
     console.log(copyO)
    //merge
    let ar1=[1,3,45]
    let ar2=[12,35]
    let merg=[...ar1,...ar2]
    console.log(merg)