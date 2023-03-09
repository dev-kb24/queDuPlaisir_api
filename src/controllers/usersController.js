import { checkUser } from "../services/usersService.js";
export const addUser = (User) => {
    return async (req,res) => {
        let data = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }
        const errors = await checkUser(data);
        if(errors.length === 0){
            try {
                const user = new User({
                    ...data
                })
                const userSaved = await user.save();
                res.status(201).json({success:true,data:userSaved});
            } catch (err) {
                res.status(400).json({success:false,error:err});
            }
        }else{
            res.status(400).json({success:false,error:errors});
        }
    }  
}

export const updateUser = (User) => {
    return async (req,res) => {
        const user = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }
        User.findByIdAndUpdate(req.body.id,user,(err,userModified) => {
            if(err){
                res.status(400).json({success:false,error:err});
            }else{
                res.status(200).json({success:true});
            }
        })
    }  
} 

export const findUser = (User) => {
    return async (req,res) => {
        User.findById(req.params.id, (err,user) => {
            if(err){
                res.status(400).json({success:false,data:err});
            }else{
                res.status(200).json({success:true,data:user});
            }
        });
    }
}

export const deleteUser = (User) => {
    return async (req,res) => {
        User.findByIdAndRemove(req.params.id,(err,userRemoved) => {
            if(err){
                res.status(400).json({success:false,data:err});
            }else{
                res.status(200).json({success:true,data:userRemoved});
            }
        })
    }
}