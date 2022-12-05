const express=require('express')
const router = express.Router()
const {createProduct,getProduct} = require('./controllers/product')
router.post("/createproduct",createProduct)
router.get("/create",(req,res)=>{
    res.render('create',{errmsg:'',succmsg:''});
})

router.get("/getproduct",getProduct)
// router.put("/updateproduct/:id",updateProduct)
// router.get("/updateproduct",updateProduct)
// router.get("/getproduct/:id",getProductById)
// router.delete("/deleteproduct/:id",deleteProduct)
module.exports=router