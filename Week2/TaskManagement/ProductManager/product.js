const products = 
[
        { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
        { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
        { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
        { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
        { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
  ];
  export function getProductById(id){
    return products.id
  }
  export function getALLProducts(){
    return products
  }
  export function getProductByCategory(category){
    return true
}
export function searchProducts(query){
    return true
}
export function checkStock(productId,quantity){
    if(quantity>100){
        return false
    }
    return true
}

export function reduceStock(productId,quantity){
    return true
}


