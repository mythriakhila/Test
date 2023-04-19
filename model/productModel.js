const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    expiry:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("productNodel",productSchema)