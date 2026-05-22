const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const f=transactions.filter((element)=>element.type=="credit")
console.log(f)
const m=transactions.map((element)=>element.amount)
console.log(m)
const r=transactions.reduce((acc,ele)=>{
    if(ele.type==="credit"){
      return  acc+ele.amount
    }else{
      return  acc-ele.amount
    }
},0)
console.log(r)
const a=transactions.find((ele)=>ele.type=="debit")
console.log(a)
const i=transactions.findIndex((ele)=>ele.amount==10000)
console.log(i)
