import exp from 'express'
export const productAPP=exp.Router()



//Create product API with below operations
    //create new Product({productid,name,brand,price})
    //Read all Products
    //read all Product by brand
    //Update a product
    //Delete a product by id

    let products=[]
productAPP.get('/products',(req,res)=>{
    res.json({message:"All Products",payload:products})
})

productAPP.post('/products',(req,res)=>{
const newProduct=req.body
products.push(newProduct)
res.json({message:"Product Inserted"})
})

productAPP.put('/products',(req,res)=>{
    let modifiedProduct=req.body
    let index=products.findIndex(ele=>ele.id==modifiedProduct.id)
    if(index==-1){
        return res.json({message:"Product Not Found "})
    }
    products.splice(index,1,modifiedProduct)

    res.json({message:"Product Details Modified"})
})

productAPP.delete('/products/:id',(req,res)=>{
    let idofURl=Number(req.params.id)
    let index=products.findIndex(ele=>ele.id==idofURl)
    if(index==-1){
        return res.json({message:"Product Not Found"})
    }
    products.splice(index,1)
    res.json({message:"Product Removed"})
})

productAPP.get('/products/:brand',(req,res)=>{
    let brandofUrl=req.params.brand
    let product=products.find(ele=>ele.brand=brandofUrl)
    if(product==undefined){
        return res.json({message:"Product Not Find"})
    }
    res.json({message:"The Product is",payload:product})
})