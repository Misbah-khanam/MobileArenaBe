import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    mobile: { type: mongoose.Schema.Types.ObjectId, ref: 'Mobile' },
    address:  {type: String, required: true},
    phone: {type: String, required: true},
    payment_type: {type: String, required: true},
    orderOn: {type:Date, default: Date.now},
})

export default mongoose.model("Order", OrderSchema);