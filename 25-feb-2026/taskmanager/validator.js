/*

Requirements:
     Create a modular todo app with 3 separate files:

       
          
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }
*/
// function validateTitle(title) {
//      // Your code here
//                       }


export function validateTitle  (title)  {
   if(!title)
    return "title required"
   if(title && title.length >=3)
    return true
}

export function validateDueDate(date) {
    let currentDate = new Date()
    let inputDate = new Date(date)

    if (inputDate > currentDate){
        return true
    }
    else 
        return "due date must be a future date"
}

export function validatePriority(priority) {
    if ((priority === 'low') || (priority === 'medium') || (priority ==='high')){
        return true
    }
    else 
        return false
}