//Destructuring(unpacking)
//for arrays and objects the destructuring of data has the same importance as the structuring(packing) has
let arr=[10,20,30]
let [a,b,c]=arr;
console.log(a,b,c)
//while destructring the array the variable names can be taken as any names
//while destructing the objects the variable names should be as same as the keys in the object
let emp={
    eid:100,
    company:'TCS',
    address:{
        city:'hyd'
    }
}
let{eid,company,address:{city}}=emp
console.log(eid,company,city)