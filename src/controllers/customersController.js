export const addCustomer = (Customer) => {
    return async (req,res) => {
        try {
            const customer = new Customer({
                customername:req.body.customername,
                email:req.body.email,
                password:req.body.password,
                delivery_adress:req.body.delivery_adress,
                home_adress:req.body.home_adress
            })
            const customerSaved = await customer.save();
            res.status(201).json({success:true,data:customerSaved});
        } catch (err) {
            res.status(400).json({success:false,error:err});
        }
    }  
}

export const updateCustomer = (Customer) => {
    return async (req,res) => {
        const customer = new Customer({
            customername:req.body.customername,
            email:req.body.email,
            password:req.body.password,
            delivery_adress:req.body.delivery_adress,
            home_adress:req.body.home_adress
        })
        
        Customer.findByIdAndUpdate(req.body.id,customer,(err,customerModified) => {
            if(err){
                res.status(400).json({success:false,error:err});
            }else{
                res.status(200).json({success:true,data:customerModified});
            }
        })
    }  
} 

export const findCustomer = (Customer) => {
    return async (req,res) => {
        Customer.findById(req.params.id, (err,customer) => {
            if(err){
                res.status(400).json({success:false,data:err});
            }else{
                res.status(200).json({success:true,data:customer});
            }
        });
    }
}

export const deleteCustomer = (Customer) => {
    return async (req,res) => {
        Customer.findByIdAndRemove(req.params.id,(err,customerRemoved) => {
            if(err){
                res.status(400).json({success:false,data:err});
            }else{
                res.status(200).json({success:true,data:customerRemoved});
            }
        })
    }
}