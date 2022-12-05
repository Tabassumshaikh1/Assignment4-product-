const productModel = require('../model/proschema')
const createProduct=async(req,res)=>{
    const proData=req.body;
    let insert = new productModel(proData);
    await(insert.save((err)=>{
       
        if(err) res.render('create',{errmsg:"something went wrong",succmsg:''});
        else res.render('create',{succmsg:"product is addesd sucessfully",errmsg:''});
    }))
}
const getProduct=(req,res)=>{
    productModel.find({},(err,data)=>{
        if(err) res.send("error")
        else{
            res.render('index',{ prods:data});
        }
    })
}
// const getProductById= async(req,res)=>{
//     let pid=req.params.id;
//     let product= await productModel.findById(pid);
    
//     if(!product){
//         res.status(404).send("Product with id not found")
//     }
//     res.send(product)
// }
// const updateProduct=(req,res)=>{
    // let pid=req.params.id;
    // let formdata=req.body;
    // // console.log({pid})
    // // console.log(formdata)
    // productModel.updateOne({_id:pid},{$set:formdata},(err)=>{
    //     if(err) console.log(err)
    //     else{
    //         res.render('index')
    //     }
    // })
// }
let deleteProduct=(req,res)=>{
    let pid=req.params.id
    productModel.deleteOne({_id:pid},(err)=>{
        if(err){
            res.send("Something wrong")
        }else{
            res.send("Product deleted")
        }
    })
}
module.exports = {createProduct,getProduct}