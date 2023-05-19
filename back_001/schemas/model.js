const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        card:{
            type:Number
        },
        amount:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser