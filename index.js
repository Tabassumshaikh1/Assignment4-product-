const express= require('express')
const mongoose=require('mongoose')
//const productRoute = require('./app')
const app = express();
const PORT=3000
app.set("view engine","ejs")
app.set("views",'./views')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//all routes can access
const mainRoutes=require('./app')
app.use('/',mainRoutes);
// const connection = connect()
const DB = mongoose.connect('mongodb+srv://Tabassum:Tabassum1234@cluster0.f8r4yqy.mongodb.net/myProducts',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err);   
    } 
    else{
        console.log(`database is connected successfully`);
    }
})

app.listen(PORT,(err)=>{
    console.log(`Server is working on ${PORT}`);
})
