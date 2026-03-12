import  jwt  from 'jsonwebtoken'
const{verify}=jwt 

export function Tokenforproduct(req,res,next){

    const token =req.cookies?.token
    if(!token){
        return res.status(401).json({message:"plz enter Product details "})
    }
    try{
    //if token is existed
        const decodedToken=verify(token,"product")
        console.log(decodedToken)
        next()
    }
    catch(err){
        res.status(401).json({message:"Session expired.Plz re enter Product details"})
    }
}