import Joi from "joi";
export const checkUser = async (data)=>{
 const schema = Joi.object({
    username:Joi.string().alphanum().required(),
    email:Joi.string().email({ minDomainSegments: 2}).required(),
    password:Joi.string().required()
 })
 try {
    await schema.validateAsync(data,{abortEarly:false})
    return [];
 } catch (err) {
    let errors = [];
    err.details.forEach(e => {
        errors.push(e.message);
    })
    return errors;
 }

}