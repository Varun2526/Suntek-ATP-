/*
ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions
 */





import { validateDueDate,validateTitle,validatePriority} from "./validator.js";
const tasks = [];


 // 1. Add new task
                    //function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                 //   }
export function addTask(title, priority, dueDate) {
    let validatetitle = validateTitle(title)
    let validatepriority = validatePriority(priority)
    let validateduedate = validateDueDate(dueDate)

  if((!validatetitle || !validatepriority || !validateduedate)){
    return "invalid task"
  }
  else
     tasks.push({title,priority,dueDate})

}

 // 2. Get all tasks
  export function getAllTasks() {
      // Return all tasks
      return tasks;   
  }

// 3. Mark task as complete
export  function completeTask(taskId) {
        return tasks.map((task,index) => {
            if(index === taskId){
                return {...task, status : "complete"}
            }
            else 
                return task
        })
    } 
