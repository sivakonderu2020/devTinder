 const AdminAuth =  (req, res, next )=>{
    const token = 'xyz';
    const isAdminAuthorized = token === 'xyz';
    if( !isAdminAuthorized){
        res.status(401).send("Admin not Authorized!");
        console.log("Admin Not Authorized");

    }else{
       next(); 
    }   

};

const UserAuth =  (req, res, next )=>{
    const token = 'xyz';
    const isUserAuthorized = token === 'xyz';
    if( !isUserAuthorized){
        res.status(401).send("User not Authorized!");
        console.log("Admin Not Authorized");

    }else{
       next(); 
    }   

}
module.exports = {  AdminAuth, UserAuth }