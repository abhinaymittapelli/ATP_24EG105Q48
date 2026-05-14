import exp from 'express'
export const productAPP=exp.Router()



//Create product API with below operations
    //create new Product({productid,name,brand,price})
    //Read all Products
    //read all Product by brand
    //Update a product
    //Delete a product by id// Array used to store product data
let products = [];


// GET API → Fetch all products
productAPP.get('/products', (req, res) => {

    // Sending all products as response
    res.json({
        message: "All Products",
        payload: products
    });
});


// POST API → Add a new product
productAPP.post('/products', (req, res) => {

    // Reading product data from request body
    const newProduct = req.body;

    // Adding new product into products array
    products.push(newProduct);

    // Sending response after insertion
    res.json({
        message: "Product Inserted"
    });
});


// PUT API → Update existing product details
productAPP.put('/products', (req, res) => {

    // Reading modified product data
    let modifiedProduct = req.body;

    // Finding index of product using id
    let index = products.findIndex(
        ele => ele.id == modifiedProduct.id
    );

    // If product is not found
    if (index == -1) {
        return res.json({
            message: "Product Not Found "
        });
    }

    // Replacing old product with modified product
    products.splice(index, 1, modifiedProduct);

    // Sending success response
    res.json({
        message: "Product Details Modified"
    });
});


// DELETE API → Delete product using id
productAPP.delete('/products/:id', (req, res) => {

    // Reading id from URL parameter
    let idofURl = Number(req.params.id);

    // Finding product index using id
    let index = products.findIndex(
        ele => ele.id == idofURl
    );

    // If product does not exist
    if (index == -1) {
        return res.json({
            message: "Product Not Found"
        });
    }

    // Removing product from array
    products.splice(index, 1);

    // Sending delete success response
    res.json({
        message: "Product Removed"
    });
});


// GET API → Fetch product using brand name
productAPP.get('/products/:brand', (req, res) => {

    // Reading brand from URL parameter
    let brandofUrl = req.params.brand;

    // Finding product using brand name
    // Comparison operator should be '==' instead of '='
    let product = products.find(
        ele => ele.brand == brandofUrl
    );

    // If product not found
    if (product == undefined) {
        return res.json({
            message: "Product Not Find"
        });
    }

    // Sending found product as response
    res.json({
        message: "The Product is",
        payload: product
    });
});