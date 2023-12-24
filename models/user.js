import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    joinedOn: {type:Date, default: Date.now},
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mobile' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
})

export default mongoose.model("User", userSchema);