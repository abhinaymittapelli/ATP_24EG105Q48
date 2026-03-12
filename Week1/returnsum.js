//write a function that receives an array as arg and return their sum
function findSum(x){
let sum=0;
for(let i=0;i<x.length;i++){
    sum=sum+x[i]
}
return sum;
}

let a=[40,89,44,33]

console.log("a is ",a)
r=findSum(a)
console.log("Sum is ",r)

