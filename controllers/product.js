const getAllProduct = async(req, res)=>{
    res.status(200).json({msg :"hi this process is working"});
}
const getAllProductTesting = async(req, res)=>{
    res.status(200).json({msg :"hi this process is working on testing"});
}


module.exports ={  getAllProductTesting, getAllProduct};