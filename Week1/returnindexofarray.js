//write a function that receive an array & search element as args and returns the index of that search element in the array.it should return not found when search element not found

function findIndex(x,key){

    let i
    for(let i=0;i<x.length;i++){
        if(x[i]==key){
    
        return i
        }
    }
    return "not found"
}
let a=[44,43,89,33,99,33]
let search=89
console.log("a is ",a)
r=findIndex(a,search)
console.log("Index of ",search,"is ",r);