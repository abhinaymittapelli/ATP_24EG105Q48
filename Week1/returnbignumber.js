//write a function thar receives 3 numbers args and return the big number
function findBig(a,b,c){
console.log("a is ",a)
console.log("b is ",b)
console.log("c is ",c)
if(a>b&&a>c){
    return a;
}else if(b>a&&b>c){
    return b;
}else{
    return c;
}
}
let x=88;
let y=44;
let z=77;

r=findBig(x,y,z)
console.log(r,"is Big");

