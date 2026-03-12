let a=[40,60,22,11]
let min=a[0]
console.log("a is ",a)
for(let i=0;i<a.length;i++){
    if(a[i]<=min){
        min=a[i]
    }
}
console.log("Min Element is ",min)