
/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */
const courses = ["javascript", "react", "node", "mongodb", "express"];

//Courses whose length greater than 5
let r=courses.filter((element)=>element.length>5)
console.log(r)

//Courses convert toUpperCase
let u=courses.map((element)=>element.toUpperCase())
console.log(u)

//Split it into single string
let s=courses.reduce((acc,course)=>acc.toUpperCase()+"|"+course.toLowerCase())
console.log(s)

//Finding course and index of course
let f=courses.find((course)=>course=="react")
console.log(f)
let i=courses.findIndex((course)=>course=="node")
console.log(i);


