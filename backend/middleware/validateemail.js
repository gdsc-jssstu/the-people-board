var validator = require("email-validator");

const validateMail = (req,res,next) =>{
    const {email} = req.body;
    const v = validator.validate(email); 
    
    if (v){
        next();
    }else{
        let success = 0
        res.json({success,message : "Invalid Mail!"})
    }
}
module.exports = validateMail