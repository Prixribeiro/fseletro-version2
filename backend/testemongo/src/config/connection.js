const mongoose = require ('mongoose');

function connection(){
    mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("mongoDB conectado com sucesso")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connection()