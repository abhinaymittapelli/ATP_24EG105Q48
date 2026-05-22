const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const f=employees.filter(element=>element.department=="IT")
console.log(f)
const m=employees.map((element)=>({
    ...element,
    netSalary: element.salary + (element.salary * 10) / 100
}));
console.log(m)
const r=employees.reduce((acc,element)=>acc+element.salary,0)
console.log(r)
const a=employees.find((element)=>element.salary==30000)
console.log(a)
const i=employees.findIndex((element)=>element.name=="Neha")
console.log(i)
