import mongoose from "mongoose";

const mobileSchema = mongoose.Schema({
    seller_name: {type: String, required: true},
    modelNO: {type: String, required: true},
    company : {type: String, required: true},
    processor : {type: String, required: true},
    name : {type: String, required: true},
    type : {type: String, required: true},
    memory : {type: String, required: true},
    os : {type: String, required: true},
    actual_price : {type: Number, required: true},
    selling_price : {type: Number, required: true},
    postedOn: {type:Date, default: Date.now},
    img: { 
        data: Buffer, 
        contentType: String 
    }
})

export default mongoose.model("Mobile", mobileSchema);