import { validateDueDate,validatePriority,validateTitle } from "./validator.js"
let tasks=[]

export function addTask(title,priority,duedate){
    if(!validateTitle(title)&&!validatePriority(priority)&&!validateDueDate(duedate)){
        return "Invalid"
    }
    tasks.push({title,priority,duedate})
    return true

}
export function getAllTasks(){
return tasks
}