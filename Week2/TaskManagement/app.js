import { addTask,getAllTasks } from "./task.js";

addTask("Sleep","HIGH","20-11-2006")
addTask("Eating","MEDIUM","20-11-2025")
const tasks=getAllTasks();
console.log(tasks)