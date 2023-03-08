export const addProduct = (Product) => {
    return async (req,res) => {
        try {
            const product = new Product({
                name:req.body.name,
                description:req.body.description,
                images:null,
                price:req.body.price,
                quantity:req.body.quantity,
                seller:null,
                category:null,
                brand:null,
                color:null,
                size:null
            })
            const productSaved = await product.save();
            res.status(201).json({success:true,data:productSaved});
        } catch (err) {
            res.status(400).json({success:false,error:err});
        }
    }  
}