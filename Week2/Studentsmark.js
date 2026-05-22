const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const f=students.filter((element)=>element.marks>=40)
console.log(f)
const m=students.map((ele)=>({
    ...ele,
        grade : ele.marks>=90?"A":
        ele.marks>=75?"B":
        ele.marks>=60?"C":"D"

    
}))
console.log(m)
const r=students.reduce((acc,mark)=>acc+mark.marks,0)/students.length
console.log(r)
const i=students.find((student)=>student.marks==92)
console.log(i)
const a=students.findIndex((student)=>student.name=="Kiran")
console.log(a)

