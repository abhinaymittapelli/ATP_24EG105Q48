const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let f=cart.filter((element)=>element.inStock)
console.log("Instock products ",f)
let n=cart.map((element)=>({
  ...element,
  name:element.name,
  totalprice:element.price*element.quantity
  
}))
console.log(n)
let r=cart.reduce((acc,val)=>acc+(val.price*val.quantity),0)
console.log(r)
const a=cart.find((item)=>item.name=="Mouse")
console.log(a)
const i=cart.findIndex((item)=>item.name=="Keyboard")
console.log(i)

