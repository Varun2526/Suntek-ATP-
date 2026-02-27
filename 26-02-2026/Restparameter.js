/**
 * Rest Parameters in JavaScript
 * Accepting variable number of arguments in functions
 * Difference between rest parameters and spread operator
 */

//RestParameters
//if we do not know the no of parameters to be passed while writing the function and to decide the no of parameters while calling the function we need to make the paramenters as rest parameters
//the symbol used to make a parameter as rest parameter we use(...) symbol
//(...) acts differently when used as spread operator and for converion of parameters
function Sum(...a){//we should not use any formal parameters after the  rest parameter is used
    console.log(a,b)
}
Sum(10,20,30,40)

// If more than 1 arguments need to be mentioned then use the rest parameter atlast



